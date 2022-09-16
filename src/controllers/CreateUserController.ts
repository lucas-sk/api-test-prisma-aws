import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';


export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, senha } = request.body;

    const user = await prismaClient.user.create({ data: { name: name, senha: senha } });

    return response.json(user);
  }
}
