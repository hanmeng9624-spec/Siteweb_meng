import { GoogleGenAI } from "@google/genai";

// In Vite, use import.meta.env.VITE_API_KEY if available, or fall back safely.
// Note: You must add VITE_API_KEY to your Vercel Environment Variables.
const apiKey = import.meta.env?.VITE_API_KEY || '';

// Initialize safe AI instance
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const generateCreativeConcept = async (userIdea: string): Promise<string> => {
  if (!ai) {
    // Return a mock response if no API key is set, to prevent app crashing for visitors
    console.warn("API Key not configured. Returning mock response.");
    return new Promise(resolve => setTimeout(() => {
        resolve("The muse whispers of a design where reality bends... (Please configure VITE_API_KEY in Vercel to activate real AI generation).");
    }, 1500));
  }

  try {
    const modelId = 'gemini-2.5-flash';
    
    const systemInstruction = `
      You are the creative muse for HAN Meng, a surrealist and impressionist tattoo artist.
      Your goal is to take a user's rough idea, memory, or emotion and translate it into a visual description of a tattoo design.
      
      The Design Style:
      - Surrealist composition (floating elements, dream logic, impossible geometries).
      - Impressionist coloring (visible brushstrokes, light manipulation, Monet/Van Gogh palettes).
      
      Output:
      - Provide a poetic, vivid description (approx 50-80 words) of what the tattoo would look like.
      - Focus on visual elements, colors, and feelings.
      - Do not sound like a robot. Sound like an artist pitching a sketch.
      - End with a call to action to email HAN Meng to book this piece.
    `;

    const response = await ai.models.generateContent({
      model: modelId,
      contents: `Client Idea: "${userIdea}"\n\nDescribe the tattoo concept:`,
      config: {
        systemInstruction: systemInstruction,
        temperature: 1.2, // High creativity
      }
    });

    return response.text || "The muse is silent. Please try again.";
  } catch (error) {
    console.error("Gemini Error:", error);
    throw new Error("Unable to connect to the creative muse at this moment.");
  }
};