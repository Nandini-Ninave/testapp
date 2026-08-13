import { describe, expect, it } from "vitest";
import { Checkbox } from "./Checkbox";
import { fireEvent, render } from "@testing-library/react";

describe(Checkbox, () => {
    it("checkbox must use fireEvent.click", () => {
        const { container } = render(<Checkbox />)
        const checkbox = container.querySelectorAll("input[type='checkbox']")[0] as HTMLInputElement
        expect(checkbox).toBeInTheDocument()
        fireEvent.click(checkbox)
        expect(checkbox.checked).toBe(true)
    });
    it('apply custom className to the input container', () => {
        const { container } = render(<Checkbox className="custom-class" />)
        const checkboxClassName = container.querySelectorAll("input[type='checkbox']")[0] as HTMLInputElement
        expect(checkboxClassName).toHaveClass('input-field-wrapper--md');
    });
    it('should apply correct class for small size', () => {
        const { container } = render(<Checkbox className="custom-class" size ="sm"/>)
        const checkboxClassName = container.querySelectorAll("input[type='checkbox']")[0] as HTMLInputElement
        expect(checkboxClassName).toHaveClass('input-field-wrapper--sm');
        expect(checkboxClassName).not.toHaveClass('input-field-wrapper--md');
        expect(checkboxClassName).not.toHaveClass('input-field-wrapper--lg');
    });
    it('should apply correct class for medium size', () => {
        const { container } = render(<Checkbox className="custom-class" size ="md"/>)
        const checkboxClassName = container.querySelectorAll("input[type='checkbox']")[0] as HTMLInputElement
        expect(checkboxClassName).toHaveClass('input-field-wrapper--md');
        expect(checkboxClassName).not.toHaveClass('input-field-wrapper--sm');
        expect(checkboxClassName).not.toHaveClass('input-field-wrapper--lg');
    });
    it('should apply correct class for large size', () => {
        const { container } = render(<Checkbox className="custom-class" size ="lg"/>)
        const checkboxClassName = container.querySelectorAll("input[type='checkbox']")[0] as HTMLInputElement
        expect(checkboxClassName).toHaveClass('input-field-wrapper--lg');
        expect(checkboxClassName).not.toHaveClass('input-field-wrapper--md');
        expect(checkboxClassName).not.toHaveClass('input-field-wrapper--sm');
    });
})