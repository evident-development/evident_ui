import { InitialState } from "@/documentation/types/interface/initialState";
import { EComponentsGroupId } from "@/documentation/types/enums/componentsGroupId";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: InitialState = {
  componentsGroupId: EComponentsGroupId.Buttons,
};

const detectorsSlice = createSlice({
  name: "detectors",
  initialState,
  reducers: {
    setComponentsGroupId(state, action: PayloadAction<EComponentsGroupId>) {
      state.componentsGroupId = action.payload;
    },
  },
});

export const setComponentsGroupIdActions = detectorsSlice.actions;
export const setComponentsGroupIdReducers = detectorsSlice.reducer;
