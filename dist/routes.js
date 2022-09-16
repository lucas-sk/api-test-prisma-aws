"use strict";
exports.__esModule = true;
exports.routes = void 0;
// import dependency
var express_1 = require("express");
// import Local
var CreateUserController_1 = require("./controllers/CreateUserController");
var DeleteUserController_1 = require("./controllers/DeleteUserController");
var FindUserController_1 = require("./controllers/FindUserController");
var ListUserControllers_1 = require("./controllers/ListUserControllers");
var UpdateUserController_1 = require("./controllers/UpdateUserController");
// instanciando Router do express
var routes = (0, express_1.Router)();
exports.routes = routes;
// chamando as classes dos controllers
var listUsers = new ListUserControllers_1.ListUserControllers();
var findUser = new FindUserController_1.FindUserController();
var updateUser = new UpdateUserController_1.UpdateUserController();
var deleteUser = new DeleteUserController_1.DeleteUserController();
var createUser = new CreateUserController_1.CreateUserController();
// as routas
routes.get('/users', listUsers.handle);
routes.get('/users/:id', findUser.handle);
routes.post('/users', createUser.handle);
routes.put('/users/:id', updateUser.handle);
routes["delete"]('/users/:id', deleteUser.handle);
routes.get('/', function (req, res) {
    return res.json({ message: "Hello World!" });
});
routes.get('*', function (req, res) {
    res.send('what???');
});
routes.post('*', function (req, res) {
    res.send('what???');
});
routes["delete"]('*', function (req, res) {
    res.send('what???');
});
routes.put('*', function (req, res) {
    res.send('what???');
});
//# sourceMappingURL=routes.js.map