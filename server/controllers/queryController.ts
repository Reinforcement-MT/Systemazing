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

    const { description,graph } = req.body;
    // const query = 'System: Video Streaming Application. System Requirements: Upload and Stream content. System Design: client CONNECTS TO database THAT stores original file, which CONNECTS TO server THAT encodes the video file, which CONNECTS TO a database THAT stores the encoded video file AND a load balancer THAT distributes content to a CDN, which CONNECTS TO other clients.'

    const params: OpenAI.Chat.ChatCompletionCreateParams = {
      model: "gpt-3.5-turbo",
      messages: [
        { "role": "system","content": "You are a software engineering coach for system design interviews. Please critique this system design in a few paragraphs. Please do not use a numbered list for your response." },
        { "role": "user","content": `${description}: ${graph};` }
      ]
    };

    const chatCompletion: OpenAI.Chat.ChatCompletion = await client.chat.completions.create(params);

    // console.log('makeQuery - chatCompletion: ',chatCompletion);

    res.locals.chatCompletion = chatCompletion['choices'][0]['message']['content']

    return next();
  }
  catch (err) {
    console.error(err);
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
