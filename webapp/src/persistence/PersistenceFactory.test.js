import React from 'react'
import { render, fireEvent, getByText,waitFor } from "@testing-library/react";
import PersistenceFactory from "./PersistenceFactory";
import UserGateway from "./user/UserGateway";

test('Comprobar que la factoria funciona correctamente', async () => {
    expect(PersistenceFactory.forUser()).toStrictEqual(new UserGateway()); 
});
