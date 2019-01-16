/*
 * @Author: XueYu 😊
 * @Date: 2019-01-16 17:35:35
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-01-16 19:35:39
 */
import styles from './index.less'

const OrderTable = ({ className, data, theadArr=[], noHead, body, style }) => {
  return (
    <table className={styles[className]} cellSpacing='0' style={style}>
      <thead style={{ display: noHead ? 'none' : 'table-head-group' }}>
        <tr>
          { theadArr.map(item => <th key={item}>{item}</th>) }
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {
              body.map(trItem => (
                <td className={styles[trItem.className]} key={trItem.key}>
                  {
                    trItem.depthBar && (trItem.depthBar === 'left' || trItem.depthBar === 'right') &&
                    (
                      <div className={`${styles.depthBar} ${styles.red}`}
                        style={{width: index+'0%', [trItem.depthBar]: 0}}>
                      </div>
                    )
                  }
                  {item[trItem.key]}
                </td>
              ))
            }
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default OrderTable