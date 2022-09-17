// import dependency
import { Router } from "express";

// import Local
import { CreateUserController } from "./controllers/CreateUserController";
import { DeleteUserController } from "./controllers/DeleteUserController";
import { FindUserController } from "./controllers/FindUserController";
import { ListUserControllers } from "./controllers/ListUserControllers";
import { UpdateUserController } from "./controllers/UpdateUserController";

// instanciando Router do express
const routes = Router();

// chamando as classes dos controllers
const listUsers = new ListUserControllers()
const findUser = new FindUserController()
const createUser = new CreateUserController()
const updateUser = new UpdateUserController()
const deleteUser = new DeleteUserController()


// as routas
routes.get('/users', listUsers.handle);
routes.get('/users/:id/', findUser.handle);
routes.post('/users', createUser.handle);
routes.put('/users/:id', updateUser.handle);
routes.delete('/users/:id', deleteUser.handle);

routes.get('/', (req, res) => {
  return res.json({ message: "Hello World!" });
});

routes.all('*', function(req, res){
  res.send('what???');
});

export { routes };