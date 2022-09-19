import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';


export class CreateUserController {
  async handle(request: Request, response: Response) {
    try {
      const { name, senha } = request.body;
  
      if ( name.length === 0 && senha.length === 0 ) {
        return response.status(404).json({ message: 'Nome e senha obrigatório'});
      }
  
      const user = await prismaClient.user.create({ data: { name: name, senha: senha } });

      return response.status(401).json(user);
    } catch(e){
      console.log(e);
    }
  }
}
