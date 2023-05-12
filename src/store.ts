import { configureStore, createSlice } from "@reduxjs/toolkit";

export interface Pokemon {
  id: number;
  name: string;
  imgUrl: string;
}

export interface RootState {
  pokemon: Pokemon[];
  darkMode: boolean;
}

const pokemon = createSlice({
  name: 'pokemon',  // state명
  // state 초기값
  initialState: [
    {
      id: 0, 
      name: "이상해씨", 
      imgUrl: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/000101.png'
    },
    {
      id: 4, 
      name: "파이리", 
      imgUrl: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/000401.png'
    },
    {
      id: 7, 
      name: "꼬부기", 
      imgUrl: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/000701.png'
    },
  ],
  reducers: {
    // 여기에 필요한 액션과 리듀서를 정의
  },
})

const darkMode =  createSlice({
  name: 'darkMode',
  initialState: false,
  reducers: {
    handleDarkMode(state) {
      return !state
    }
  }
})

export let { handleDarkMode } = darkMode.actions;

// store 설정을 내보냄
export default configureStore({
  reducer: {
    pokemon: pokemon.reducer,
    darkMode: darkMode.reducer
  }
})