import Main from "Main";
import * as React from "react";
import { render } from "react-native-testing-library";

describe("test", () => {
  it("renders text correctly", () => {
    const { getByText } = render(<Main />);

    const welcome = "Open up App.js to start working on your app!";

    expect(getByText(welcome).props.children).toBe(welcome);
  });
});
