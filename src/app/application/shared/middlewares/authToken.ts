import { NextFunction, Request, Response } from "express";
import { AuthErrorException } from '../../../boundedContext/shared/domain/utils/authErrorException'
import { TokenErrorException } from '../../../boundedContext/shared/domain/utils/TokenNotValid'
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
dotenv.config()
type JwtPayload = {
    id: string
}
export const tokenValidation = (req: Request, res: Response, next: NextFunction) => {
    const {authorization} = req.headers
    if (!authorization) {
      throw new AuthErrorException()
    }

    try {
        const token = authorization.split(' ')[1]
        const payload = jwt.verify(token, process.env.JWT_PASS!) as JwtPayload
        const data: string = payload.id
        req.userlogueado = data
        next()
    } catch (error) {
        throw new TokenErrorException()
    }
}