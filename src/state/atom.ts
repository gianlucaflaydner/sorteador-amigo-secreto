import { atom } from "recoil";

export const listaDeParticipantesState = atom<string[]>({
    key: 'listaDeParticipantesState',
    default: []
})



export const erroState = atom<string>({

    key: 'erroState',
    default: ''
})


export const resultadoSorteador = atom<Map<string, string>>({

    key:'resultadoSorteador',
    default: new Map()

})

