import React from 'react'
import { render, fireEvent, getByText } from "@testing-library/react";
import Admin from "./Admin";

test('Comprobar que todo se renderiza correctamente', async () => {
    const { getByText } = render(<Admin/>);
    expect(getByText("Mostrar Usuarios")).toBeInTheDocument();
    expect(getByText("Administrar Usuarios")).toBeInTheDocument();
    expect(getByText("Volver")).toBeInTheDocument();
  });
