/*
 * @Author: XueYu 😊
 * @Date: 2019-01-17 11:37:54
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-01-17 15:52:41
 */
import React, { PureComponent } from 'react'
import Highcharts from 'highcharts'
import Exporting from 'highcharts/modules/exporting'
import sizeMe from 'react-sizeme'
import styles from './index.less'
Exporting(Highcharts)

class DepthChart extends PureComponent {
  constructor(props){
    super(props)
    this.container = null
  }

  componentDidMount(){
    console.log('size', this.props.size)
    Highcharts.setOptions({
      colors: ["#008c00", "#ee3523"],
      chart: {
        backgroundColor: "#fff",
        //borderRadius: 0,
        //plotShadow: !0,
        //plotBorderWidth: 1,
      },
      xAxis: {
        gridLineWidth: 0,
        lineColor: "#000",
        tickColor: "#000",
        labels: {
          style: {
            color: "#000"
          }
        },
        title: {
          style: {
            color: "#333"
          }
        }
      },
      yAxis: {
        gridLineWidth: 0,
        lineColor: "#000",
        lineWidth: 1,
        tickWidth: 1,
        labels: {
          style: {
            color: "#000"
          }
        },
        title: {
          style: {
            color: "#333"
          }
        }
      },
      plotOptions: {
        series: {
          fillOpacity: .2
        }
      }
    });
    this.container = Highcharts.chart('container', {
      chart: {
        type: "area",
      },
      legend: {
        enabled: false
      },
      title: {
        text: null
      },
      subtitle: {
        text: ""
      },
      credits: {
        enabled:false
      },
      exporting: {
        enabled:false
      },
      xAxis: {
        title: {
          text: null
        },
        labels: {
          formatter: function () {
            return  this.value
          }
        }
      },
      yAxis: {
        title: {
          text: null
        },
        labels: {
          formatter: function () {
            return this.value
          }
        }
      },
      tooltip: {
        shared: !0,
        formatter: function () {
          return "委 托 价 ：" + '￥'+ this.points[0].x + "<br>" + this.points[0].series.name + "：" + '累计数量' + Math.round(this.points[0].y)
        }
      },
      plotOptions: {
        area: {
          pointStart: 0,
          marker: {
            enabled: !1,
            symbol: "circle",
            radius: 2,
            states: {
              hover: {
                enabled: !0
              }
            }
          }
        }
      },
      series: [{
        name:'买盘委托',
        data: [[214, 99], [289, 78], [305, 59], [458, 36], [500, 45], [900, 12]]
      },
      {
        name:'卖盘委托',
        data: [[910, 8], [1000, 14], [1100,29], [1200,45], [1300, 59], [1400, 81.2]]
      }]
    });
  }
  componentDidUpdate(){
    this.container && this.container.reflow()
    // return true
  }
  render(){
    const { size: { height } } = this.props
    return (
      <div className={styles.depth}>
        <div id='container' style={{ height }}></div>
      </div>
    )
  }
}
export default sizeMe({ monitorHeight: true })(DepthChart)