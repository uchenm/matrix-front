/*
 * @Author: XueYu 😊
 * @Date: 2019-01-24 10:38:08
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-01-24 13:51:39
 */
import UserHeader from '../../components/Header/UserHeader'
import Footer from '../../components/Footer'
import styles from './index.less'

const UserLayout = ({ children }) => {
  return (
    <div className={`${styles.userLayout} flex-1 flex-col`}>
      <UserHeader/>
      <div className={`${styles.content} flex-1 flex`}>{children}</div>
      <Footer/>
    </div>
  )
}

export default UserLayout