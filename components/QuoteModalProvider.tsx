'use client';

import React, { createContext, useContext, useState } from 'react';
import QuoteModal from './QuoteModal';

interface QuoteModalContextType {
  openModal: () => void;
}

const QuoteModalContext = createContext<QuoteModalContextType>({
  openModal: () => {},
});

export function useQuoteModal() {
  return useContext(QuoteModalContext);
}

export function QuoteModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <QuoteModalContext.Provider value={{ openModal: () => setIsOpen(true) }}>
      {children}
      <QuoteModal open={isOpen} onClose={() => setIsOpen(false)} />
    </QuoteModalContext.Provider>
  );
}
