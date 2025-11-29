import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
// Initialize safe AI instance (handling case where env might be missing gracefully in UI)
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const generateCreativeConcept = async (userIdea: string): Promise<string> => {
  if (!ai) {
    throw new Error("API Key not configured. Unable to access Creative Assistant.");
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