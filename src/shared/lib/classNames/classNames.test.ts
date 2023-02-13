import { classNames } from "./classNames";

describe("classNames", () => {
    test("with only first param", () => {
        expect(classNames("testClass")).toBe("testClass");
    });

    test("with additional classes", () => {
        const expected = "testClass test1 test2";
        expect(classNames("testClass", {}, ["test1", "test2"])).toBe(expected);
    });

    test("with mods", () => {
        const expected = "testClass test1 test2 hovered scrollable";
        expect(
            classNames("testClass", { hovered: true, scrollable: true }, [
                "test1",
                "test2",
            ])
        ).toBe(expected);
    });

    test("with mods false", () => {
        const expected = "testClass test1 test2 hovered";
        expect(
            classNames("testClass", { hovered: true, scrollable: false }, [
                "test1",
                "test2",
            ])
        ).toBe(expected);
    });

    test("with mods undefined", () => {
        const expected = "testClass test1 test2 hovered";
        expect(
            classNames("testClass", { hovered: true, scrollable: undefined }, [
                "test1",
                "test2",
            ])
        ).toBe(expected);
    });
});
