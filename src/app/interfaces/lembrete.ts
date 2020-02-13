type PRIORIDADE = 'BAIXA' | 'MEDIA' | 'ALTA';
export interface Lembrete {

id: number;
conteudo: string;
arquivado: boolean;
prioridade: PRIORIDADE;
modificado: number;

}
