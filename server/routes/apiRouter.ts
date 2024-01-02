import { Router,Response } from 'express';


const router = Router();


router.post('/queryChat',(_,res: Response) => {

  const chatCompletion = res.locals.chatCompletion;

  res.status(200).json(chatCompletion);

})

export default router;