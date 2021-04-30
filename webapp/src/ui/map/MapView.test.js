import React from 'react'
import { render, fireEvent, getByText,waitFor } from "@testing-library/react";
import MapView from "./MapView";

test('Comprobar que todo se renderiza correctamente', async () => {
   render(<MapView/>);
});
