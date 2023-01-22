import { useForm } from "react-hook-form";
import React, { useContext } from "react";
import { AuthContextDashboard } from "../../Providers/authContextDashboard";
import { ContainerForm } from "./style";

const FormCalc = () => {
    const { 
        register, 
        handleSubmit
    } = useForm();
    
    const {btnCalc} = useContext(AuthContextDashboard)

    return (
        <ContainerForm>
            <form onSubmit={handleSubmit(btnCalc)}>
                <label htmlFor="amount">Informe o valor da transação</label>
                <input 
                    type="number" 
                    id="amount"
                    placeholder="R$ 1000.00"
                    {...register("amount")}
                />

                <label htmlFor="installments">Em quantas parcelas</label>
                <input 
                    type="number" 
                    id="installments"
                    placeholder="12"
                    {...register("installments")}
                />

                <label htmlFor="mdr">Informe o percentual de MDR</label>
                <input 
                    type="number" 
                    id="mdr"
                    placeholder="4"
                    {...register("mdr")}
                />

                <button type="submit">Calcular</button>
            </form>
        </ContainerForm>
    )
}

export default FormCalc