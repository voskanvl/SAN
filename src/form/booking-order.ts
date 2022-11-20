import IMask from "imask";

export default function bookingOrder() {
    const formElement =
        document.querySelector<HTMLFormElement>("form.style__form") ||
        document.querySelector<HTMLFormElement>("form.booking-order");
    const inputNames = ["name", "phone", "email"];
    if (!formElement) return;
    type inputsType = {
        name?: HTMLInputElement;
        phone?: HTMLInputElement;
        email?: HTMLInputElement;
    };
    const inputElements: inputsType = inputNames.reduce(
        (acc, element) =>
            Object.assign(acc, {
                [element]: formElement.querySelector<HTMLInputElement>(`input[name="${element}"]`),
            }),
        {},
    );
    inputElements.phone &&
        IMask(inputElements.phone, {
            mask: "+{7}(000)000-00-00",
            lazy: false,
        });
    inputElements.email &&
        IMask(inputElements.email, {
            mask(value) {
                if (/^[a-z0-9_\.-]+$/.test(value)) return true;
                if (/^[a-z0-9_\.-]+@$/.test(value)) return true;
                if (/^[a-z0-9_\.-]+@[a-z0-9-]+$/.test(value)) return true;
                if (/^[a-z0-9_\.-]+@[a-z0-9-]+\.$/.test(value)) return true;
                if (/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}$/.test(value)) return true;
                if (/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}\.$/.test(value)) return true;
                if (/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}\.[a-z]{1,4}$/.test(value)) return true;
                return false;
            },
            lazy: false,
        });
}
