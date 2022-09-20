import express, { Request, Response, Router } from 'express';
import { asyncHandler } from '../../shared/framework/utils/asyncHandler';
import { TaskCreateController } from '../controllers/tasks/taskCreateController';
import { TaskDeleteController } from '../controllers/tasks/taskDeleteController';
import { TaskSearchController } from '../controllers/tasks/taskSearchController';
import { TaskSearchOneController } from '../controllers/tasks/taskSearchOneController';
import { TaskUpdateController } from '../controllers/tasks/taskUpdateController';

const router: Router = express.Router();

router.get('/tasks/:id', asyncHandler((req: Request, res: Response) => {
  const taskSearchOneController: TaskSearchOneController = new TaskSearchOneController();

  return taskSearchOneController.run(req, res);
}));

router.get('/tasks', asyncHandler((req: Request, res: Response) => {
  const taskSearchController: TaskSearchController = new TaskSearchController();

  return taskSearchController.run(req, res);
}));

router.post('/tasks', asyncHandler((req: Request, res: Response) => {
  const taskCreateController: TaskCreateController = new TaskCreateController();

  return taskCreateController.run(req, res);
}));

router.put('/tasks/:id', asyncHandler((req: Request, res: Response) => {
  const taskUpdateController: TaskUpdateController = new TaskUpdateController();

  return taskUpdateController.run(req, res);
}));

router.delete('/tasks/:id', asyncHandler((req: Request, res: Response) => {
  const taskDeleteController: TaskDeleteController = new TaskDeleteController();

  return taskDeleteController.run(req, res);
}));

export default router;
