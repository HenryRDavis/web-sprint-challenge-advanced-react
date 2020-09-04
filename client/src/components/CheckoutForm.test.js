import React from "react";
import { render, fireEvent, act, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
    expect(screen.getByText(/checkout form/i));

});

test("form shows success message on submit with form details", () => {
   const{ getByTestId, getByText } = render(<CheckoutForm />);

    const User = {
        eName:'Henry',
        eLastname: 'Davis',
        eAddress: '107th Dunno',
        eCity: 'DunnoTown',
        eState: 'Dunno',
        eZip: 2356
    }

    const firstName = getByTestId('First Name');
    const lastName = getByTestId('Last Name');
    const address = getByTestId('Address');
    const city = getByTestId('City');
    const state = getByTestId('State');
    const zip = getByTestId('Zip');
    const submitButton = getByText('Checkout');
    
    fireEvent.change(firstName, { target: { value: User.eName } });
    fireEvent.change(lastName, { target: { value: User.eLastname } });
    fireEvent.change(address, { target: { value: User.eAddress } });
    fireEvent.change(city, { target: { value: User.eCity } });
    fireEvent.change(state, { target: { value: User.eState } });
    fireEvent.change(zip, { target: { value: User.eZip } });
    
    act(() => {
        fireEvent.click(submitButton)
    });

});
