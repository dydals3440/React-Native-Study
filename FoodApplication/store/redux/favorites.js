import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    ids: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      // Redux만 사용할떄는 상태가 변경되어서는 안됨
      // RT는 내부적으로 상태가 알아서 처리되므로, 상태를 변경하는 것이 가능.
      state.ids.push(action.payload.id);
    },
    removeFavorite: (state) => {
      // 제거 할 아이템의 인덱스를 가져옴
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

// action또한 다른 곳에서 호출 할 수 있게 내보내주어야함.
export const { addFavorite, removeFavorite } = favoritesSlice.actions;

// favoriteSlice를 내보내고 .reducer를 붙임 favorites 내부의 리듀서이지만, 나중에 store에 병합해야하므로, 여기서 내보내주어야 한다.
export default favoritesSlice.reducer;
