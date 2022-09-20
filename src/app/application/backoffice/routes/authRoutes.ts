import express, { Request, Response, Router } from 'express';
import { asyncHandler } from '../../shared/framework/utils/asyncHandler';
import { UserLogController } from '../controllers/auth/userLogController'
import { UserCreateController } from '../controllers/users/userCreateController';

const router: Router = express.Router();

router.post('/users/login', asyncHandler((req: Request, res: Response) => {
  const userLogController: UserLogController = new UserLogController();

  return userLogController.run(req, res);
}));

router.post('/users/register', asyncHandler((req: Request, res: Response) => {
    const userCreateController: UserCreateController = new UserCreateController();
  
    return userCreateController.run(req, res);
  }));

export default router;
