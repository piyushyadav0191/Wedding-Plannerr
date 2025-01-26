import React, { createContext, useState, useContext, ReactNode } from 'react';

interface PriceRangeContextType {
  name: string;
  email: string;
  setName: (name: string) => void;
  setEmail: (email: string) => void
  selectedPriceRange: string | null;
  setSelectedPriceRange: (priceRange: string | null) => void;
  selectedCardTitles: string[];
  setSelectedCardTitles: (titles: string[]) => void;
}

const PriceRangeContext = createContext<PriceRangeContextType>({
  name: '',
  email: '',
  setName: () => {},
  setEmail: () => {},
  selectedPriceRange: null,
  setSelectedPriceRange: () => {},
  selectedCardTitles: [],
  setSelectedCardTitles: () => {},
});

export const PriceRangeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string | null>(null);
  const [selectedCardTitles, setSelectedCardTitles] = useState<string[]>([]);

  return (
    <PriceRangeContext.Provider 
      value={{ 
        name,
        email,
        setName,
        setEmail,
        selectedPriceRange, 
        setSelectedPriceRange,
        selectedCardTitles,
        setSelectedCardTitles
      }}
    >
      {children}
    </PriceRangeContext.Provider>
  );
};

export const usePriceRangeContext = () => {
  const context = useContext(PriceRangeContext);
  
  if (!context) {
    throw new Error('usePriceRangeContext must be used within a PriceRangeProvider');
  }
  
  return context;
};