// Importa o módulo express
import express from "express";

// Importa as funções do controller para manipular as rotas de usuários
import { create, deleteUser, fetch, update } from "../controller/userController.js";

// Cria uma nova instância do router
const route = express.Router();

// Define as rotas e suas respectivas funções do controller
route.get("/getallusers", fetch); // Rota para buscar todos os usuários
route.post ("/create", create); // Rota para criar um novo usuário
route.put("/update/:id", update); // Rota para atualizar um usuário pelo ID
route.delete("/delete/:id", deleteUser); // Rota para deletar um usuário pelo ID

// Exporta o router
export default route;
