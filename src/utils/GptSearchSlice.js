import { createSlice } from "@reduxjs/toolkit";

const GptSearchSlice = createSlice({
  name: "Gpt",
  initialState: {
    gptSearchValue: false,
  },
  reducers: {
    toggleGPTSearch: (state) => {
      state.gptSearchValue = !state.gptSearchValue;
    },
  },
});
export const { toggleGPTSearch } = GptSearchSlice.actions;
export default GptSearchSlice.reducer;
