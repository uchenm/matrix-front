import Header from '../components/Header'
import styles from './index.css';
import Sider from '../components/Sider'

function BasicLayout(props) {
  return (
    <div className={`${styles.normal} flex-col`} key='BasicLayout'>
      <Header/>
      <div className={`flex flex-1`}>
        <Sider/>
        <div className={`${styles.content} flex-1 flex`}>
          { props.children }
        </div>
      </div>
    </div>
  );
}

export default BasicLayout;

