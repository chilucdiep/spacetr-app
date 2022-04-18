import { render } from "@testing-library/react";
import {HashRouter } from "react-router-dom";

export function renderWithWrapper(element) {
    return render(<HashRouter>{element}</HashRouter>)
}