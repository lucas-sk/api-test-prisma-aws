import { Request, Response } from 'express'
import { prismaClient } from '../database/prismaClient';

export class ListUserControllers{
  async handle(request: Request, response: Response) {
    try {
      const users = await prismaClient.user.findMany()
  
      if (users.length === 0) {
        return response.status(200).json({ message: "não possui usuários"})
      }
      
      return response.status(200).json(users);

    } catch (e) {
      console.log(e);
    }
  }
}

