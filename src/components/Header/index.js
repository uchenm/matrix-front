
import React, { PureComponent } from 'react'
import Link from 'umi/link'
import styles from './index.less'

class Header extends PureComponent {
  state = {
    coinArr: ['XBT', 'ADA', 'BCH', 'EOS', 'ETH', 'LTC', 'TRX', 'XRP'],
    instrumentsArr: [
      {
        symbol: 'XBTUSD',
        price: 3634.5,
        lastChangePcnt: '-4.38%'
      },
      {
        symbol: 'XBTH19',
        price: 3634.5,
        lastChangePcnt: '-4.38%'
      },
    ],
    indicesData: {
      symbol: 'XBTUSD',
      price: 3634.5,
      lastChangePcnt: '-4.38%'
    },
    hovered: false,
  }
  onMouseOver = () => this.setState({hovered: true})
  onMouseOut = () => this.setState({hovered: false})

  render(){
    const { coinArr, hovered, instrumentsArr, indicesData } = this.state

    return (
      <div id={styles.header} className='f-12'>
        <div className={`${styles.headerTip} flex align-items-center`}>
          <i>ding</i>
          <span className={`${styles.groupSelectors} ${hovered ? styles.hovered: ''}`}
            onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
            {
              coinArr.map(item => (
                <span key={item} className={`${styles.groupSelector} cursor-p`}>
                  {item}
                </span>)
              )
            }
            <span className={`${styles.groupSelector} cursor-p f-bolder`}>近期</span>
            <span className={`${styles.groupSelector} cursor-p f-bolder ${styles.selected}`}>所有</span>
          </span>

          <div className={`${styles.instruments} flex-1`}>
            {
              instrumentsArr.map(item => (
                <span key={item.symbol} className={`${styles.instrument}`}>
                  <a href="###" className={styles.symbol}>{item.symbol}</a>
                  <span className={`${styles.price} f-bolder`}>{item.price}</span>
                  <span className={styles.lastChangePcnt}>{item.lastChangePcnt}</span>
                </span>
              ))
            }
          </div>

          <div className={`${styles.indices}`}>
            <span className={styles.tickerBarItem}>
              <a href="###" className={styles.symbol}>{indicesData.symbol}</a>
              <span className={`${styles.price} f-bolder`}>{indicesData.price}</span>
              <span className={styles.lastChangePcnt}>{indicesData.lastChangePcnt}</span>
            </span>
          </div>

          <div className={styles.expiry}>
            <span className={styles.funding}>
              资金费率：<b>{new Date().valueOf()}</b> @ -0.1344%
            </span>
            <span className={styleMedia.time}>时间：{}</span>
          </div>

        </div>
        <div className={`${styles.headerBar} flex align-items-center`}>
          <div className={styles.logo}>LOGO</div>
          <span className={styles.line}></span>
          <div className={`${styles.links} flex-justify-between align-items-center f-bolder`}>
            <Link to="/trade/XBTUSD">交易</Link>
            <span className=''>•</span>
            <Link to="/trade/XBTUSD">账户</Link>
            <span className=''>•</span>
            <Link to="/trade/XBTUSD">合约</Link>
            <span className=''>•</span>
            <Link to="/trade/XBTUSD">参考</Link>
            <span className=''>•</span>
            <Link to="/trade/XBTUSD">API</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Header