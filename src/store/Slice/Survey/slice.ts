import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  answers: [],
};
const SurveySlice = createSlice({
  name: "survey",
  initialState,
  reducers: {
    setSurveyAnswer: (state, action) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      [...state.answers, action.payload];
    },
  },
});

export const { setSurveyAnswer } = SurveySlice.actions;
export default SurveySlice.reducer;
