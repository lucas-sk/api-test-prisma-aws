import { Request, Response } from 'express'
import { prismaClient } from '../database/prismaClient';

export class UpdateUserController{
  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const { name, senha } = request.body;
          
      if ( name.length === 0){
        return response.status(404).json({ message: "O nome não pode ser vazio"})
      }
      if ( senha.length === 0){
        return response.status(404).json({ message: "A senha não pode ser vazia"})
      }
      const user = await prismaClient.user.update({
        where: {
          id: Number(id)
        },
        data: {
          name: name,
          senha: senha
        }
      });
  
      return response.status(204).json(user);
    } catch (e) {
      console.log(e)
    }
  }
}


