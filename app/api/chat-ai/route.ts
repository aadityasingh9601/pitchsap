import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

import { GoogleGenAI } from "@google/genai";
// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({apiKey:process.env.AI_API_KEY ?? "AIzaSyBmE-kjRUfUXZ1YTqI5xBLuIVsahZeyutU"});

async function main(userPrompt:string) {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: userPrompt,
    config:{
        systemInstruction:`
        You are an AI assistant bot for user queries on PitchSap.
        PitchSap – First End-to-End Startup Platform Blending AI, Expert Mentorship & Founder Hacks
        Turn ideas into action with confidence. PitchSap combines expert guidance, AI-powered insights,
        and community feedback to help you shape, validate, and move forward with clarity.
        Pitchsap is committed to helping entrepreneurs turn their ideas into reality. With expert
        guidance, community support, and a proven process, we’re your partner in success.
        A platform where founders validate ideas through AI insights, expert feedback, and community support
        Anyone with a startup idea — from first-time founders to serial entrepreneurs and industry consultants.
        Submit your idea, get AI analysis instantly, then receive detailed reviews from vetted consultants\
        Start free with basic features. Upgrade anytime for unlimited reviews and premium mentorship.
        AI spots gaps, risks, and opportunities in your idea — making every review smarter and faster.
        Founders rate consultants on clarity and helpfulness, building trust through transparency.
        Upgrade, downgrade, or cancel anytime with no hidden fees.
        You'll get notified and can upgrade instantly or wait for the next billing cycle.
        Yes, within 7 days of purchase if you're not satisfied with the service.
        `
    }
  });
  return response.text;
}


export const POST = async (req: Request, res: NextApiResponse) => {
  try {
    const {message} = await req.json();
    const response = await main(message);
    
    return Response.json({
        data:response,
        status:200
    })
  } catch (e) {
    console.log(e)
    return Response.json({
      message: "Something went wrong! Try again!",
      status: 400,
    });
  }
};