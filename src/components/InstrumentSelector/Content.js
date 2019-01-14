/*
 * @Author: XueYu 😊
 * @Date: 2019-01-11 20:40:22
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-01-11 21:07:40
 */
import { Icon } from 'antd'
import InstrumentPanelExpiry from './InstrumentPanelExpiry'
import styles from './index.less'
import Link from 'umi/link'

function renderContent (instrumentRootSymbol, up) {
  let btns = []
  // if (instrumentRootSymbol === 'XBT') {
    btns = [
      <InstrumentPanelExpiry type='square' up={up} key='1'>
        <span className={styles.description}>永续</span>
        <span>(100x)</span>
      </InstrumentPanelExpiry>,
      <InstrumentPanelExpiry type='round' up={up} key='2'>
        <span className={styles.description}>UP</span>
        <span>1月18日，3750.00 USD</span>
      </InstrumentPanelExpiry>,
    ]
  // }
  return btns
}

const Content = ({instrumentRootSymbol, instrumentDescription, up}) => (
  <div className={`${styles.content} f-12 flex align-items-center`}>
    { renderContent(instrumentRootSymbol) }
    <Link to='/' className={styles.tipbox}>
      {instrumentRootSymbol}({instrumentDescription})指南
      <Icon type="question-circle" />
    </Link>
  </div>
)

export default Content