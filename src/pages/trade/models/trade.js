/*
 * @Author: XueYu 😊
 * @Date: 2019-01-24 16:05:23
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-01-24 17:36:18
 */

import { getLayout, saveLayout, getItem, setItem } from '../../../utils'
import { BASIC, HIGH } from '../../../common/layout'

const layoutType = getItem('type_layout') || 'basic'
const originalLayouts = layoutType === 'basic'?
                          (getLayout('basic') || BASIC):
                          (getLayout('high') || HIGH)
const closedCards = getItem('close') || []

export default {
  namespace: 'trade',
  state: {
    tradeOrderDisplay: 'single', //double
    layouts: JSON.parse(JSON.stringify(originalLayouts)),
    closedCards: JSON.parse(JSON.stringify(closedCards)),
    currentBreakpoint: 'lg',
    layoutType,
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
      saveLayout(layoutType, layouts)
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
      saveLayout(layoutType, layouts);
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
      saveLayout(layoutType, layouts);
      return {
        ...state,
        layouts,
      }
    },
    /* 布局类型变化 */
    layoutTypeChange(state, { payload: {layoutType} }){
      setItem('type_layout', layoutType)
      const closedCards = {
        ...state.closedCards
      }
      const layouts = JSON.parse(JSON.stringify(getLayout(layoutType) || HIGH))
      return {
        ...state,
        layoutType,
        closedCards,
        layouts
      }
    },
  },
}