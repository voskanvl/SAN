export default class FormField {
    public element: HTMLInputElement;
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
        this.emitValidity.bind(this);
        this.element.addEventListener("blur", () => this.emitValidity());
    }
    public emitValidity() {
        if (this.element.value && this.validator(this.element.value))
            this.valid(this.element.value);
        else this.invalid(this.element.value);
    }
    public validate(): boolean {
        return this.validator(this.element.value);
    }
}
