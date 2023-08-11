import { act, fireEvent, render, screen } from "@testing-library/react";
import Formulario from "./Formulario";
import { RecoilRoot } from "recoil";

describe('Comportamento do Formulário.tsx', () => {
    test("quando o input está vazio, novos participantes não podem ser adicionados", () => {
        render(
          <RecoilRoot>
            <Formulario />
          </RecoilRoot>
        );
      
        const input = screen.getByPlaceholderText(
          "Insira os nomes dos participantes"
        );
      
        const botao = screen.getByRole("button");
      
        expect(input).toBeInTheDocument();
      
        expect(botao).toBeDisabled();
      });
      
      test("adicionar um participantes caso exista um nome preenchido", () => {
        render(
          <RecoilRoot>
            <Formulario />
          </RecoilRoot>
        );
      
        const input = screen.getByPlaceholderText(
          "Insira os nomes dos participantes"
        );
        const botao = screen.getByRole("button");
      
        fireEvent.change(input, {
          target: {
            value: "Gianluca",
          },
        });
        fireEvent.click(botao);
      
        expect(input).toHaveFocus();
      
        expect(input).toHaveValue("");
      });
      
      test("nomes duplicados nao podem ser adicionados na lista", () => {
        render(
          <RecoilRoot>
            <Formulario />
          </RecoilRoot>
        );
      
        const input = screen.getByPlaceholderText(
          "Insira os nomes dos participantes"
        );
        const botao = screen.getByRole("button");
      
        fireEvent.change(input, {
          target: {
            value: "Gianluca",
          },
        });
        fireEvent.click(botao);
      
        fireEvent.change(input, {
          target: {
            value: "Gianluca",
          },
        });
        fireEvent.click(botao);
      
        const mensagemDeErro = screen.getByRole("alert");
        expect(mensagemDeErro.textContent).toBe(
          "Nomes duplicados não são permitidos."
        );
      });
      
      test("mensagem de erro desaparece depois de um tempo", () => {
        jest.useFakeTimers();
      
        render(
          <RecoilRoot>
            <Formulario />
          </RecoilRoot>
        );
      
        const input = screen.getByPlaceholderText(
          "Insira os nomes dos participantes"
        );
        const botao = screen.getByRole("button");
      
        fireEvent.change(input, {
          target: {
            value: "Gianluca",
          },
        });
        fireEvent.click(botao);
      
        fireEvent.change(input, {
          target: {
            value: "Gianluca",
          },
        });
        fireEvent.click(botao);
      
        let mensagemDeErro = screen.queryByRole("alert");
        expect(mensagemDeErro).toBeInTheDocument();
      
        act(() => {
          jest.runAllTimers();
        });
      
        mensagemDeErro = screen.queryByRole("alert");
        expect(mensagemDeErro).toBeNull();
      });
      
})

