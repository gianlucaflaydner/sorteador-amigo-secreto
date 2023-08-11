
import { useListaDeParticipantes } from "./useListaDeParticipantes"
import { useSetRecoilState } from "recoil";
import { resultadoSorteador } from "../atom";
import { realizarSorteio } from "../helpers/RealizarSorteio/realizarSorteio";

export const useSorteador = () => {
    const participantes = useListaDeParticipantes()
    const setResultado = useSetRecoilState(resultadoSorteador)
    return () => {
       const resultado = realizarSorteio(participantes)
        setResultado(resultado)       
    }
}