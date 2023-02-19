import { render, screen } from "@testing-library/react";
import { Button, ButtonTheme } from "./Button";

describe("Button", () => {
    test("Button exists in the document", () => {
        render(<Button>Test</Button>);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });

    test("Button theme clear", () => {
        render(<Button theme={ButtonTheme.CLEAR}>Test</Button>);
        expect(screen.getByText("Test")).toHaveClass("clear");
    });
});
