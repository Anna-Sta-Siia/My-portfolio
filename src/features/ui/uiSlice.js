import { createSlice } from '@reduxjs/toolkit';

const initial = { theme: 'light', language: 'en' };

const ui = createSlice({
  name: 'ui',
  initialState: initial,
  reducers: {
    setTheme:    (s, a) => { s.theme = a.payload; },
    setLanguage: (s, a) => { s.language = a.payload; }
  }
});
export const { setTheme, setLanguage } = ui.actions;
export default ui.reducer;
