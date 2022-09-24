import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

import { prismaClient } from '../database/prismaClient';
import { checkNamePass } from '../utils/checkNamePass';


export class CreateUserController {
  async handle(request: Request, response: Response) {
    try {
      const { name, password } = request.body;
      const hashedPassword = await bcrypt.hash(password, 10);
  
      if(checkNamePass(name, password)){
        return response.json({message: "name e password são obrigatórios"});
      };
  
      const user = await prismaClient.user.create({ data: { name: name, password: hashedPassword } });

      return response.status(201).json(user);
    } catch(e){
      console.log(e);
    }
  }
}
