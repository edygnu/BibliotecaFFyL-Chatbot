import React, { useState, useEffect, useRef } from 'react';

const URL_REGEX = /(https?:\/\/[^\s<]+)/gi;
const MARKDOWN_LINK_REGEX = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/gi;

const escapeHtml = (text = '') => (
    text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
);

const buildAnchor = (url, label = url) => {
    const safeUrl = escapeHtml(url);
    const safeLabel = escapeHtml(label);
    return `<a href="${safeUrl}" target="_blank" rel="noopener noreferrer">${safeLabel}</a>`;
};

const formatBotMessage = (text = '') => {
    const markdownLinks = [];
    let linkIndex = 0;

    const textWithTokens = text.replace(MARKDOWN_LINK_REGEX, (_, label, url) => {
        const token = `__CHATBOT_LINK_${linkIndex}__`;
        markdownLinks.push({ token, html: buildAnchor(url, label) });
        linkIndex += 1;
        return token;
    });

    let html = escapeHtml(textWithTokens).replace(/\n/g, '<br />');
    html = html.replace(URL_REGEX, (url) => buildAnchor(url));

    markdownLinks.forEach(({ token, html: linkHtml }) => {
        html = html.replace(token, linkHtml);
    });

    return html;
};

const Chatbot = ({ onStatusChange }) => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isThinking, setIsThinking] = useState(false);
    const messagesEndRef = useRef(null);
    const messagesContainerRef = useRef(null);

    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ 
                behavior: "smooth",
                block: "end",
                inline: "nearest"
            });
        }
        
        setTimeout(() => {
            if (messagesContainerRef.current) {
                messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
            }
        }, 100);
    };

    
    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        if (!onStatusChange) return;

        onStatusChange({
            inputActive: input.trim().length > 0,
            botThinking: isThinking,
        });
    }, [input, isThinking, onStatusChange]);

    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (!input.trim()) return;

        const userMessage = { sender: "user", text: input };
        
        
        setMessages((prevMessages) => [...prevMessages, userMessage]);
        setInput("");
        setIsThinking(true);

        try {
            const response = await fetch("/webhooks/rest/webhook", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    sender: "user",
                    message: input,
                }),
            });

            const data = await response.json();
            console.log(data);

            
            const botMessages = data.map((msg) => ({
                sender: "bot",
                text: msg.text || "",
                html: formatBotMessage(msg.text || ""),
            }));
            setMessages((prevMessages) => [...prevMessages, ...botMessages]);
            
        } catch (error) {
            console.error("Error:", error);
            setMessages((prevMessages) => [...prevMessages, { 
                sender: "bot", 
                text: "Lo siento, ha ocurrido un error. Intenta nuevamente." 
            }]);
        } finally {
            setIsThinking(false);
        }
    };

    return (
        <div className="chatbot">
            <div 
                className="chatbot-messages" 
                ref={messagesContainerRef}
            >
                {messages.map((msg, index) => (
                    msg.sender === "bot" ? (
                        <div
                            key={index}
                            className={`message ${msg.sender}`}
                            dangerouslySetInnerHTML={{ __html: msg.html }}
                        />
                    ) : (
                        <div
                            key={index}
                            className={`message ${msg.sender}`}
                        >
                            {msg.text}
                        </div>
                    )
                ))}
                {/* ← Elemento invisible al final para scroll automático */}
                <div ref={messagesEndRef} style={{ height: '1px' }} />
            </div>
            <form onSubmit={handleSubmit} className="chatbot-input">
                <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Consulta a nuestro chatbot..."
                />
                <button type="submit" className="whatsapp-send-btn" aria-label="Enviar">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="white"
                    >
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                    </svg>
                </button>
            </form>
        </div>
    );
};

export default Chatbot;