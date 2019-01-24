/*
 * @Author: XueYu 😊
 * @Date: 2019-01-24 17:16:26
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-01-24 19:25:06
 */
import styles from './index.less'
import { Tooltip } from 'antd'

const data = [
  { title: '钱包余额', value: '0.0000', symbol: 'XBT', tip: '钱包余额 = (存款 - 提款 + 已实现盈亏)' },
  { title: '未实现盈亏', value: '0.0000', symbol: 'XBT', tip: '未实现盈亏: 所有未平仓合约的当前盈亏。' },
  { title: '保证金余额', value: '0.0000', symbol: 'XBT', tip: '保证金余额: 你在交易所的总权益。保证金金额 = (钱包余额 + 未实现盈亏)' },
  { title: '仓位保证金', value: '0.0000', symbol: 'XBT', tip: '仓位保证金: 保证你手持仓位所需的最低保证金要求。此数值为你持有的每种合约的开仓价值乘以其所需的维持保证金比率之和，并加上任何未实现的盈亏。' },
  { title: '委托保证金', value: '0.0000', symbol: 'XBT', tip: '委托保证金: 你的委托所需要的最小保证金额。此数值为你的每个委托价值乘以其所需的起始保证金比例之和。' },
  { title: '可用余额', value: '0.0000', symbol: 'XBT', tip: '你可以用于开仓的保证金。可用余额 = (保证金金额 - 委托保证金 - 仓位保证金)' },
]

const MarginDisplay = () => (
  <div className={`${styles.marginDisplay} flex-col`}>
    <div className={`flex-col flex-1`}>
    {
      data.map((item, index) => (
        <div className={`${styles.item} flex-1`} key={item.title}>
          <div className={`${styles.header}  flex flex-justify-between`}>
            <Tooltip title={item.tip} placement='topLeft'>
              <span className={`${styles.title} f-14`}>{item.title}</span>
            </Tooltip>
            <span className={`${styles.value} f-12 f-bolder`}>{item.value} {item.symbol}</span>
          </div>
        </div>
      ))
    }
    </div>
    <div className='f-bolder'>0%保证金已被使用 0倍杠杆</div>
  </div>
)
export default MarginDisplay