/*
 * @Author: XueYu 😊
 * @Date: 2019-01-14 18:12:16
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-01-24 16:52:29
 */

/* 操作localstorage */
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
/* 操作cookie */
/* 获取cookie */
export const getCookie = name => {
  let arr;
  const reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`);
  if (arr = document.cookie.match(reg)) { return unescape(arr[2]); } else { return null; }
};
/* 删除cookie */
export const delCookie = name => {
  const exp = new Date();
  exp.setTime(exp.getTime() - 1);
  const cval = getCookie(name);
  if (cval !== null) {
    document.cookie = `${name}=${cval};path=/;expires=${exp.toGMTString()}`;
  }
};
/* 设置cookie */
export const setCookie = (name, value) => {
  const maxAge = 36000;
  const now = new Date();
  const offset = 8;
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const nd = utc + (3600000 * offset);
  const exp = new Date(nd);
  exp.setTime(exp.getTime() + (maxAge * 1000));
  document.cookie = `${name}=${escape(value)};path=/;Max-Age=${maxAge}expires=${exp.toGMTString()};`;
};