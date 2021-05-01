import React from 'react'
import { render, fireEvent, getByText,waitFor } from "@testing-library/react";
import GetCurrentUserCoords from "./GetCurrentUserCoords";

test('Comprobar que funciona correctamente', async () => {
    var gcuc=new GetCurrentUserCoords()
    expect(await gcuc.execute()).toBe(null); 
});
