import { createContext } from 'react';

const ToggleContext = createContext();

const ToggleProvider = ToggleContext.Provider;

export { ToggleContext, ToggleProvider };
