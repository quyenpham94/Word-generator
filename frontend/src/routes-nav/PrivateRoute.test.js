import React from 'react';
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router"; 
import PrivateRoute from "./PrivateRoute";
import { UserProvider } from "../testUtils";

it("renders without crashing", function() {
    render(
        <MemoryRouter>
            <UserProvider>
                <PrivateRoute />
            </UserProvider>
        </MemoryRouter>
    );
});

it("matches snapshot", function() {
    const { asFragment } = render(
        <MemoryRouter>
            <UserProvider>
                <PrivateRoute />
            </UserProvider>
        </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot when logged out", function() {
    const { asFragment } = render(
        <MemoryRouter>
            <UserProvider currentUser={null}>
                <PrivateRoute />
            </UserProvider>
        </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});