import React from 'react';
import { render } from "@testing-library/react";
import Home from "./Homepage";
import { UserProvider } from "../testUtils";
import { MemoryRouter } from "react-router";

it("matches snapshot", function() {
    const { asFragment } = render(
        <MemoryRouter>
            <UserProvider>
                <Home />
            </UserProvider>
        </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();

});

it("matches snapshot when logged out", function() {
    const { asFragment } = render(
        <MemoryRouter>
            <UserProvider currentUser={null}>
                <Home />
            </UserProvider>
        </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();

});