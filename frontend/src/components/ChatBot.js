import React, { useState, useEffect, useRef } from 'react';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
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

    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (!input.trim()) return;

        const userMessage = { sender: "user", text: input };
        
        
        setMessages((prevMessages) => [...prevMessages, userMessage]);
        setInput("");

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

            
            const botMessages = data.map((msg) => ({ sender: "bot", text: msg.text }));
            setMessages((prevMessages) => [...prevMessages, ...botMessages]);
            
        } catch (error) {
            console.error("Error:", error);
            setMessages((prevMessages) => [...prevMessages, { 
                sender: "bot", 
                text: "Lo siento, ha ocurrido un error. Intenta nuevamente." 
            }]);
        }
    };

    return (
        <div className="chatbot">
            <div 
                className="chatbot-messages" 
                ref={messagesContainerRef}
            >
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`message ${msg.sender}`}
                        dangerouslySetInnerHTML={{ __html: msg.text }}
                    />
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