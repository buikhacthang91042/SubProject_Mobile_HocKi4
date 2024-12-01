import React, { createContext, useState, useContext } from 'react';

// Tạo context
const FoodContext = createContext();

export const FoodProvider = ({ children }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    
    return (
        <FoodContext.Provider value={{ selectedCategory, setSelectedCategory }}>
            {children}
        </FoodContext.Provider>
    );
};

// Hook để sử dụng context trong component
export const useFoodContext = () => useContext(FoodContext);
