/*
 * @Author: XueYu 😊
 * @Date: 2019-01-14 18:12:16
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-01-14 18:18:59
 */


export function getItem(key){
  return JSON.parse(global.localStorage.getItem(key))
}
export function setItem(key, value){
  global.localStorage.setItem(key, JSON.stringify(value))
}
/* 取本地布局 */
export function getLayout(key) {
  let ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem("matrix-layout")) || {};
    } catch (e) {
      /*Ignore*/
    }
  }
  return ls[key];
}
/* 存布局到本地 */
export function saveLayout(key, value) {
  if (global.localStorage) {
    global.localStorage.setItem(
      "matrix-layout",
      JSON.stringify({
        [key]: value
      })
    );
  }
}
