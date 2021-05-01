import React from 'react'
import { render, fireEvent, getByText,waitFor } from "@testing-library/react";
import GetUsernameByWebId from "./GetUsernameByWebId";

test('Comprobar que funciona correctamente', async () => {
    var gubw=new GetUsernameByWebId("webid")
    expect(gubw.webId).toBe("webid");
    expect(await gubw.execute()).toBe(undefined); 
});
