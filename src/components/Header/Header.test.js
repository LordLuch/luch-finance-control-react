import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./index";

// Teste do componente Header
test("deve renderizar o título corretamente", () => {
  // Renderiza o componente
  render(<Header />);

  // Verifica se o texto 'Controle Financeiro' está no documento
  const titleElement = screen.getByText(/Controle Financeiro/i);
  expect(titleElement).toBeInTheDocument();
});
