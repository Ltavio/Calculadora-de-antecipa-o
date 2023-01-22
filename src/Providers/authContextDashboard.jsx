import React from "react";
import {
    createContext,
    useState
  } from "react";
import api from "../Services/api"

export const AuthContextDashboard = createContext();

const AuthProviderDashboard = ({ children }) => {
    const [request, setRequest] = useState()
    const [requestDays, setRequestDays] = useState()

    const btnCalc = (data) => {
        api.post("", data)
        .then( elem => {
            // elem.data.map(x => console.log(x))
            // console.log(elem.data)
            setRequest(Object.values(elem.data))
            setRequestDays(Object.keys(elem.data))
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
    <AuthContextDashboard.Provider value={{btnCalc, request, requestDays}}>
        {children}
    </AuthContextDashboard.Provider>
    )
}

export default AuthProviderDashboard;