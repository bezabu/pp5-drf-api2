import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { CurrentUserProvider } from "../../../contexts/CurrentUserContext";
import Movie from "../Movie";

test("renders Movie", () => {
    render(
      <Router>
        <Movie />
      </Router>
    );
  
    // screen.debug();
    const reviewsLink = screen.getByRole("link", { name: "reviews" });
    expect(reviewsLink).toBeInTheDocument();
  });

