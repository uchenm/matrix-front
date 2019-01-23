import { getLayout, saveLayout, getItem, setItem } from '../../../utils'
import { BASIC } from '../../../common/layout'
const originalLayouts = getLayout("layouts") || BASIC
const closedCards = getItem('close') || []

export default {
  namespace: 'trade',
  state: {
    tradeOrderDisplay: 'single', //double
    layouts: JSON.parse(JSON.stringify(originalLayouts)),
    closedCards: JSON.parse(JSON.stringify(closedCards)),
    currentBreakpoint: 'lg',
  },
  reducers: {
    /* 保存 */
    save(state, { payload }){
      return {
        ...state,
        ...payload,
      }
    },
    /*  */
    changeTradeOrderDisplay(state, { payload }){
      return {
        ...state,
        tradeOrderDisplay: payload.tradeOrderDisplay
      }
    },
    /* 关闭卡片 */
    closeCard(state, { payload: {key} }){
      const closedCards = {
        ...state.closedCards,
        [state.currentBreakpoint]: [
          ...(state.closedCards[state.currentBreakpoint] || []),
          ...state.layouts[state.currentBreakpoint].filter(({ i }) => i === key)
        ]
      }
      const layouts = {
        ...state.layouts,
        [state.currentBreakpoint]: state.layouts[state.currentBreakpoint].filter(({ i }) => i !== key)
      }
      setItem('close', closedCards)
      saveLayout('layouts',layouts)
      return {
        ...state,
        closedCards,
        layouts,
      }
    },
    /* 打开卡片 */
    openCard(state, { payload: {key} }){
      const closedCards = {
        ...state.closedCards,
        [state.currentBreakpoint]: state.closedCards[
          state.currentBreakpoint
        ].filter(({ i }) => i !== key)
      }
      const layouts = {
        ...state.layouts,
        [state.currentBreakpoint]: [
          ...state.layouts[state.currentBreakpoint],
          ...state.closedCards[state.currentBreakpoint].filter(({ i }) => i === key)
        ]
      }
      saveLayout("layouts", layouts);
      setItem('close', closedCards);
      return { ...state, closedCards, layouts }
    },
    /* 响应节点变化 */
    breakpointChange(state, {payload: {breakpoint}}){
      return {
        ...state,
        currentBreakpoint: breakpoint,
        closedCards: {
          ...state.closedCards,
          [breakpoint]:
            state.closedCards[breakpoint] ||
            state.closedCards[state.currentBreakpoint] ||
            []
        }
      }
    },
    /* 布局变化 */
    layoutChange(state, { payload: {layouts} }){
      saveLayout("layouts", layouts);
      return {
        ...state,
        layouts,
      }
    },
  },
}