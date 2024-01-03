import { Router,Response,Request } from 'express';
import { makeQuery } from '../controllers/queryController.ts';

const router = Router();


router.post('/queryChat',makeQuery,(_,res: Response) => {

  const chatCompletion = res.locals.chatCompletion;

  // console.log('apiRouter - chatCompletion: ',chatCompletion);

  res.status(200).json(chatCompletion);

});

export {
  router
};