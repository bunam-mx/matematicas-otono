import PropTypes from "prop-types";
import { createContext, useState } from 'react'

export const SemblanzaContext = createContext()

export const SemblanzaProvider = ({ children }) => {
    const [semblanza, setSemblanza] = useState("")

    return (
        <SemblanzaContext.Provider value={{
            semblanza,
            setSemblanza
        }}>
            {children}
        </SemblanzaContext.Provider>
    )
}

SemblanzaProvider.propTypes = {
    children: PropTypes.node.isRequired
};
