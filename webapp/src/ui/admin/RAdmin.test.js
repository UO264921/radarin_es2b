import React from 'react'
import { render, fireEvent, getByText } from "@testing-library/react";
import RAdmin from "./RAdmin";

test('Comprobar que todo se renderiza correctamente', async () => {
    const { getByText } = render(<RAdmin/>);
    expect(getByText("Registrate como admin")).toBeInTheDocument();
    expect(getByText("Acceder")).toBeInTheDocument();
    expect(getByText("Volver")).toBeInTheDocument();
  });
