import React from 'react'
import { render, fireEvent, getByText } from "@testing-library/react";
import Friends from "./Friends";

test('Comprobar que todo se renderiza correctamente', async () => {
    const { getByText } = render(<Friends/>);
    expect(getByText("Añadir Amigos")).toBeInTheDocument();
    expect(getByText("Lista de peticiones de amistad")).toBeInTheDocument();
    expect(getByText("Lista de amigos")).toBeInTheDocument();
  });


