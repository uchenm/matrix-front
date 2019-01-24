import React from 'react'
import TradeGridLayout from '../../components/TradeGridLayout'
import InstrumentSelector from '../../components/InstrumentSelector'
import styles from './index.less'

const TradeChart = () => {
  return (
    <div id={styles.tradeChart} className='flex-1 flex-col'>
      <InstrumentSelector/>
      <div className={`${styles.content}`}>
        <TradeGridLayout/>
      </div>
    </div>
  )
}

export default TradeChart