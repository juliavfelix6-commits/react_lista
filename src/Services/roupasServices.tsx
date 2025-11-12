import axios from "axios";
import type {Roupas} from "../types/Roupas";

export const getRoupas = async (): Promise<Roupas[]> => {
try {
    const resposta = await axios.get("http://localhost:3000/produtos");
    return resposta.data
} catch (error) {
    console.error("Erro ao buscar dados: ", error );
    throw error;
    
}
}
    