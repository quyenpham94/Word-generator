import React from 'react';
import { render } from "@testing-library/react";
import Profile from "./ProfileForm";
import { UserProvider } from "../testUtils";
import { isTypedArray } from 'util/types';

it("matches snapshot", function () {
    const { asFragment } = render(
        <UserProvider>
            <Profile />
        </UserProvider>
    );
    expect(asFragment()).toMatchSnapshot();
})