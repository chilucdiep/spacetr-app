import React from "react";
import { screen, fireEvent } from "@testing-library/react";
import Card from "./FeedCard";
import {renderWithWrapper} from '../../../../util/test'

const mockPicture = {date: "somedat",explanation: "exp", hdurl: "",media_type: "",service_version: "",title: "title",url: "",copyright: "cp" };
const defaultProps = {
    picture:mockPicture,
    likedPictures:[],
}

it("renders correctly", () => {
    renderWithWrapper(<Card {...defaultProps}  />);

    expect(screen.getByTestId("like-button")).toBeTruthy();
});

describe('Picture liked', () => {
  it('calls setLikedPictures with the liked picture when liked button is clicked once', () => {
    // setup
    const handleLikedPictures = jest.fn()
    renderWithWrapper(<Card {...defaultProps} setLikedPictures={handleLikedPictures} />);

    // /action
    fireEvent.click(screen.queryByTestId("like-button"));

    // assertion
    expect(handleLikedPictures).toHaveBeenCalledWith([defaultProps.picture]);
  })

  it('calls setLikedPictures with the liked picture and previous pictures liked button is clicked once', () => {
    const handleLikedPictures = jest.fn()
    renderWithWrapper(<Card {...defaultProps} likedPictures={[mockPicture]} setLikedPictures={handleLikedPictures} />);

    fireEvent.click(screen.queryByTestId("like-button"));

    expect(handleLikedPictures).toHaveBeenCalledWith([...[mockPicture], defaultProps.picture]);
  })

  it('does not call setLikedPictures with the liked picture and previous pictures liked button is clicked twice', () => {
    const handleLikedPictures = jest.fn()
    renderWithWrapper(<Card {...defaultProps} setLikedPictures={handleLikedPictures} />);

    fireEvent.click(screen.queryByTestId("like-button"));
    fireEvent.click(screen.queryByTestId("like-button"));

    expect(handleLikedPictures).lastCalledWith([]);
  })
})