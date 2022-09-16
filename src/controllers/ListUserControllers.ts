import { Request, Response } from 'express'
import { prismaClient } from '../database/prismaClient';

export class ListUserControllers{
  async handle(request: Request, response: Response) {
    const users = await prismaClient.user.findMany()

    return response.json(users);
  }
}

