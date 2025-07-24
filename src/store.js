import { configureStore } from '@reduxjs/toolkit'
import uiReducer from './features/ui/uiSlice'
import projectsReducer from './features/projects/projectSlice'

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    projects: projectsReducer,
  },
})
