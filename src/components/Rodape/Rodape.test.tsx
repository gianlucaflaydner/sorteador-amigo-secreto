import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import Rodape from "./Rodape";
import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes";

jest.mock('../../state/hooks/useListaDeParticipantes', () => {
    return {
        useListaDeParticipantes: jest.fn()
    }
})

const mockNavegaçao = jest.fn()
const mockSorteio = jest.fn()

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavegaçao
    }
})

jest.mock('../../state/hooks/useSorteador', () => {
    return {
        useSorteador: () => mockSorteio
    }
})

describe('quando não existem participantes suficientes', () => {

    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue([])
    })

    test('a brincadeira não pode ser iniciada', () => {
        render(<RecoilRoot>
            <Rodape />
        </RecoilRoot>)

        const botao = screen.getByRole('button');
        expect(botao).toBeDisabled()

    })
});

describe('quando existem participantes suficientes', () => {

    const participantes = ['Isadora', 'Gianluca', 'Gê']

    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes)
    })

    test('a brincadeira pode ser iniciada', () => {

        render(<RecoilRoot>
            <Rodape />
        </RecoilRoot>)

        const botao = screen.getByRole('button');
        expect(botao).not.toBeDisabled()
    })


    test('a brincadeira foi iniciada', () => {

       
        render(<RecoilRoot>
            <Rodape />
        </RecoilRoot>)

        const botao = screen.getByRole('button');
        expect(botao).not.toBeDisabled()

        fireEvent.click(botao)
        expect(mockNavegaçao).toHaveBeenCalledTimes(1)
        expect(mockNavegaçao).toHaveBeenCalledWith('/sorteio')
        expect(mockSorteio).toHaveBeenCalledTimes(1)
    })
})