// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node
import { GoogleGenAI } from "@google/genai";

async function main(prompt) {
  const ai = new GoogleGenAI({
    apiKey: "AIzaSyAocYgWA_Wmm5Y9z0EA54GXvZ2-1Ofjqss",
  });

  const response = await ai.models.generateContentStream({
    model: "gemini-3-flash-preview",
    contents: [
      {
        role: "user",
        parts: [{ text: prompt }],
      },
    ],
  });

  let fullText = "";

  for await (const chunk of response) {
    if (chunk.text) {
      fullText += chunk.text;
      console.log(chunk.text);
    }
  }

  return fullText;
}

export default main;

// AIzaSyAocYgWA_Wmm5Y9z0EA54GXvZ2-1Ofjqss
