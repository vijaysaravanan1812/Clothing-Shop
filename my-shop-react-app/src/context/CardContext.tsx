
import { createContext, useContext, useState } from "react"

interface CardContextProps {
    cardItems : Product[] // need for header component
    addToCard : (product : Product) => void; // needed for ProductsPage component
}

export const CardContext = createContext<CardContextProps | undefined>(undefined);

export const CardProvider: React.FC<{children : React.ReactNode}> = ({
    children, 
}) => {
    const [cardItems , setCartItems] = useState<Product[]>([]); // needed for header component
    
    const addToCart = (product : Product) => {
        setCartItems([...cardItems , product]);
    }
 
    return (
        <CardContext.Provider value={{cardItems : cardItems , addToCard : addToCart}}>
            {children}
        </CardContext.Provider>
    );
};

export const useCard = () => {
    const context = useContext(CardContext);
    
    if (!context) {
        throw new Error("useCard hook must be used within CardProvider commponent's descendants ");
    }

    return context;
}