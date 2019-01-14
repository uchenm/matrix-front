/*
 * @Author: XueYu 😊
 * @Date: 2019-01-11 20:03:24
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-01-11 20:53:46
 */

import styles from './index.less'
import { Icon } from 'antd'

const Head = ({instrumentRootSymbol, instrumentDescription, lastChangePcnt, up}) => (
  <div className={`${styles.head} t-center`}>
    <span className='c-000 f-14'>{instrumentDescription}</span>
    <div className='f-12'>
      <i>{instrumentRootSymbol}</i>
      <span className='c-red'>{lastChangePcnt}</span>
      <Icon type="arrow-down" style={{color: up ? '#d16547' : '#4aa165', margin: '0 0 0 5px'}}/>
    </div>
  </div>
)

export default Head