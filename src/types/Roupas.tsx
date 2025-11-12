export interface Roupas {
    id: string | undefined;
    nome: string;
    descrição: string;
    preco:number;
    tamanho: number | null;
    categorias: string[];
    imagens: string[];
}