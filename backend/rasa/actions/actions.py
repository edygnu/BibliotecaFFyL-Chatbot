# This files contains your custom actions which can be used to run
# custom Python code.
#
# See this guide on how to implement these action:
# https://rasa.com/docs/rasa/custom-actions


# This is a simple example for a custom action which utters "Hello World!"

from typing import Any, Text, Dict, List
import re
from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher
from rasa_sdk.events import SlotSet


class ActionHelloWorld(Action):

    def name(self) -> Text:
        return "action_hello_world"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        dispatcher.utter_message(text="Hello World!")

        return []

class ActionInformarServicios(Action):
    def name(self) -> Text:
        return "action_informar_servicios"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        dispatcher.utter_message(text="La biblioteca ofrece servicios de préstamo de libros, acceso a computadoras y salas de estudio.")
        return []

class ActionInformarUbicacion(Action):
    def name(self) -> Text:
        return "action_informar_ubicacion"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        dispatcher.utter_message(text="La biblioteca está ubicada en el edificio principal de la Facultad de Filosofía y Letras.")
        return []


class ActionBuscarCatalogo(Action):
    """Busca libros en el catálogo de la UNCuyo (todas las sedes).
    Primero intenta buscar en la Biblioteca FFyL, y si no hay resultados,
    expande la búsqueda a todo el catálogo de UNCuyo."""

    CATALOGO_URL = "https://bibliotecas.uncuyo.edu.ar/explorador3/api/v1/search"
    FILTRO_FFYL = 'building:"Fac. de Filosofía y Letras"'
    RESULTADOS_URL = "https://bibliotecas.uncuyo.edu.ar/explorador3/Search/Results"
    HEADERS = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Referer': 'https://bibliotecas.uncuyo.edu.ar/',
        'Accept': 'application/json',
    }

    def name(self) -> Text:
        return "action_buscar_catalogo"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        import requests
        import logging

        def limpiar_termino(texto: Text) -> Text:
            termino = (texto or "").strip()
            termino = re.sub(r'^[\s"\'“”‘’]+|[\s"\'“”‘’?.!,;:]+$', "", termino)
            termino = re.sub(r'\s+', " ", termino).strip()
            return termino

        def inferir_desde_texto(texto: Text, intent_name: Text) -> Dict[Text, Text]:
            original = (texto or "").strip()
            if not original:
                return {}

            # Solo asumir título libre cuando el intent ya sugiere búsqueda.
            permitir_titulo_libre = intent_name in {
                "buscar_libro_titulo",
                "buscar_libro_autor",
                "buscar_libro_materia",
            }

            # Pistas semánticas para activar búsqueda cuando el intent cayó en fallback.
            pistas_catalogo = re.search(
                r'\b(libro|libros|autor|autora|obra|obras|t[íi]tulo|cat[áa]logo|buscar|busco|busc[áa]|bibliograf[íi]a|material|materia|tema|novela|cuento|poes[íi]a|ensayo)\b',
                original,
                flags=re.IGNORECASE,
            )

            # Permite consultas cortas que suelen ser solo título (ej: "Dune").
            palabras = [p for p in re.split(r'\s+', original) if p]
            consulta_corta = 1 <= len(palabras) <= 6
            pistas_no_catalogo = re.search(
                r'\b(horario|telefono|pr[eé]stamo|carnet|sala|hemeroteca|contacto|donaci[oó]n|renovaci[oó]n|devoluci[oó]n|gracias|hola|adi[oó]s|clima|partido|biblioteca|ubicaci[oó]n|direcci[oó]n)\b',
                original,
                flags=re.IGNORECASE,
            )
            pregunta_general = re.search(
                r'^\s*(d[oó]nde|cuando|cu[aá]ndo|c[oó]mo|qu[eé]|qui[eé]n|cu[aá]l|cu[aá]nt[oa]s?)\b',
                original,
                flags=re.IGNORECASE,
            )
            titulo_corto_probable = consulta_corta and not pistas_no_catalogo and not pregunta_general

            if not permitir_titulo_libre and not pistas_catalogo and not titulo_corto_probable:
                return {}

            patron_autor = re.search(
                r'(?:libros?|obras?|material(?:es)?|publicaciones?)\s+(?:de|del|de la|de los|de las)\s+(.+)',
                original,
                flags=re.IGNORECASE,
            )
            if patron_autor:
                autor_inf = limpiar_termino(patron_autor.group(1))
                if autor_inf:
                    return {"tipo": "Author", "termino": autor_inf, "etiqueta": f'libros del autor "*{autor_inf}*"'}

            patron_autor_2 = re.search(
                r'(?:autor(?:a)?|escritor(?:a)?)\s*(?:es|de|:)?\s+(.+)',
                original,
                flags=re.IGNORECASE,
            )
            if patron_autor_2:
                autor_inf = limpiar_termino(patron_autor_2.group(1))
                if autor_inf:
                    return {"tipo": "Author", "termino": autor_inf, "etiqueta": f'libros del autor "*{autor_inf}*"'}

            patron_materia = re.search(
                r'(?:libros?|material(?:es)?|bibliograf[íi]a|textos?)\s+(?:sobre|acerca de)\s+(.+)',
                original,
                flags=re.IGNORECASE,
            )
            if patron_materia:
                materia_inf = limpiar_termino(patron_materia.group(1))
                if materia_inf:
                    return {"tipo": "Subject", "termino": materia_inf, "etiqueta": f'material sobre la materia "*{materia_inf}*"'}

            patron_titulo = re.search(
                r'(?:libro|t[íi]tulo)\s+(?:"|\')?(.+)',
                original,
                flags=re.IGNORECASE,
            )
            if patron_titulo:
                titulo_inf = limpiar_termino(patron_titulo.group(1))
                if titulo_inf:
                    return {"tipo": "Title", "termino": titulo_inf, "etiqueta": f'el libro "*{titulo_inf}*"'}

            intent_name = intent_name or ""
            if intent_name == "buscar_libro_autor":
                autor_inf = limpiar_termino(original)
                if autor_inf:
                    return {"tipo": "Author", "termino": autor_inf, "etiqueta": f'libros del autor "*{autor_inf}*"'}
            if intent_name == "buscar_libro_materia":
                materia_inf = limpiar_termino(original)
                if materia_inf:
                    return {"tipo": "Subject", "termino": materia_inf, "etiqueta": f'material sobre la materia "*{materia_inf}*"'}

            # Si vino por fallback pero incluye "de <algo>", priorizar autor.
            if intent_name == "nlu_fallback":
                patron_de_fallback = re.search(
                    r'\b(?:de|del|de la|de los|de las)\s+(.+)',
                    original,
                    flags=re.IGNORECASE,
                )
                if patron_de_fallback and re.search(r'\b(libros?|obras?|material(?:es)?)\b', original, flags=re.IGNORECASE):
                    autor_inf = limpiar_termino(patron_de_fallback.group(1))
                    if autor_inf:
                        return {"tipo": "Author", "termino": autor_inf, "etiqueta": f'libros del autor "*{autor_inf}*"'}

            texto_sin_prefijo = re.sub(
                r'^(?:por favor\s+)?(?:busco|buscame|busc[áa]|quiero|necesito|consultar|consultame|me interesa|tienen|ten[ée]s|hay)\s+(?:el|la|los|las)?\s*',
                "",
                original,
                flags=re.IGNORECASE,
            )
            if (
                not permitir_titulo_libre
                and not titulo_corto_probable
                and not re.search(r'\b(libro|t[íi]tulo|novela|cuento|poes[íi]a|ensayo)\b', original, flags=re.IGNORECASE)
            ):
                return {}

            titulo_inf = limpiar_termino(texto_sin_prefijo or original)
            if titulo_inf:
                return {"tipo": "Title", "termino": titulo_inf, "etiqueta": f'el libro "*{titulo_inf}*"'}
            return {}

        def extraer_autor(rec: Dict[Text, Any]) -> Text:
            """Soporta los distintos formatos de autores que puede devolver VuFind."""
            authors = rec.get("authors")

            if isinstance(authors, dict):
                primary = authors.get("primary")
                if isinstance(primary, dict):
                    if primary:
                        return next(iter(primary.keys()))
                elif isinstance(primary, list) and primary:
                    return str(primary[0])
                elif isinstance(primary, str) and primary:
                    return primary

                secondary = authors.get("secondary")
                if isinstance(secondary, list) and secondary:
                    return str(secondary[0])

            if isinstance(authors, list) and authors:
                if isinstance(authors[0], dict):
                    nombre = authors[0].get("name")
                    if nombre:
                        return str(nombre)
                return str(authors[0])
            if isinstance(authors, str) and authors:
                return authors

            author = rec.get("author")
            if isinstance(author, str) and author:
                return author

            return "Autor desconocido"

        def extraer_formato(rec: Dict[Text, Any]) -> Text:
            formatos = rec.get("formats", ["Material"])
            if isinstance(formatos, list):
                return ", ".join(str(f) for f in formatos if f)
            if isinstance(formatos, str):
                return formatos
            return "Material"

        logger = logging.getLogger(__name__)

        titulo = tracker.get_slot("titulo_libro")
        autor = tracker.get_slot("autor_libro")
        materia = tracker.get_slot("materia_libro")
        texto_usuario = tracker.latest_message.get("text", "") if tracker.latest_message else ""
        intent_actual = ""
        if tracker.latest_message:
            intent_actual = tracker.latest_message.get("intent", {}).get("name", "")

        if titulo:
            termino = titulo
            tipo = "Title"
            etiqueta = f"el libro \"*{titulo}*\""
        elif autor:
            termino = autor
            tipo = "Author"
            etiqueta = f"libros del autor \"*{autor}*\""
        elif materia:
            termino = materia
            tipo = "Subject"
            etiqueta = f"material sobre la materia \"*{materia}*\""
        else:
            inferido = inferir_desde_texto(texto_usuario, intent_actual)
            if not inferido:
                if intent_actual == "nlu_fallback":
                    dispatcher.utter_message(text="Por el momento no tengo una respuesta a esa pregunta. ¿En qué más te puedo ayudar?")
                else:
                    dispatcher.utter_message(text="Por favor indicame el título, autor o materia que querés buscar.")
                return []
            termino = inferido["termino"]
            tipo = inferido["tipo"]
            etiqueta = inferido["etiqueta"]

        logger.info(f"Buscando en catálogo: {tipo}='{termino}'")
        
        try:
            resp = requests.get(
                self.CATALOGO_URL,
                params={
                    "lookfor": termino,
                    "type": tipo,
                    "filter[]": self.FILTRO_FFYL,
                    "limit": 5,
                },
                headers=self.HEADERS,
                timeout=8,
            )
            logger.info(f"Respuesta de API: Status {resp.status_code}")
            resp.raise_for_status()
            data = resp.json()
            logger.info(f"Resultados encontrados: {data.get('resultCount', 0)}")
        except requests.exceptions.Timeout:
            logger.error("Timeout al conectar con la API de catálogo")
            dispatcher.utter_message(
                text="La búsqueda está tardando demasiado. "
                     "Podés buscarlo directamente en https://bibliotecas.uncuyo.edu.ar/"
            )
            return [
                SlotSet("titulo_libro", None),
                SlotSet("autor_libro", None),
                SlotSet("materia_libro", None),
            ]
        except requests.exceptions.ConnectionError as e:
            logger.error(f"Error de conexión: {str(e)}")
            dispatcher.utter_message(
                text="En este momento no puedo conectarme al catálogo. "
                     "Podés buscarlo directamente en https://bibliotecas.uncuyo.edu.ar/"
            )
            return [
                SlotSet("titulo_libro", None),
                SlotSet("autor_libro", None),
                SlotSet("materia_libro", None),
            ]
        except Exception as e:
            logger.error(f"Error inesperado: {type(e).__name__}: {str(e)}")
            dispatcher.utter_message(
                text="En este momento no puedo conectarme al catálogo. "
                     "Podés buscarlo directamente en https://bibliotecas.uncuyo.edu.ar/"
            )
            return [
                SlotSet("titulo_libro", None),
                SlotSet("autor_libro", None),
                SlotSet("materia_libro", None),
            ]

        total = data.get("resultCount", 0)
        registros = data.get("records", [])
        sede = "Biblioteca FFyL"

        # Si no hay resultados en FFyL, buscar en todo UNCuyo
        if total == 0 or not registros:
            logger.info(f"No hay resultados en {sede}, buscando en todo UNCuyo...")
            
            try:
                resp = requests.get(
                    self.CATALOGO_URL,
                    params={
                        "lookfor": termino,
                        "type": tipo,
                        "limit": 5,
                    },
                    headers=self.HEADERS,
                    timeout=8,
                )
                resp.raise_for_status()
                data = resp.json()
                total = data.get("resultCount", 0)
                registros = data.get("records", [])
                sede = "todo UNCuyo"
                logger.info(f"Resultados en todo UNCuyo: {total}")
            except Exception as e:
                logger.error(f"Error en búsqueda alternativa: {type(e).__name__}: {str(e)}")

        # Si aún no hay resultados
        if total == 0 or not registros:
            dispatcher.utter_message(
                text=f"No encontré resultados para {etiqueta} en el catálogo.\n"
                     "Podés intentar buscar directamente en https://bibliotecas.uncuyo.edu.ar/"
            )
            return [
                SlotSet("titulo_libro", None),
                SlotSet("autor_libro", None),
                SlotSet("materia_libro", None),
            ]

        lineas = [f"Encontré **{total}** resultado(s) para {etiqueta} en {sede}. Acá te muestro los primeros:"]
        for rec in registros:
            t = rec.get("title", "Sin título")
            autor_str = extraer_autor(rec)
            formato = extraer_formato(rec)
            lineas.append(f"\n📚 **{t}**\n   ✍️ {autor_str}\n   📄 {formato}")

        # Armar link directo al catálogo
        import urllib.parse
        params_url = urllib.parse.urlencode({
            "lookfor": termino,
            "type": tipo,
        }, doseq=True)
        url_catalogo = f"{self.RESULTADOS_URL}?{params_url}"
        lineas.append(f"\n🔗 [Ver todos los resultados en el catálogo]({url_catalogo})")

        dispatcher.utter_message(text="\n".join(lineas))
        return [
            SlotSet("titulo_libro", None),
            SlotSet("autor_libro", None),
            SlotSet("materia_libro", None),
        ]
