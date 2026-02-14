import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are the "Enotribe Core", an AI interface for Enotribe LLC. 
Enotribe is a high-end software development and consultancy firm specializing in:
1. Research and Development (R&D) for complex technical problems.
2. AI Solutions (LLM integration, Computer Vision, Predictive Analytics).
3. Scalable Architecture for Corporations and Startups.

Your tone should be:
- Minimalist and precise.
- Slightly futuristic/cyberpunk but professional.
- Confident but not arrogant.

Keep responses concise (under 50 words usually). 
If asked about pricing, say "We operate on a bespoke basis. Contact us for a consultation."
If asked about specific technologies, list: React, Python, TensorFlow, Google Cloud, Node.js, Rust.
`;

export const sendMessageToGemini = async (history: { role: string, parts: { text: string }[] }[], message: string): Promise<string> => {
  try {
    const model = 'gemini-3-flash-preview';
    
    // We can use a simple chat session or single generation. 
    // For simplicity in this stateless service wrapper, we'll use generateContent with system instruction context 
    // effectively by prepending or using the chat method if we were maintaining state here.
    // However, to keep it simple and stateless for the UI:
    
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history,
    });

    const result = await chat.sendMessage({ message });
    return result.text || "No response data.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Enotribe Core: CONNECTION INTERRUPTED.";
  }
};