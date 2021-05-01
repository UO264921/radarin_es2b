import React from 'react'
import { render, fireEvent, getByText,waitFor } from "@testing-library/react";
import ServicesFactory from "./ServicesFactory";
import CurrentUserService from "./currentUser/CurrentUserService";
import FriendsService from "./friends/FriendUsersService";

test('Comprobar que la factoria funciona correctamente', async () => {
    expect(ServicesFactory.forCurrentUser()).toStrictEqual(new CurrentUserService());
    expect(ServicesFactory.forFriendUsers("webid").toString()).toStrictEqual(new FriendsService("webid").toString()); 
});
