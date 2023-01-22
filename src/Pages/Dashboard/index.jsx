import React, { useContext } from "react";
import { Container } from "./style";
import FormCalc from "../../Components/FormCalculo";
import { AuthContextDashboard } from "../../Providers/authContextDashboard";


const Dashboard = () => {
    const {request} = useContext(AuthContextDashboard)

    return (
        <Container>
            <div className="formm">
                <h1>Simule sua antecipação</h1>
                <FormCalc />
            </div>
            <div className="resultReq">
                <h2>VOCÊ RECEBERÁ:</h2>
                <div className="separation"></div>
                <span>Amanhã: {request && (<p>R$ {request[0].toFixed(2)}</p>)}</span>
                <span>Em 15 dias: {request && (<p>R$ {request[1].toFixed(2)}</p>)}</span>
                <span>Em 30 dias: {request && (<p>R$ {request[2].toFixed(2)}</p>)}</span>
                <span>Em 90 dias: {request && (<p>R$ {request[3].toFixed(2)}</p>)}</span>
            </div>
        </Container>
    )
}

export default Dashboard;