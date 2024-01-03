import { RequestHandler,Request,Response,NextFunction } from 'express';
import '../types/server-types'
import OpenAI from "openai"
import dotenv from 'dotenv';
import { ServerError } from '../types/server-types';

dotenv.config();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const makeQuery: RequestHandler = async (req: Request,res: Response,next: NextFunction) => {
  try {

    const { query } = req.body;

    const params: OpenAI.Chat.ChatCompletionCreateParams = {
      model: "gpt-3.5-turbo-1106",
      response_format: { "type": "json_object" },
      messages: [
        { "role": "system","content": "You are a software engineering coach for system design interviews." },
        { "role": "user","content": `${query}` }
      ]
    };

    const chatCompletion: OpenAI.Chat.ChatCompletion = await client.chat.completions.create(params);

    // console.log('makeQuery - chatCompletion: ',chatCompletion);

    res.locals.chatCompletion = chatCompletion['choices'][0]['message']['content']

    return next();
  }
  catch (err) {
    const error: ServerError = {
      log: 'Error occurred in makeQuery middleware function',
      status: 500,
      message: {
        err: `${err}`
      }
    }
    return next(error);
  }
};

export { makeQuery }
