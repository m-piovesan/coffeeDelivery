import { createContext, useContext, ReactNode, useEffect, useReducer } from "react";

interface AddressContextType {
    address: {
        cep: string;
        street: string;
        number: string;
        complement: string;
        neighborhood: string;
        city: string;
        state: string;
    };
    updateAddress: (newAddress: Partial<Address>) => void;
}

export interface Address {
    cep: string;
    street: string;
    number: string;
    complement: string;
    neighborhood: string;
    city: string;
    state: string;
}

interface AddressContextProviderProps {
    children: ReactNode;
}

export const AddressContext = createContext({} as AddressContextType);

export function AddressContextProvider({ children }: AddressContextProviderProps) {
    const [address, setAddress] = useReducer(
        (prevAddress: Address, newAddress: Partial<Address>) => ({ ...prevAddress, ...newAddress }),
        {
            cep: "",
            street: "",
            number: "",
            complement: "",
            neighborhood: "",
            city: "",
            state: "",
        }
    );

    useEffect(() => {
        const stateJSON = JSON.stringify(address);
        localStorage.setItem('@your-app:address-state', stateJSON);
    }, [address]);

    const updateAddress = (newAddress: Partial<Address>) => {
        setAddress(newAddress);
    };

    return (
        <AddressContext.Provider value={{ address, updateAddress }}>
            {children}
        </AddressContext.Provider>
    );
}

export const useAddress = () => {
    const context = useContext(AddressContext);
    if (!context) {
        throw new Error('useAddress must be used within an AddressContextProvider');
    }

    return context;
};
