/*
 * @Author: XueYu 😊
 * @Date: 2019-01-24 10:39:20
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-01-24 17:44:07
 */
import React, {Fragment} from 'react'
import { getCookie } from '../utils'
import Redirect from 'umi/redirect'
import './index.less'

const isLogin = getCookie('user')

const Index = ({ children }) => {
  if (isLogin) {
    return (
      <Fragment>{children}</Fragment>
    )
  }
  return <Redirect to="/user/login"/>
}

export default Index