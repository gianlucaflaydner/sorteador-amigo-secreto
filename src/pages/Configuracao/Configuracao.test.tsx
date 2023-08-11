import { render } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import Configuracao from "./Configuracao";

const mockNavegaçao = jest.fn();

jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockNavegaçao,
  };
});

describe("a pagina de configuraçao", () => {
  test("deve ser renderizada corretamente", () => {
    const { container } = render(
      <RecoilRoot>
        <Configuracao />
      </RecoilRoot>
    );

    expect(container).toMatchSnapshot();
  });
});
