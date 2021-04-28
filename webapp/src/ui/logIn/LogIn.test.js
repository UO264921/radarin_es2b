import React from 'react'
import { render, fireEvent, getByText } from "@testing-library/react";
import LogIn from "./LogIn";

test('Comprobar que todo se renderiza correctamente', async () => {
    const { getByText } = render(<LogIn/>);
    expect(getByText("Log in")).toBeInTheDocument();
    expect(getByText("Accede como administrador")).toBeInTheDocument();
  });
