import mongoose from "mongoose";

// Define o schema para a entidade usuário
const userSchema = new mongoose.Schema({
  // Define a propriedade name com o tipo String e a restrição de required
  name: {
    type: String,
    required: true,
  },
  // Define a propriedade email com o tipo String e a restrição de required
  email: {
    type: String,
    required: true,
  },
  // Define a propriedade address com o tipo String e a restrição de required
  address: {
    type: String,
    required: true,
  },
});

// Cria e exporta o modelo Mongoose para a coleção "users" com base no userSchema
export default mongoose.model("users", userSchema);
