import { Request, Response } from 'express'
import { prismaClient } from '../database/prismaClient';

export class DeleteUserController{
  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params;
  
      await prismaClient.user.delete({
        where: { id: Number(id) },
      })
  
      return response.status(204).json({ message: `o usúario ${id} foi deletado`});
    }catch(e) {
      console.log(e);
    }

  }
}

