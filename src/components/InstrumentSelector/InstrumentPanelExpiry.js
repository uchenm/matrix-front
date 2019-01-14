import styles from './index.less'
import { Icon } from 'antd'

const InstrumentPanelExpiry = ({ type, children, up }) => {
  // if (type === 'square') {
    return (
      <div className={`${styles[type]} ${styles.btn} flex align-items-center cursor-p`}>
        <div className={styles.dot}></div>
        {children}
        <span className={`${styles.priceWidget} ${up ? styles.up : styles.down}`}>
          3535.0
          <Icon type={up ? 'caret-up' : 'caret-down'} className={up ? styles.up : styles.down} />
        </span>
      </div>
    )
  // }
}
export default InstrumentPanelExpiry