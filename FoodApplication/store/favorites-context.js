import { createContext } from 'react';

// 컨텍스트는 2개의 value를 전달.
export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

const FavoritesContextProvider = ({ children }) => {
  return <FavoritesContext.Provider>{children}</FavoritesContext.Provider>;
};

export default FavoritesContextProvider;
