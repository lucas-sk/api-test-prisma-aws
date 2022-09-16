import { Request, Response } from 'express'
import { prismaClient } from '../database/prismaClient';

export class UpdateUserController{
  async handle(request: Request, response: Response) {
    
    const { id } = request.params
    const { name, senha } = request.body

    const user = await prismaClient.user.update({ 
      data: {
        name: name, 
        senha: senha
      },
      where: {
        id: Number(id)
      }
    })
    

    return response.json(user);
  }
}

