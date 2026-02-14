import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Send, Minimize2, Maximize2 } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const Terminal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Enotribe Core v1.0 initialized. Awaiting input...' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsTyping(true);

    try {
        // Convert to history format for Gemini
        const history = messages.map(m => ({
            role: m.role,
            parts: [{ text: m.text }]
        }));

      const response = await sendMessageToGemini(history, userMsg);
      setMessages(prev => [...prev, { role: 'model', text: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: 'Error: Connection interrupted.' }]);
    } finally {
      setIsTyping(false);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-eno-black border border-eno-accent/50 text-eno-accent p-3 rounded-full hover:bg-eno-accent hover:text-black transition-all duration-300 shadow-lg shadow-eno-accent/20 z-50 group"
        aria-label="Open Terminal"
      >
        <TerminalIcon className="w-6 h-6 animate-pulse-slow group-hover:animate-none" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-full max-w-md bg-eno-black/95 backdrop-blur-md border border-eno-accent/30 rounded-lg shadow-2xl z-50 flex flex-col overflow-hidden font-mono text-sm h-[500px] transition-all duration-300">
      {/* Header */}
      <div className="flex items-center justify-between p-3 border-b border-eno-accent/20 bg-eno-gray/50">
        <div className="flex items-center gap-2 text-eno-accent">
          <TerminalIcon className="w-4 h-4" />
          <span className="text-xs tracking-widest uppercase">Enotribe_Core</span>
        </div>
        <div className="flex items-center gap-2">
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                <Minimize2 className="w-4 h-4" />
            </button>
        </div>
      </div>
      {/* Output */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 font-mono">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] ${msg.role === 'user' ? 'text-gray-300 text-right' : 'text-eno-accent'}`}>
               <span className="opacity-50 text-[10px] block mb-1">
                 {msg.role === 'user' ? '> USER' : '> CORE'}
               </span>
               <div className="leading-relaxed whitespace-pre-wrap">
                 {msg.text}
               </div>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
             <div className="text-eno-accent animate-pulse">
                {'>'} Processing...
             </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-3 border-t border-eno-accent/20 bg-eno-black flex items-center gap-2">
        <span className="text-eno-accent font-bold">{'>'}</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Query the system..."
          className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-600 font-mono"
        />
        <button type="submit" disabled={isTyping || !input.trim()} className="text-eno-accent disabled:opacity-30 hover:text-white transition-colors">
            <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};

export default Terminal;