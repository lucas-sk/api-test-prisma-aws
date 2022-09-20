import { Request, Response } from 'express'
import { prismaClient } from '../database/prismaClient';
import { checkNamePass } from '../utils/checkNamePass';

export class UpdateUserController{
  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const { name, password } = request.body;
          
      if(checkNamePass(name, password)){
        return response.json({message: "name ou password não pode ser vazio"});
      };
      const user = await prismaClient.user.update({
        where: {
          id: Number(id)
        },
        data: {
          name,
          password
        }
      });
  
      return response.status(204).json(user);
    } catch (e) {
      console.log(e)
    }
  }
}


