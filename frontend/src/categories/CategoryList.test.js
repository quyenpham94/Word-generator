import React from 'react';
import { render } from "@testing-library/react";
import Company from './Company';
import { MemoryRouter, Route } from "react-router";
import { UserProvider } from "../testUtils";

it("renders without crashing", function() {
    render(
        <MemoryRouter>
            <UserProvider>
                <Company />
            </UserProvider>
        </MemoryRouter>
    );
});

it("renders snapshot", function() {
    const { asFragment } = render(
        <MemoryRouter initialEntries={["/company/ibm"]}>
            <UserProvider>
                <Route path="/company/:handle">
                    <Company />
                </Route>
            </UserProvider>
        </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});