import { createContext, useContext, useState, ReactNode } from 'react';

interface BackgroundContextType {
  blur: number;
  setBlur: (blur: number) => void;
}

const BackgroundContext = createContext<BackgroundContextType>({
  blur: 0,
  setBlur: () => {},
});

export const useBackground = () => useContext(BackgroundContext);

export const BackgroundProvider = ({ children }: { children: ReactNode }) => {
  const [blur, setBlur] = useState(0);
  return (
    <BackgroundContext.Provider value={{ blur, setBlur }}>
      {children}
    </BackgroundContext.Provider>
  );
};
