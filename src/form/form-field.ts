export default class FormField {
    private element: HTMLInputElement;
    private validator: (data: string) => boolean;
    private valid: Function = () => {};
    private invalid: Function = () => {};

    constructor(
        element: HTMLInputElement,
        validator: (data: string) => boolean,
        { valid, invalid }: { valid?: Function; invalid?: Function },
    ) {
        this.element = element;
        this.validator = validator;
        valid && (this.valid = valid);
        invalid && (this.invalid = invalid);
        this.element.addEventListener("blur", (e: Event) => {
            const currentTarget = e.currentTarget as typeof this.element;
            if (this.validator(currentTarget.value)) this.valid(currentTarget.value);
            else this.invalid(currentTarget.value);
        });
    }
}
