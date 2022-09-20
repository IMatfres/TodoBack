import { Application, Request, Response } from 'express';
import userRouter from './userRoutes';
import authRouter from './authRoutes'
import taskRouter from './taskRoutes'
import { tokenValidation } from '../../shared/middlewares/authToken'
export default (app: Application, prefix: string): void => {
  app.get(prefix, (req: Request, res: Response) => res.send({ message: `Wellcome to '${prefix}' routes` }));
  app.use(prefix, authRouter);
  app.use(prefix, tokenValidation);
  app.use(prefix, userRouter);
  app.use(prefix, taskRouter)
  
};
