export default {
  namespace: 'app',
  state: {
    counter: 0,
  },
  effects: {},
  reducers: {
    add(state, { payload }) {
      return {
        ...state,
        counter: ++state.counter,
        ...payload,
      }
    },
    dec(state, { payload }) {
      return {
        ...state,
        counter: --state.counter,
        ...payload,
      }
    },
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    }
  },
}