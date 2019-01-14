/*
 * @Author: XueYu 😊
 * @Date: 2019-01-11 18:09:12
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-01-11 20:55:45
 */
import React, {PureComponent} from 'react'
import { Tabs } from 'antd'
import Head from './Head'
import Content from './Content'
import styles from './index.less'

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}
const tabBarStyle = {
  background: '#eee',
  margin: '0',
}

class InstrumentSelector extends PureComponent {
  state = {
    instrumentData: [
      {
        instrumentRootSymbol: 'XBT',
        instrumentDescription: '比特币',
        lastChangePcnt: '-3.96%',
        up: false,
      },
      {
        instrumentRootSymbol: 'ADA',
        instrumentDescription: '卡尔达诺',
        lastChangePcnt: '-3.31%',
        up: false,
      },
      {
        instrumentRootSymbol: 'BCH',
        instrumentDescription: '比特币现金',
        lastChangePcnt: '-1.96%',
        up: false,
      },
      {
        instrumentRootSymbol: 'EOS',
        instrumentDescription: 'EOS 代币',
        lastChangePcnt: '-3.38%',
        up: false,
      },
      {
        instrumentRootSymbol: 'ETH',
        instrumentDescription: '以太币',
        lastChangePcnt: '-6.13%',
        up: false,
      },
      {
        instrumentRootSymbol: 'LTC',
        instrumentDescription: '莱特币',
        lastChangePcnt: '-0.90%',
        up: false,
      },
      {
        instrumentRootSymbol: 'TRX',
        instrumentDescription: '波场币',
        lastChangePcnt: '+0.97%',
        up: true,
      },
      {
        instrumentRootSymbol: 'XRP',
        instrumentDescription: '瑞波币',
        lastChangePcnt: '-0.36%',
        up: false,
      },
    ],
  }
  render(){
    return (
      <div className={styles.instrumentSelector}>
        <Tabs onChange={callback} type="card" tabBarStyle={tabBarStyle}>
          {
            this.state.instrumentData.map(item => (
              <TabPane tab={
                <Head {...item}/>
              } key={item.instrumentRootSymbol}>
                <Content {...item}/>
              </TabPane>
            ))
          }
        </Tabs>
      </div>
    )
  }
}

export default InstrumentSelector