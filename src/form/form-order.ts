import FormField from "./form-field";
import Errored from "./setFieldErrored";
import FinalRender from "./finalSendForm";

async function sender(formData: FormData): Promise<Response> {
    const res: Response = {
        headers: new Headers(),
        ok: Math.random() < 0.5,
        redirected: false,
        status: 0,
        statusText: "",
        type: "error",
        url: "",
        clone: function (): Response {
            throw new Error("Function not implemented.");
        },
        body: null,
        bodyUsed: false,
        arrayBuffer: function (): Promise<ArrayBuffer> {
            throw new Error("Function not implemented.");
        },
        blob: function (): Promise<Blob> {
            throw new Error("Function not implemented.");
        },
        formData: function (): Promise<FormData> {
            throw new Error("Function not implemented.");
        },
        json: function (): Promise<any> {
            throw new Error("Function not implemented.");
        },
        text: function (): Promise<string> {
            throw new Error("Function not implemented.");
        },
    };
    return res;
    // throw Error("error");
}

export async function sendForm(form: HTMLFormElement) {
    const formData = new FormData(form);
    try {
        const responce = await sender(formData);
        console.log("🚀 ~ responce", responce);
        if (responce.ok) return "ok";
    } catch (error) {
        return error;
    }
}

export function validateFormOrder(selector: string, validateReg: RegExp) {
    const inputElement = document.querySelector<HTMLInputElement>(selector);
    if (inputElement)
        return new FormField(inputElement, val => validateReg.test(val), {
            valid: () => Errored.unset(inputElement),
            invalid: () => Errored.set(inputElement),
        });
    else return null;
}
export default function formOrder() {
    const validatableInputs = [
        validateFormOrder("input[name='name']", /.+/),
        validateFormOrder("input[type='tel']", /^\+7\([\d]{3}\)[\d]{3}-[\d]{2}-[\d]{2}$/),
        validateFormOrder(
            "input[type='email']",
            /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/,
        ),
    ];

    const form =
        document.querySelector<HTMLFormElement>("form.style__form") ||
        document.querySelector<HTMLFormElement>("form.booking-order");

    if (!form) return;

    const submitButton = document.querySelector<HTMLElement>("input[type='submit'");

    submitButton &&
        submitButton.addEventListener("click", (e: Event) => {
            e.preventDefault();
            const requrired = [...form.elements].filter(e =>
                (e as HTMLInputElement).hasAttribute("required"),
            );
            const errored = requrired.filter(e => (e as HTMLInputElement).hasAttribute("errored"));
            // const notValided = requrired.filter(e => !(e as HTMLInputElement).checkValidity());

            //we leave only required fields in  validatedInputs
            //after that, we validate the remaining
            const validatedInputs = validatableInputs
                .filter(e => e && e.element && requrired.some(r => r === (e.element as Element)))
                .every(e => e && e.validate());

            if (!errored.length && validatedInputs) {
                sendForm(form)
                    .then(r => {
                        const selector = document.querySelector<HTMLElement>(".booking-order");
                        if (!selector) return;
                        r === "ok"
                            ? FinalRender.renderOkScreen(selector)
                            : FinalRender.renderErrorScreen(selector);
                    })
                    .catch(() => FinalRender.renderErrorScreen(form));
            } else {
                form.reportValidity();
            }
        });
}
