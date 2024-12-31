import OpenAI from "openai";

export function getOpenAIClient() {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    baseUrl: 'https://api.zhizengzeng.com/v1',
  });

  return openai;
}
