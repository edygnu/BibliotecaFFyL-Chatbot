import React, { useEffect, useRef, useState } from "react";
import Chatbot from "./ChatBot";
import "./ChatbotWidget.css";

const mascotSource = "/img/chatbot/1000217221.png";
const mascotFallback = "/img/logo.jpg";
const OPENING_FLIGHT_MS = 2050;

const MascotRig = ({ open, gesture }) => (
    <span className={`book-mascot-rig ${open ? "is-open" : "is-closed"} gesture-${gesture}`}>
        <img
            src={mascotSource}
            alt="Asistente virtual de la biblioteca"
            className="mascot-layer mascot-base"
            onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = mascotFallback;
            }}
        />

        <img src={mascotSource} alt="" aria-hidden="true" className="mascot-layer part eye eye-left" />
        <img src={mascotSource} alt="" aria-hidden="true" className="mascot-layer part eye eye-right" />
        <img src={mascotSource} alt="" aria-hidden="true" className="mascot-layer part brow brow-left" />
        <img src={mascotSource} alt="" aria-hidden="true" className="mascot-layer part brow brow-right" />
        <img src={mascotSource} alt="" aria-hidden="true" className="mascot-layer part mouth" />
        <img src={mascotSource} alt="" aria-hidden="true" className="mascot-layer part hand hand-left" />
        <img src={mascotSource} alt="" aria-hidden="true" className="mascot-layer part hand hand-right" />
    </span>
);

const ChatbotWidget = () => {
    const [open, setOpen] = useState(false);
    const [inputActive, setInputActive] = useState(false);
    const [botThinking, setBotThinking] = useState(false);
    const [gesture, setGesture] = useState("idle");
    const [openGreeting, setOpenGreeting] = useState(false);
    const [openingFlight, setOpeningFlight] = useState(false);
    const openingFlightTimerRef = useRef(null);

    useEffect(() => () => {
        if (openingFlightTimerRef.current) {
            window.clearTimeout(openingFlightTimerRef.current);
        }
    }, []);

    useEffect(() => {
        let timerId;

        if (open) {
            setOpenGreeting(true);
            timerId = window.setTimeout(() => {
                setOpenGreeting(false);
            }, 1200);
        } else {
            setOpenGreeting(false);
        }

        return () => {
            if (timerId) {
                window.clearTimeout(timerId);
            }
        };
    }, [open]);

    useEffect(() => {
        if (open && openGreeting) {
            setGesture("wave");
            return undefined;
        }

        if (botThinking || (open && inputActive)) {
            setGesture("ponder");
            return undefined;
        }

        const closedSequence = ["idle", "smile", "wave", "look-left", "look-right", "blink-fast"];
        const openSequence = ["idle", "smile", "nod", "look-left", "look-right"];
        const sequence = open ? openSequence : closedSequence;
        let index = Math.floor(Math.random() * sequence.length);
        let timeoutId;

        setGesture(sequence[index]);

        const scheduleNext = () => {
            const base = open ? 2300 : 2000;
            const variance = open ? 1200 : 1500;
            const delay = base + Math.floor(Math.random() * variance);

            timeoutId = window.setTimeout(() => {
                // Avoid repeating the same pose too often.
                const step = Math.random() > 0.72 ? 2 : 1;
                index = (index + step) % sequence.length;
                setGesture(sequence[index]);
                scheduleNext();
            }, delay);
        };

        scheduleNext();

        return () => {
            if (timeoutId) {
                window.clearTimeout(timeoutId);
            }
        };
    }, [open, inputActive, botThinking, openGreeting]);

    const handleChatStatusChange = ({ inputActive: nextInputActive, botThinking: nextBotThinking }) => {
        setInputActive(nextInputActive);
        setBotThinking(nextBotThinking);
    };

    const handleToggle = () => {
        if (open) {
            setOpen(false);
            setOpeningFlight(false);
            if (openingFlightTimerRef.current) {
                window.clearTimeout(openingFlightTimerRef.current);
                openingFlightTimerRef.current = null;
            }
            return;
        }

        if (openingFlight) {
            return;
        }

        setOpen(true);
        setOpeningFlight(true);

        openingFlightTimerRef.current = window.setTimeout(() => {
            setOpeningFlight(false);
            openingFlightTimerRef.current = null;
        }, OPENING_FLIGHT_MS);
    };

    const handleLaunchAnimationEnd = (event) => {
        if (event.animationName !== "mascot-open-flight") {
            return;
        }

        setOpeningFlight(false);
        if (openingFlightTimerRef.current) {
            window.clearTimeout(openingFlightTimerRef.current);
            openingFlightTimerRef.current = null;
        }
    };

    return (
        <div className="chatbot-widget">
            {!open && !openingFlight && (
                <div className="chatbot-comic-bubble" aria-hidden="true">
                    Consultame
                </div>
            )}

            {open && (
                <div className="chatbot-popup">
                    <button
                        className="chatbot-close"
                        onClick={() => {
                            setOpen(false);
                            setOpeningFlight(false);
                            if (openingFlightTimerRef.current) {
                                window.clearTimeout(openingFlightTimerRef.current);
                                openingFlightTimerRef.current = null;
                            }
                        }}
                    >
                        ×
                    </button>
                    <Chatbot onStatusChange={handleChatStatusChange} />
                </div>
            )}

            <button
                className={`chatbot-toggle ${open ? "chatbot-toggle-open" : "chatbot-toggle-closed"} ${openingFlight ? "chatbot-toggle-launching" : ""}`}
                type="button"
                aria-label={open ? "Cerrar chatbot" : "Abrir chatbot"}
                onClick={handleToggle}
                onAnimationEnd={handleLaunchAnimationEnd}
            >
                <span className="chatbot-mascot-shell">
                    <MascotRig open={open} gesture={gesture} />
                </span>
            </button>
        </div>
    );
};

export default ChatbotWidget;
