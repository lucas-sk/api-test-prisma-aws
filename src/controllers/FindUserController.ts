import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';

export class FindUserController{
  async handle(request: Request, response: Response) {
    try {

      const { id } = request.params
      const user = await prismaClient.user.findUnique({
          where: {
            id: Number(id),
          },
        });
      return response.status(200).json(user);
    } catch (e) {
      console.log(e);
    }
  }
}

