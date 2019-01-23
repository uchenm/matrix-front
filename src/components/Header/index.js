
import React, { PureComponent } from 'react'
import { Icon, Popover } from 'antd'
import Link from 'umi/link'
import styles from './index.less'

/* 通知 */
const Notification_Items = [
  {
    title: 'New Bitcoin and Altcoin Quarterly Futures Contracts',
    time: '12月13日 下午12:29',
    content: 'On 17th December 2018, the March 2019 quarterly ADA, BCH, EOS, ETH, LTC, TRX, and XRP futures contracts will be listed:'
  },
  {
    title: 'New Bitcoin and Altcoin Quarterly Futures Contracts',
    time: '12月13日 下午12:29',
    content: 'On 17th December 2018, the March 2019 quarterly ADA, BCH, EOS, ETH, LTC, TRX, and XRP futures contracts will be listed:'
  },
  {
    title: 'New Bitcoin and Altcoin Quarterly Futures Contracts',
    time: '12月13日 下午12:29',
    content: 'On 17th December 2018, the March 2019 quarterly ADA, BCH, EOS, ETH, LTC, TRX, and XRP futures contracts will be listed:'
  },
  {
    title: 'New Bitcoin and Altcoin Quarterly Futures Contracts',
    time: '12月13日 下午12:29',
    content: 'On 17th December 2018, the March 2019 quarterly ADA, BCH, EOS, ETH, LTC, TRX, and XRP futures contracts will be listed:'
  },
  {
    title: 'New Bitcoin and Altcoin Quarterly Futures Contracts',
    time: '12月13日 下午12:29',
    content: 'On 17th December 2018, the March 2019 quarterly ADA, BCH, EOS, ETH, LTC, TRX, and XRP futures contracts will be listed:'
  },
  {
    title: 'New Bitcoin and Altcoin Quarterly Futures Contracts',
    time: '12月13日 下午12:29',
    content: 'On 17th December 2018, the March 2019 quarterly ADA, BCH, EOS, ETH, LTC, TRX, and XRP futures contracts will be listed:'
  },
  {
    title: 'New Bitcoin and Altcoin Quarterly Futures Contracts',
    time: '12月13日 下午12:29',
    content: 'On 17th December 2018, the March 2019 quarterly ADA, BCH, EOS, ETH, LTC, TRX, and XRP futures contracts will be listed:'
  },
  {
    title: 'New Bitcoin and Altcoin Quarterly Futures Contracts',
    time: '12月13日 下午12:29',
    content: 'On 17th December 2018, the March 2019 quarterly ADA, BCH, EOS, ETH, LTC, TRX, and XRP futures contracts will be listed:'
  },
]
const Notification = () => (
  <div className={styles.notification}>
    <div className={styles.headerWidgetTitle}>公告和更新</div>
    <div className={styles.content}>
      {
        Notification_Items.map((item, index) => (
          <div className={styles.item} key={index}>
            <div className={styles.head}>
              <div className={`f-16 c-darkblue`}>{item.title}</div>
              <div className={`c-000-7`}>{item.time}</div>
            </div>
            <div className={`f-12`}>{item.content}</div>
          </div>
        ))
      }
    </div>
  </div>
)
/* 语言 */
const Lang = () => (
  <div className={styles.lang}>
    <div className={styles.headerWidgetTitle}>语言</div>
    <div className={styles.content}>
      <div className={`flex flex-justify-between align-items-center cursor-p ${styles.item}`}>
        <span>English</span>
        <img className={styles.countryIcon} src="/image/en-US.svg" alt=""/>
      </div>
      <div className={`flex flex-justify-between align-items-center cursor-p ${styles.item}`}>
        <span>中文</span>
        <img className={styles.countryIcon} src="/image/zh-CN.svg" alt=""/>
      </div>
      <div className={`flex flex-justify-between align-items-center cursor-p ${styles.item}`}>
        <span>Русский</span>
        <img className={styles.countryIcon} src="/image/ru-RU.svg" alt=""/>
      </div>
      <div className={`flex flex-justify-between align-items-center cursor-p ${styles.item}`}>
        <span>한국어</span>
        <img className={styles.countryIcon} src="/image/ko-KR.svg" alt=""/>
      </div>
      <div className={`flex flex-justify-between align-items-center cursor-p ${styles.item}`}>
        <span>日本語</span>
        <img className={styles.countryIcon} src="/image/ja-JP.svg" alt=""/>
      </div>
    </div>
  </div>
)
/* 账户 */
const Account = () => (
  <div className={styles.account}>
    <div className={styles.headerWidgetTitle}>主要选项</div>
    <div className={styles.content}>
      <div className={styles.btnGroup}>
        <div className={`${styles.accountBtn} cursor-p bg-light-blue flex align-items-center`}>
          <Icon type="user" style={{color: '#fff', fontSize: '18px', margin: '0 15px'}}/>
          <span className={`flex-1 f-bolder t-center c-fff ${styles.txt}`}>账户和安全性</span>
        </div>
        <div className={`${styles.accountBtn} cursor-p bg-light-blue flex align-items-center`}>
          <Icon type="setting" style={{color: '#fff', fontSize: '18px', margin: '0 15px'}}/>
          <span className={`flex-1 f-bolder t-center c-fff ${styles.txt}`}>网站设定</span>
        </div>
        <div className={`${styles.accountBtnOrange} cursor-p bg-orange flex align-items-center`}>
          <Icon type="logout" style={{color: '#fff', fontSize: '18px', margin: '0 15px'}}/>
          <span className={`flex-1 f-bolder t-center c-fff ${styles.txt}`}>登出</span>
        </div>
      </div>
    </div>
  </div>
)
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
          <div className={`${styles.links} flex flex-justify-between align-items-center f-bolder`}>
            <Link to="/trade/XBTUSD" style={{marginLeft: '6px'}}>交易</Link>
            <span className=''>•</span>
            <Link to="/trade/XBTUSD">账户</Link>
            <span className=''>•</span>
            <Link to="/trade/XBTUSD">合约</Link>
            <span className=''>•</span>
            <Link to="/trade/XBTUSD">参考</Link>
            <span className=''>•</span>
            <Link to="/trade/XBTUSD">API</Link>
          </div>
          <div className={`flex-1 flex flex-justify-end align-items-center f-12 ${styles.headerWidget}`}>
            <span className={styles.line}></span>
            <div className={`${styles.total} flex-col justify-center cursor-p`}>
              <div className='flex-justify-between align-items-center flex flex-1'>
                <span>总:</span>
                <span>0.0000 XBT</span>
              </div>
              <div className='flex-justify-between align-items-center flex flex-1'>
                <span>可用:</span>
                <span>0.0000 XBT</span>
              </div>
            </div>
            <span className={styles.line}></span>
            <Popover content={<Notification/>} placement='bottomRight'
              trigger='click' overlayClassName='headerNotification'>
              <div className={`cursor-p ${styles.widgetWrap}`}>
                <Icon type="notification"/>
              </div>
            </Popover>
            <span className={styles.line}></span>
            <Popover content={<Lang/>} placement='bottomRight'
              trigger='click' overlayClassName='headerLang'>
              <div className={`${styles.widgetWrap} cursor-p`}>
                <img className={styles.langWrap} src="/image/zh-CN.svg" alt=""/>
              </div>
            </Popover>
            <span className={styles.line}></span>
            <div className={`${styles.widgetWrap} cursor-p`}>
              <Link to='/trade/XBTUSD'><Icon type="question-circle" /></Link>
            </div>
            <span className={styles.line}></span>
            <Popover content={<Account/>} placement='bottomRight'
              trigger='click' overlayClassName='headerLang'>
              <div className={`${styles.widgetWrap} f-18 cursor-p`}>
                zhaoxueyu@dae.org
                <Icon type="caret-down" />
              </div>
            </Popover>
          </div>
        </div>
      </div>
    )
  }
}

export default Header