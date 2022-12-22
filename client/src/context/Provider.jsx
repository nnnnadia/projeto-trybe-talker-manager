import React, { useState } from 'react';
import Context from './Context'

export default function Provider({ children }) {
  const [indexAt, setIndexAt] = useState(0);

  const value = {
    indexAt,
    setIndexAt,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>
}