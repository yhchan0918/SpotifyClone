import { createContext } from 'react';

const context = {
  songId: null,
  setSongId: (id: string) => {},
};

const AppContext = createContext(context);

export default AppContext;
