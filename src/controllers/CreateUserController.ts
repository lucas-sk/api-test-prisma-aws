import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';
import { checkNamePass } from '../utils/checkNamePass';


export class CreateUserController {
  async handle(request: Request, response: Response) {
    try {
      const { name, password } = request.body;
  
      if(checkNamePass(name, password)){
        return response.json({message: "name e password são obrigatórios"});
      };
  
      const user = await prismaClient.user.create({ data: { name, password } });

      return response.status(201).json(user);
    } catch(e){
      console.log(e);
    }
  }
}
