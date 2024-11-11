"use client";

import { createContext, useContext, useState } from "react";

// eslint-disable-next-line no-unused-vars
const DnDContext = createContext(['', (_: any) => {}]);

export const DnDProvider = ({ children }: any) => {
  const [type, setType] = useState('oneDirectional');

  return (
    <DnDContext.Provider value={[type, setType]}>
      {children}
    </DnDContext.Provider>
  );
};

export default DnDContext;

export const useDnD = () => {
  return useContext(DnDContext);
};
