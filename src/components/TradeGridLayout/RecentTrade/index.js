/*
 * @Author: XueYu 😊
 * @Date: 2019-01-17 15:18:41
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-01-17 16:43:48
 */
import styles from './index.less'

const data = [
  { id: 0, price: '3587.0', size: '1', date: '下午3:33:33', side: 'S' },
  { id: 0, price: '3587.0', size: '1', date: '下午3:33:33', side: 'S' },
  { id: 0, price: '3587.0', size: '1', date: '下午3:33:33', side: 'S' },
  { id: 0, price: '3587.0', size: '1', date: '下午3:33:33', side: 'S' },
  { id: 0, price: '3587.0', size: '1', date: '下午3:33:33', side: 'S' },
  { id: 0, price: '3587.0', size: '1', date: '下午3:33:33', side: 'S' },
  { id: 0, price: '3587.0', size: '1', date: '下午3:33:33', side: 'S' },
  { id: 0, price: '3587.0', size: '100000', date: '下午3:33:33', side: 'B' },
  { id: 0, price: '3587.0', size: '100000', date: '下午3:33:33', side: 'B' },
  { id: 0, price: '3587.0', size: '100000', date: '下午3:33:33', side: 'B' },
  { id: 0, price: '3587.0', size: '100000', date: '下午3:33:33', side: 'B' },
  { id: 0, price: '3587.0', size: '100000', date: '下午3:33:33', side: 'B' },
  { id: 0, price: '3587.0', size: '100000', date: '下午3:33:33', side: 'B' },
  { id: 0, price: '3587.0', size: '100000', date: '下午3:33:33', side: 'B' },
  { id: 0, price: '3587.0', size: '1', date: '下午3:33:33', side: 'S' },
  { id: 0, price: '3587.0', size: '1', date: '下午3:33:33', side: 'S' },
  { id: 0, price: '3587.0', size: '1', date: '下午3:33:33', side: 'S' },
  { id: 0, price: '3587.0', size: '1', date: '下午3:33:33', side: 'S' },
  { id: 0, price: '3587.0', size: '100000', date: '下午3:33:33', side: 'B' },
  { id: 0, price: '3587.0', size: '100000', date: '下午3:33:33', side: 'B' },
  { id: 0, price: '3587.0', size: '100000', date: '下午3:33:33', side: 'B' },
  { id: 0, price: '3587.0', size: '100000', date: '下午3:33:33', side: 'B' },
  { id: 0, price: '3587.0', size: '100000', date: '下午3:33:33', side: 'B' },
]

const RecentTrade = () => {
  return (
    <ul className={styles.recentTrade}>
      {
        data.map((item, index) => (
          <li className={`${styles.tradeItem} flex ${item.side === 'S' ? styles.red: styles.green}`} key={index}>
            <div className={`${styles.price} f-bolder flex-1 ${styles.itemCol}`}>{item.price}</div>
            <div className={`${styles.size} flex-1 ${styles.itemCol}`}>{item.size}</div>
            <div className={`${styles.date} flex-1 ${styles.itemCol}`}>{item.date}</div>
            <div className={`${styles.side} ${styles.itemCol}`}>{item.side}</div>
          </li>
        ))
      }
    </ul>
  )
}
export default RecentTrade