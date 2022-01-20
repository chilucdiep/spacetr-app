// import React from "react";
// import { render, fireEvent } from "@testing-library/react";
// import Card from "./Card";

// it("renders correctly", () => {
//   const getByTestId = render(<Card />);

//   expect(getByTestId("like-button")).toBeTruthy();
// });

// describe('Picture liked', () => {
//   it('updates on click', () => {
//     const handleLikedPictures = jest.fn()

//     const { queryByTestId} = render(<Card handleLikedPictures={handleLikedPictures} />);

//     fireEvent.click(queryByTestId("like-button")})
//     expect(handleLikedPictures).toHaveBeenCalled()
//   })
// })