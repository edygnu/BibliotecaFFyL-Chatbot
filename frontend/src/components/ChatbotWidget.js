import React, { useState } from "react";
import Chatbot from "./ChatBot";
import "./ChatbotWidget.css";

const ChatbotWidget = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="chatbot-widget">
            {open && (
                <div className="chatbot-popup">
                    <button className="chatbot-close" onClick={() => setOpen(false)}>×</button>
                    <Chatbot />
                </div>
            )}
            {!open && (
                <button className="chatbot-toggle" onClick={() => setOpen(true)}>
                    💬
                </button>
            )}
        </div>
    );
};

export default ChatbotWidget;