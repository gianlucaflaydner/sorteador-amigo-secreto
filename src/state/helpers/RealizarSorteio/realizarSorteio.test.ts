
import { realizarSorteio } from "./realizarSorteio";

describe('dado um sorteio de amigo secreto', () => {

    test('cada participantes não sorteie o proprio nome', () => {

        const participantes = ['Gianluca', 'Isadora', 'Martina', 'Germano', 'Scheila', 'Leandro']

        const sorteio = realizarSorteio(participantes);

        participantes.forEach((participante) => {
            const amigoSecreto = sorteio.get(participante)
            expect(amigoSecreto).not.toEqual(participante)
        })
    })
})