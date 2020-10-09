import{NOVO_ID} from './types'

export function alterarId(novoId){
    return{
        type:NOVO_ID,
        payload: novoId
    }//Ação
}//Criador de ação