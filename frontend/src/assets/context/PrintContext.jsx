import React, { createContext, useContext, useRef } from 'react';

const PrintContext = createContext();

export const PrintProvider = ({ children }) => {
    const printRef = useRef();

    return (
        <PrintContext.Provider value={printRef}>
            {children}
        </PrintContext.Provider>
    );
};

export const usePrint = () => useContext(PrintContext);
