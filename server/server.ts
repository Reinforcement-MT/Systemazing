import express,{ Application,Request,Response,ErrorRequestHandler } from 'express';
import { ServerError } from './types/server-types';
// import dotenv from 'dotenv';
// dotenv.config();

// import in routers
import { router as apiRouter } from './routes/apiRouter.ts'

// Create server
const app: Application = express();
const PORT: number = 3000;

// parse incoming requests
app.use(express.text());

// app.use(express.json());

// incoming route handlers
app.use('/api',apiRouter);


// unknown route handler
app.use('/*',(_: Request,res: Response): void => {

  res.status(404).send('Unknown Route')

})


// global error handler
const errorHandler: ErrorRequestHandler = (err,_,res,__) => {
  const defaultError: ServerError = {
    log: 'Unknown middleware error occurred',
    status: 500,
    message: {
      err: 'Unknown error'
    }
  };

  const errorObj = Object.assign(defaultError,err);

  res.status(500).json(errorObj);
}
app.use(errorHandler);

// start server
app.listen(PORT,() => {
  console.log(`App listening on ${PORT}`)
})


export default app;