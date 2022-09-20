import dotenv from 'dotenv';
import helmet from 'helmet';
import express, { Application, NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import 'reflect-metadata';
import backofficeRoutes from './application/backoffice/routes';
import { exceptionHandler } from './application/shared/middlewares/exceptionHandler';

import swaggerUi from "swagger-ui-express";
import swaggerSetup from '../docs/swagger';
import mysql from '../config/conexion';

dotenv.config({ path: __dirname + '../../.env' });

const app: Application = express();
const port = process.env.PORT; 

app.use(helmet());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// const swaggerDoc = process.env.SWAGGER_DOC!
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerSetup));

backofficeRoutes(app, '/api');

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  exceptionHandler(error, res);
  next();
});

app.listen(port, () => {
  console.info('server run on port: ' + port);
});

mysql()

export default app;
