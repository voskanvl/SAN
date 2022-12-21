export interface related_options_value {
    product_option_value_id: number;
    option_id: number;
    option_value_id: number;
    name: string;
    related_option_name: string;
    image: string;
    text: string;
}

export interface related_options {
    name: string;
    values: related_options_value[];
}

export interface product_option_value {
    // product_option_value_id: number;
    // related_option_id: number;
    // related_option_value_id: number;
    // option_value_id: number;
    // text: string;
    // image: string;
    // price: number;
    // price_prefix: string;
    // value_image: string;
    // related_options: {
    //     [key: number]: related_options;
    image: string | null;
    name: string;
    option_value_id: string;
    price: boolean;
    price_prefix: string;
    related_option_id: string;
    related_option_value_id: string;
    related_options: { [key: string]: related_options } | never[];
    related_options_json: string;
    text: string;
    value_image: string | null;
}

export interface Option {
    name: string;
    option_id: string;
    product_option_id: string;
    product_option_value: {
        [key: string]: product_option_value;
    };
    required: string;
    type: "radio";
    value: "";
    sort_order: string;
}
