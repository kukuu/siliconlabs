import { init } from '@rematch/core'
import { github } from './models'

// rematch store with initialValue set to 5
export const initStore = (initialState = {}) => {
  return init({
    models: {
      github
    },
    redux: {
      initialState
    }
  })
}
