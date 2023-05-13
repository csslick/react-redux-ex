import { configureStore, createSlice } from "@reduxjs/toolkit";

export interface Pokemon {
  id: number;
  name: string;
  type: string[];
  desc: string
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
      type: ["풀", "독"],
      desc: "태어나서부터 얼마 동안은 등의 씨앗으로부터 영양을 공급받아 크게 성장한다."
    },
    {
      id: 4, 
      name: "파이리", 
      type: ["불꽃"],
      desc: "파이리 꼬리의 불꽃은 생명의 등불이다. 건강할 때는 불꽃도 강하게 타오른다."
    },
    {
      id: 7, 
      name: "꼬부기", 
      type: ["물"],
      desc: "등껍질에 숨어 몸을 보호한다. 상대의 빈틈을 놓치지 않고 물을 뿜어내어 반격한다."
    },
  ],
  reducers: {
    // 여기에 필요한 액션과 리듀서를 정의
    addItem(state, action) {
      const copy = [...state, action.payload]
      return copy;
    },
    removeItem(state, action) {
      // action.payload에서 글번호(id) 가져옴 
      // console.log('store.removeItem: ', action.payload);
      const copy = state.filter(item => {
        return item.id !== action.payload 
      })
      console.log('변경된 state: ', copy)
      return copy;
    }
  }
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
export let { addItem, removeItem } = pokemon.actions;

// store 설정을 내보냄
export default configureStore({
  reducer: {
    pokemon: pokemon.reducer,
    darkMode: darkMode.reducer
  }
})