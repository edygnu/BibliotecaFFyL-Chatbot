import unittest

import requests

from actions.actions import ActionBuscarCatalogo


class DummyDispatcher:
    def __init__(self):
        self.messages = []

    def utter_message(self, text):
        self.messages.append(text)


class DummyTracker:
    def __init__(self, user_text, materia=None):
        self.latest_message = {
            "text": user_text,
            "intent": {"name": "buscar_libro_materia"},
            "entities": [],
        }
        self._slots = {
            "titulo_libro": None,
            "autor_libro": None,
            "materia_libro": materia,
        }

    def get_slot(self, name):
        return self._slots.get(name)


class CatalogoSubjectTests(unittest.TestCase):
    def test_literatura_mendocina_se_buscara_como_materia_completa(self):
        captured = {}

        class FakeResponse:
            status_code = 200

            def raise_for_status(self):
                return None

            def json(self):
                return {
                    "resultCount": 1,
                    "records": [{
                        "title": "Literatura mendocina",
                        "authors": {"primary": {"Autor": "Autor"}},
                        "formats": ["Libro"],
                    }],
                }

        def fake_get(url, params=None, headers=None, timeout=None):
            captured["url"] = url
            captured["params"] = params
            return FakeResponse()

        original_get = requests.get
        try:
            requests.get = fake_get
            action = ActionBuscarCatalogo()
            tracker = DummyTracker("busco literatura mendocina", materia="literatura")
            dispatcher = DummyDispatcher()

            action.run(dispatcher, tracker, {})

            self.assertEqual(captured["params"]["lookfor"], "literatura mendocina")
            self.assertEqual(captured["params"]["type"], "Subject")
        finally:
            requests.get = original_get

    def test_libros_sobre_san_martin_se_buscara_como_materia(self):
        captured = {}

        class FakeResponse:
            status_code = 200

            def raise_for_status(self):
                return None

            def json(self):
                return {
                    "resultCount": 1,
                    "records": [{
                        "title": "San Martín",
                        "authors": {"primary": {"Autor": "Autor"}},
                        "formats": ["Libro"],
                    }],
                }

        def fake_get(url, params=None, headers=None, timeout=None):
            captured["params"] = params
            return FakeResponse()

        original_get = requests.get
        try:
            requests.get = fake_get
            action = ActionBuscarCatalogo()
            tracker = DummyTracker("libros sobre san martin", materia=None)
            dispatcher = DummyDispatcher()

            action.run(dispatcher, tracker, {})

            self.assertEqual(captured["params"]["lookfor"], "san martin")
            self.assertEqual(captured["params"]["type"], "Subject")
        finally:
            requests.get = original_get

    def test_literatura_generica_pide_aclaracion(self):
        action = ActionBuscarCatalogo()
        tracker = DummyTracker("literatura", materia=None)
        dispatcher = DummyDispatcher()

        action.run(dispatcher, tracker, {})

        self.assertTrue(any("literatura argentina" in m or "literatura en general" in m for m in dispatcher.messages))

    def test_respuesta_catalogo_es_natural_y_ayuda_a_seguir(self):
        captured = {}

        class FakeResponse:
            status_code = 200

            def raise_for_status(self):
                return None

            def json(self):
                return {
                    "resultCount": 2,
                    "records": [{
                        "title": "Literatura mendocina",
                        "authors": {"primary": {"Autor": "Autor"}},
                        "formats": ["Libro"],
                    }],
                }

        def fake_get(url, params=None, headers=None, timeout=None):
            captured["params"] = params
            return FakeResponse()

        original_get = requests.get
        try:
            requests.get = fake_get
            action = ActionBuscarCatalogo()
            tracker = DummyTracker("busco literatura mendocina", materia="literatura")
            dispatcher = DummyDispatcher()

            action.run(dispatcher, tracker, {})

            response = dispatcher.messages[0]
            self.assertIn("Te dejo los más relevantes", response)
            self.assertIn("Si querés", response)
        finally:
            requests.get = original_get


if __name__ == "__main__":
    unittest.main()
