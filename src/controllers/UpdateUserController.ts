import { Request, Response } from 'express'
import { prismaClient } from '../database/prismaClient';

export class UpdateUserController{
  async handle(request: Request, response: Response) {

    const { id } = request.params;
    const { name, senha } = request.body;

    const user = await prismaClient.user.update({
      where: {
        id: Number(id)
      },
      data: {
        name: name,
        senha: senha
      }
    });

    return response.json(user);
  }
}

// /users/id
// body 


