// Importa o modelo User de userModel.js
import User from "../model/userModel.js";

// Para postar dados no banco de dados
export const create = async(req, res)=>{
    try {
        // Cria uma nova instância de User com o corpo da requisição
        const userData = new User( req.body);
        const {email} = userData;
        // Verifica se um usuário com o mesmo e-mail já existe
        const userExist = await User.findOne({email})
        if (userExist){
            return res.status(400).json({message : "User already exists."})
        }
       
        // Salva os novos dados do usuário no banco de dados
        const savedUser = await userData.save();
        console.log('teste', savedUser );
        
        // Envia uma resposta de sucesso com os dados do usuário salvo
        res.status(200).json(savedUser)
    } catch (error) {
        // Lida com qualquer erro e envia uma resposta de erro interno do servidor
        res.status(500).json({error : "Internal Server Error. "})
    }
}

// Para buscar todos os usuários do banco de dados
export const fetch = async (req, res)=>{
    try {
        // Encontra todos os usuários no banco de dados
        const users = await User.find();
        // Se nenhum usuário for encontrado, envia uma resposta de erro 404
        if(users.length === 0 ){
            return res.status(404).json({message : "Users not Found."})
        }
        // Envia uma resposta de sucesso com os dados dos usuários encontrados
        res.status(200).json(users);
    } catch (error) {
        // Lida com qualquer erro e envia uma resposta de erro interno do servidor
        res.status(500).json({error : " Internal Server Error. "})
    }
}

// Para atualizar dados
export const update = async (req, res)=>{
    try {
        // Extrai o id do usuário dos parâmetros da requisição
        const id = req.params.id;
        // Verifica se o usuário com o id fornecido existe
        const userExist = await User.findOne({_id:id})
        if (!userExist){
            return res.status(404).json({message : "User not found."})
        }
        // Atualiza os dados do usuário e retorna o usuário atualizado
        const updateUser = await User.findByIdAndUpdate(id, req.body, {new : true});
        res.status(201).json(updateUser);
    } catch (error) {
        // Lida com qualquer erro e envia uma resposta de erro interno do servidor
        res.status(500).json({error : " Internal Server Error. "})
    }
}

// Para deletar dados do banco de dados
export const deleteUser = async (req, res)=>{
    try {
        // Extrai o id do usuário dos parâmetros da requisição
        const id = req.params.id;
        // Verifica se o usuário com o id fornecido existe
        const userExist = await User.findOne({_id:id})
        if(!userExist){
            return res.status(404).json({message : " User Not Found. "})
        }
        // Deleta o usuário do banco de dados
        await User.findByIdAndDelete(id);
        // Envia uma resposta de sucesso
        res.status(201).json({message : " User deleted Successfully."})
    } catch (error) {
        // Lida com qualquer erro e envia uma resposta de erro interno do servidor
        res.status(500).json({error : " Internal Server Error. "})
    }
}
