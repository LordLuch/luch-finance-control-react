import { render, screen, fireEvent } from '@testing-library/react';
import App from './App'; // Supondo que o componente a ser testado é o App

test('Adiciona uma entrada de R$ 700,00 e uma saída de R$ 30,00 e verifica se os valores estão corretos', () => {
  render(<App />);

  // Simulação de adicionar uma entrada de R$ 700,00
  fireEvent.change(screen.getByLabelText(/descrição/i), {
    target: { value: 'Salário' },
  });
  fireEvent.change(screen.getByLabelText(/valor/i), {
    target: { value: 700 },
  });
  fireEvent.click(screen.getByLabelText(/entrada/i)); // Seleciona a entrada
  fireEvent.click(screen.getByText(/adicionar/i)); // Clica no botão para adicionar

  // Simulação de adicionar uma saída de R$ 30,00
  fireEvent.change(screen.getByLabelText(/descrição/i), {
    target: { value: 'Café' },
  });
  fireEvent.change(screen.getByLabelText(/valor/i), {
    target: { value: 30 },
  });
  fireEvent.click(screen.getByLabelText(/saída/i)); // Seleciona a saída
  fireEvent.click(screen.getByText(/adicionar/i)); // Clica no botão para adicionar

  // Verifica se o valor total é atualizado corretamente
  expect(screen.getByText('R$ 670.00')).toBeInTheDocument();
});

