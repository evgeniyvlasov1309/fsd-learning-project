import { fireEvent, screen } from "@testing-library/react";
// eslint-disable-next-line max-len
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation/renderWithTranslation";
import { Sidebar } from "widgets/Sidebar";

describe("Sidebar", () => {
    test("Sidebar exists in the document", () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    });

    test("Sidebar toggle", () => {
        renderWithTranslation(<Sidebar />);
        const toggleBtn = screen.getByTestId("sidebar-toggle");
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
    });
});
