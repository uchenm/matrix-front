/*
 * @Author: XueYu 😊
 * @Date: 2019-01-11 20:40:22
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-01-11 21:07:40
 */
import { Icon } from 'antd'
import styles from './index.less'
import Link from 'umi/link'

function renderContent (instrumentRootSymbol) {
  if (instrumentRootSymbol === 'XBT') {
    return (
      <div>

      </div>
    )
  }
}

const Content = ({instrumentRootSymbol, instrumentDescription}) => (
  <div className={`${styles.content} f-12`}>
    { renderContent(instrumentRootSymbol) }
    <Link to='/' className={styles.tipbox}>
      {instrumentRootSymbol}({instrumentDescription})指南
      <Icon type="question-circle" />
    </Link>
  </div>
)

export default Content