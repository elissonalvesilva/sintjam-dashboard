import { createContext } from 'react';

const NameNavbarContext = createContext();

const NameNavbarProvider = NameNavbarContext.Provider;

export { NameNavbarContext, NameNavbarProvider };
