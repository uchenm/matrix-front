/*
 * @Author: XueYu 😊
 * @Date: 2019-01-18 11:29:31
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-01-18 17:38:39
 */

import styles from './index.less'
import { Icon } from 'antd'

const BasicOrdersAndPositions = ({ activeTabKey }) => {
  console.log('activeTabKey',activeTabKey)
  const positions = ['合约', '目前仓位数量', '价值', '开仓价格', '标记价格', '强平价格', '保证金','未实现盈亏(回报率%)', '已实现盈亏', '平仓']
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {positions.map(item => (
            <td key={item}>
              <div className={`${styles.tdWrapper} flex align-items-center`}>
                <span className={styles.tdTitle}>{item}</span>
                <div className={`${styles.sortGroup} flex-col justify-center align-items-center`}>
                  <Icon type="caret-up" className={`${styles.upSortIcon}`}/>
                  <Icon type="caret-down" className={styles.downSortIcon}/>
                </div>
              </div>
            </td>
          ))}
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        <tr>
          <td className={styles.noData} colSpan='100'>无数据</td>
        </tr>
      </tbody>
    </table>
  )
}

export default BasicOrdersAndPositions