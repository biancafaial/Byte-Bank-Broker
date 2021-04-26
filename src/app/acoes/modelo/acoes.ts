export interface Acoes extends Array<Acoes>{}

export interface Acoes {
    id: number;
    codigo: string;
    descricao: string;
    preco: number;
}
export interface AcoesAPI{
    payload: Acoes;
}