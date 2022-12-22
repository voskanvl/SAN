import { Option } from "./optionInterface";
const option =
    '{"15":{"product_option_id":"229","product_option_value":{"59":{"product_option_value_id":"28","related_option_id":"14","related_option_value_id":"55","option_value_id":"59","name":"\u043a\u0432\u0430\u0434\u0440\u0430\u0442\u043d\u044b\u0439","text":"","image":null,"price":false,"price_prefix":"+","value_image":"https://anruf.ru/image/cache/catalog/products/niki-500x500.png","related_options":{"14":{"name":"\u0426\u0432\u0435\u0442","values":[{"product_option_value_id":"26","option_id":"14","option_value_id":"52","name":"\u0411\u0435\u0436\u0435\u0432\u044b\u0439","related_option_name":"\u0426\u0432\u0435\u0442","image":"https://anruf.ru/image/cache/catalog/products/bravo-500x500.png","text":"#F7EBD8"},{"product_option_value_id":"27","option_id":"14","option_value_id":"53","name":"\u0422\u0435\u043c\u043d\u043e-\u0441\u0435\u0440\u044b\u0439","related_option_name":"\u0426\u0432\u0435\u0442","image":"https://anruf.ru/image/cache/catalog/products/873%201-500x500.png","text":"#9CAEB8"},{"product_option_value_id":"29","option_id":"14","option_value_id":"56","name":"\u0411\u0435\u0436\u0435\u0432\u043e-\u0441\u0435\u0440\u044b\u0439","related_option_name":"\u0426\u0432\u0435\u0442","image":"https://anruf.ru/image/cache/catalog/products/chamomile-500x500.png","text":"#A09992"},{"product_option_value_id":"28","option_id":"14","option_value_id":"55","name":"\u0427\u0435\u0440\u043d\u043e-\u0441\u0435\u0440\u044b\u0439","related_option_name":"\u0426\u0432\u0435\u0442","image":"https://anruf.ru/image/cache/catalog/products/niki-500x500.png","text":"#102B1E"}]}}},"58":{"product_option_value_id":"30","related_option_id":"14","related_option_value_id":"52","option_value_id":"58","name":"\u043a\u0440\u0443\u043a\u043b\u044b\u0439","text":"","image":null,"price":false,"price_prefix":"+","value_image":"https://anruf.ru/image/cache/catalog/products/sphere-500x500.png","related_options":{"14":{"name":"\u0426\u0432\u0435\u0442","values":[{"product_option_value_id":"30","option_id":"14","option_value_id":"52","name":"\u0411\u0435\u0436\u0435\u0432\u044b\u0439","related_option_name":"\u0426\u0432\u0435\u0442","image":"https://anruf.ru/image/cache/catalog/products/sphere-500x500.png","text":"#F7EBD8"}]}}}},"option_id":"15","name":"\u0421\u043f\u0438\u043d\u043a\u0430","type":"radio","value":"","required":"1","sort_order":"0"},"13":{"product_option_id":"227","product_option_value":{"51":{"product_option_value_id":"19","related_option_id":"0","related_option_value_id":"0","option_value_id":"51","name":"\u0425\u0440\u043e\u043c","text":"","image":null,"price":false,"price_prefix":"+","value_image":"https://picsum.photos/id/237/100/100","related_options":[],"related_options_json":""},"50":{"product_option_value_id":"18","related_option_id":"0","related_option_value_id":"0","option_value_id":"50","name":"\u041f\u0440\u043e\u0444\u0438\u043b\u044c","text":"","image":null,"price":false,"price_prefix":"+","value_image":"https://picsum.photos/id/238/100/100","related_options":[],"related_options_json":""},"49":{"product_option_value_id":"17","related_option_id":"0","related_option_value_id":"0","option_value_id":"49","name":"\u041a\u043e\u043d\u0443\u0441","text":"","image":null,"price":false,"price_prefix":"+","value_image":"https://picsum.photos/id/239/100/100","related_options":[],"related_options_json":""}},"option_id":"13","name":"\u041d\u043e\u0436\u043a\u0438","type":"radio","value":"","required":"1","sort_order":"1"}}';
const option1 = {
    15: {
        product_option_id: "229",
        product_option_value: {
            59: {
                product_option_value_id: "28",
                related_option_id: "14",
                related_option_value_id: "55",
                option_value_id: "59",
                name: "\u043a\u0432\u0430\u0434\u0440\u0430\u0442\u043d\u044b\u0439",
                text: "",
                image: null,
                price: false,
                price_prefix: "+",
                value_image: "https://anruf.ru/image/cache/catalog/products/niki-500x500.png",
                related_options: {
                    "14": {
                        name: "\u0426\u0432\u0435\u0442",
                        values: [
                            {
                                product_option_value_id: "26",
                                option_id: "14",
                                option_value_id: "52",
                                name: "\u0411\u0435\u0436\u0435\u0432\u044b\u0439",
                                related_option_name: "\u0426\u0432\u0435\u0442",
                                image: "/assets/images/constructor/bravo/1.png",
                                text: "#F7EBD8",
                            },
                            {
                                product_option_value_id: "27",
                                option_id: "14",
                                option_value_id: "53",
                                name: "\u0422\u0435\u043c\u043d\u043e-\u0441\u0435\u0440\u044b\u0439",
                                related_option_name: "\u0426\u0432\u0435\u0442",
                                image: "/assets/images/constructor/bravo/2.png",
                                text: "#9CAEB8",
                            },
                            {
                                product_option_value_id: "29",
                                option_id: "14",
                                option_value_id: "56",
                                name: "\u0411\u0435\u0436\u0435\u0432\u043e-\u0441\u0435\u0440\u044b\u0439",
                                related_option_name: "\u0426\u0432\u0435\u0442",
                                image: "/assets/images/constructor/bravo/3.png",
                                text: "#A09992",
                            },
                            {
                                product_option_value_id: "28",
                                option_id: "14",
                                option_value_id: "55",
                                name: "\u0427\u0435\u0440\u043d\u043e-\u0441\u0435\u0440\u044b\u0439",
                                related_option_name: "\u0426\u0432\u0435\u0442",
                                image: "/assets/images/constructor/bravo/4.png",
                                text: "#102B1E",
                            },
                        ],
                    },
                },
            },
            58: {
                product_option_value_id: "30",
                related_option_id: "14",
                related_option_value_id: "52",
                option_value_id: "58",
                name: "\u043a\u0440\u0443\u043a\u043b\u044b\u0439",
                text: "",
                image: null,
                price: false,
                price_prefix: "+",
                value_image: "https://anruf.ru/image/cache/catalog/products/sphere-500x500.png",
                related_options: {
                    "14": {
                        name: "\u0426\u0432\u0435\u0442",
                        values: [
                            {
                                product_option_value_id: "30",
                                option_id: "14",
                                option_value_id: "52",
                                name: "\u0411\u0435\u0436\u0435\u0432\u044b\u0439",
                                related_option_name: "\u0426\u0432\u0435\u0442",
                                image: "/assets/images/constructor/niki/1.png",
                                text: "#F7EBD8",
                            },
                        ],
                    },
                },
            },
        },
        option_id: "15",
        name: "\u0421\u043f\u0438\u043d\u043a\u0430",
        type: "radio",
        value: "",
        required: "1",
        sort_order: "0",
    },
    13: {
        product_option_id: "227",
        product_option_value: {
            51: {
                product_option_value_id: "19",
                related_option_id: "0",
                related_option_value_id: "0",
                option_value_id: "51",
                name: "\u0425\u0440\u043e\u043c",
                text: "",
                image: "/assets/images/constructor/legs/1.png",
                price: false,
                price_prefix: "+",
                value_image: "https://picsum.photos/id/237/100/100",
                related_options: [],
                related_options_json: "",
            },
            50: {
                product_option_value_id: "18",
                related_option_id: "0",
                related_option_value_id: "0",
                option_value_id: "50",
                name: "\u041f\u0440\u043e\u0444\u0438\u043b\u044c",
                text: "",
                image: "/assets/images/constructor/legs/2.png",
                price: false,
                price_prefix: "+",
                value_image: "https://picsum.photos/id/238/100/100",
                related_options: [],
                related_options_json: "",
            },
            49: {
                product_option_value_id: "17",
                related_option_id: "0",
                related_option_value_id: "0",
                option_value_id: "49",
                name: "\u041a\u043e\u043d\u0443\u0441",
                text: "",
                image: "/assets/images/constructor/legs/3.png",
                price: false,
                price_prefix: "+",
                value_image: "https://picsum.photos/id/239/100/100",
                related_options: [],
                related_options_json: "",
            },
        },
        option_id: "13",
        name: "\u041d\u043e\u0436\u043a\u0438",
        type: "radio",
        value: "",
        required: "1",
        sort_order: "1",
    },
};

// export const option_data_san = JSON.parse(option);
export const option_data_san = option1 as unknown as { [key: string | number]: Option };
export const optionInArray = Object.values(option_data_san) as Option[];
export const chairbacks = Object.values(optionInArray[1].product_option_value).flat();
export const chairbacksColors = Object.values(chairbacks);
