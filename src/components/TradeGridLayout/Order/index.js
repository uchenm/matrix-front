/*
 * @Author: XueYu 😊
 * @Date: 2019-01-16 09:41:28
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-01-16 19:36:19
 */
import React, { PureComponent } from 'react'
import { connect } from 'dva'
import { Icon, Tooltip } from 'antd'
import OrderTable from './OrderTable'
import styles from './index.less'

const data1 = [
  {price: '3592.5', size: '587,942', total: '2,442,737'},
  {price: '3592.5', size: '587,942', total: '2,442,737'},
  {price: '3592.5', size: '587,942', total: '2,442,737'},
  {price: '3592.5', size: '587,942', total: '2,442,737'},
  {price: '3592.5', size: '587,942', total: '2,442,737'},
  {price: '3592.5', size: '587,942', total: '2,442,737'},
  {price: '3592.5', size: '587,942', total: '2,442,737'},
  {price: '3592.5', size: '587,942', total: '2,442,737'},
  {price: '3592.5', size: '587,942', total: '2,442,737'},
  {price: '3592.5', size: '587,942', total: '2,442,737'},
  {price: '3592.5', size: '587,942', total: '2,442,737'},
]
const data2 = [
  {price: '3592.5', size: '587,942', total: '2,442,737'},
  {price: '3592.5', size: '587,942', total: '2,442,737'},
  {price: '3592.5', size: '587,942', total: '2,442,737'},
  {price: '3592.5', size: '587,942', total: '2,442,737'},
  {price: '3592.5', size: '587,942', total: '2,442,737'},
  {price: '3592.5', size: '587,942', total: '2,442,737'},
  {price: '3592.5', size: '587,942', total: '2,442,737'},
  {price: '3592.5', size: '587,942', total: '2,442,737'},
  {price: '3592.5', size: '587,942', total: '2,442,737'},
  {price: '3592.5', size: '587,942', total: '2,442,737'},
  {price: '3592.5', size: '587,942', total: '2,442,737'},
  {price: '3592.5', size: '587,942', total: '2,442,737'},
  {price: '3592.5', size: '587,942', total: '2,442,737'},
  {price: '3592.5', size: '587,942', total: '2,442,737'},
]
const data3 = [
  {price: '3592.5', size: '587,942', total: '2,442,737'},
  {price: '3592.5', size: '587,942', total: '2,442,737'},
  {price: '3592.5', size: '587,942', total: '2,442,737'},
  {price: '3592.5', size: '587,942', total: '2,442,737'},
  {price: '3592.5', size: '587,942', total: '2,442,737'},
  {price: '3592.5', size: '587,942', total: '2,442,737'},
  {price: '3592.5', size: '587,942', total: '2,442,737'},
  {price: '3592.5', size: '587,942', total: '2,442,737'},
  {price: '3592.5', size: '587,942', total: '2,442,737'},
  {price: '3592.5', size: '587,942', total: '2,442,737'},
  {price: '3592.5', size: '587,942', total: '2,442,737'},
  {price: '3592.5', size: '587,942', total: '2,442,737'},
  {price: '3592.5', size: '587,942', total: '2,442,737'},
  {price: '3592.5', size: '587,942', total: '2,442,737'},
  {price: '3592.5', size: '587,942', total: '2,442,737'},
  {price: '3592.5', size: '587,942', total: '2,442,737'},
  {price: '3592.5', size: '587,942', total: '2,442,737'},
  {price: '3592.5', size: '587,942', total: '2,442,737'},
  {price: '3592.5', size: '587,942', total: '2,442,737'},
  {price: '3592.5', size: '587,942', total: '2,442,737'},
  {price: '3592.5', size: '587,942', total: '2,442,737'},
  {price: '3592.5', size: '587,942', total: '2,442,737'},
  {price: '3592.5', size: '587,942', total: '2,442,737'},
  {price: '3592.5', size: '587,942', total: '2,442,737'},
  {price: '3592.5', size: '587,942', total: '2,442,737'},
  {price: '3592.5', size: '587,942', total: '2,442,737'},
]
const PriceWidget = () => (
  <div className={`${styles.priceWidget} ${styles.tRed} flex-1`}>
    3598.0
    <Icon type="arrow-down" style={{color: '#ae543b'}}/>
  </div>
)

const Limits = () => (
  <div className='flex-1'>
    <Icon type="global" style={{fontSize: '14px', color: 'rgba(0,0,0,0.4)', marginRight: 5}}/>
    <span className={styles.indicativeSettlePrice}>3605.79</span>
    <span>/ 3605.12 | </span>
    <Tooltip title={<div style={{width: '200px'}}>这一指标显示你在自动减仓中的位置。如果所有指示灯都亮起，在发生强平事件后，你的仓位可能被减小。点击查看更多详细信息。</div>}>
      <div className={`${styles.positionDeleverageIndicator} cursor-p`}>
        <div className={styles.leverageLight}></div>
        <div className={styles.leverageLight}></div>
        <div className={styles.leverageLight}></div>
        <div className={styles.leverageLight}></div>
        <div className={styles.leverageLight}></div>
      </div>
    </Tooltip>
  </div>
)

@connect(({ trade: {tradeOrderDisplay} }) => ({
  tradeOrderDisplay
}))
class Order extends PureComponent {
  render(){
    const { tradeOrderDisplay } = this.props

    if (tradeOrderDisplay === 'single') {
      return (
        <div className={`${styles.order}`}>
          <div className={styles.tableWrapper}>
            <OrderTable
              tradeOrderDisplay={tradeOrderDisplay} className='redTable'
              data={data1} theadArr={['价格', '目前仓位数量', '总']}
              body={[
                {key: 'price', className: 'price', },
                {key: 'size', className: 'size', },
                {key: 'total', className: 'total', depthBar: 'left'},
              ]}/>
          </div>

          <div className={styles.lastPriceWidget}>
            <PriceWidget/>
            <Limits/>
          </div>

          <div className={styles.tableWrapper}>
            <OrderTable
              tradeOrderDisplay={tradeOrderDisplay} className='greenTable'
              data={data2} theadArr={['价格', '目前仓位数量', '总']} noHead
              body={[
                {key: 'price', className: 'price', },
                {key: 'size', className: 'size', },
                {key: 'total', className: 'total', depthBar: 'left'},
              ]}/>
          </div>
        </div>
      )
    } else {
      return (
        <div className={styles.order}>
          <div className={`${styles.doubleLastPriceWidget} flex align-items-center`}>
            <PriceWidget/>
            <Limits/>
          </div>
          <div className='flex'>
            <OrderTable
              tradeOrderDisplay={tradeOrderDisplay} className='greenTable'
              data={data3} theadArr={['总', '目前仓位数量', '价格']}
              style={{border: 'none', borderLeft: '1px solid #bbb', borderBottom: '1px solid #bbb'}}
              body={[
                {key: 'total', className: 'total', },
                {key: 'size', className: 'size', },
                {key: 'price', className: 'price', depthBar: 'right'},
              ]}/>
            <OrderTable
              tradeOrderDisplay={tradeOrderDisplay} className='redTable'
              data={data3} theadArr={['价格', '目前仓位数量', '总']}
              style={{border: 'none', borderRight: '1px solid #bbb', borderBottom: '1px solid #bbb'}}
              body={[
                {key: 'price', className: 'price', depthBar: 'left'},
                {key: 'size', className: 'size', },
                {key: 'total', className: 'total', },
              ]}/>
          </div>
        </div>
      )
    }
  }
}

export default Order