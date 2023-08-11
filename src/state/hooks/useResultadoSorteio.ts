import { useRecoilValue } from "recoil"
import { resultadoSorteador } from "../atom"

export const useResultadoSorteio = () => {

    return useRecoilValue(resultadoSorteador)
}