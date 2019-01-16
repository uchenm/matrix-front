export default {
  namespace: 'trade',
  state: {
    tradeOrderDisplay: 'single', //double
  },
  reducers: {
    changeTradeOrderDisplay(state, { payload }){
      return {
        ...state,
        tradeOrderDisplay: payload.tradeOrderDisplay
      }
    },
  },
}