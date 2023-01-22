import { object, number, array } from "yup";

export const calcSchema = object ({
    amount: number()
    .required("Valor total da transação é obrigatório")
    .matches(/.{4,}/, "deve conter ao menos 4 dígitos"),
    installments: number()
    .required("Numero das parcelas é obrigatório"),
    mdr: number()
    .required("Valor da taxa é obrigatório"),
    days: array(number())
})