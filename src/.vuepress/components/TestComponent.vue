<template>
  <div class="tcp-congestion-container">
    <div class="header">
      <h1>TCP拥塞控制机制可视化</h1>
      <p>展示TCP协议中拥塞窗口(cwnd)随传输轮次变化的过程</p>
    </div>
    
    <div class="chart-container">
      <div ref="chart" class="chart"></div>
    </div>
    
    <div class="explanation">
      <h2>拥塞控制阶段说明</h2>
      <div class="stage">
        <div class="stage-color slow-start"></div>
        <div class="stage-info">
          <h3>慢开始</h3>
          <p>初始阶段，拥塞窗口cwnd按指数规律快速增长，直到达到慢开始门限(ssthresh)</p>
        </div>
      </div>
      <div class="stage">
        <div class="stage-color congestion-avoidance"></div>
        <div class="stage-info">
          <h3>拥塞避免（加法增大）</h3>
          <p>cwnd达到ssthresh后，按线性（加法）方式缓慢增大，谨慎探测网络容量</p>
        </div>
      </div>
      <div class="stage">
        <div class="stage-color congestion-occur"></div>
        <div class="stage-info">
          <h3>网络拥塞（乘法减小）</h3>
          <p>出现网络拥塞时，将新的ssthresh设为当前cwnd的一半，同时cwnd重置，快速降低发送速率</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import * as echarts from 'echarts';

export default {
  name: 'TcpCongestionControl',
  setup() {
    const chart = ref(null);
    
    onMounted(() => {
      // 初始化图表
      const myChart = echarts.init(chart.value);
      
      // TCP拥塞窗口数据
      const rounds = Array.from({length: 23}, (_, i) => i); // 0-22轮次
      const cwndData = [
        1, 2, 4, 8, 16, 17, 18, 19, 20, 21, 22, 23, 24, 
        1, 2, 4, 8, 12, 13, 14, 15, 16, 17
      ];
      
      // 准备数据项，用于标记特殊点
      const markPointData = [
        {name: '慢开始结束', value: 'ssthresh=16', xAxis: 4, yAxis: 16},
        {name: '拥塞发生', value: 'cwnd骤降', xAxis: 12, yAxis: 24},
        {name: '新ssthresh', value: 'ssthresh=12', xAxis: 17, yAxis: 12}
      ];
      
      // 准备标记线数据
      const markLineData = [
        {name: '初始ssthresh', yAxis: 16, lineStyle: {color: '#ff7d00', type: 'dashed'}},
        {name: '新ssthresh', yAxis: 12, lineStyle: {color: '#ffcc00', type: 'dashed'}}
      ];
      
      // 区域填充数据
      const areaData = [
        {name: '慢开始阶段', xAxis: [0, 4], lineStyle: {color: 'transparent'}, itemStyle: {color: 'rgba(54, 162, 235, 0.2)'}},
        {name: '拥塞避免阶段', xAxis: [4, 12], lineStyle: {color: 'transparent'}, itemStyle: {color: 'rgba(75, 192, 192, 0.2)'}},
        {name: '拥塞恢复阶段', xAxis: [13, 22], lineStyle: {color: 'transparent'}, itemStyle: {color: 'rgba(54, 162, 235, 0.2)'}}
      ];
      
      // 配置项
      const option = {
        backgroundColor: '#f9f9f9',
        tooltip: {
          trigger: 'axis',
          formatter: '轮次 {b}: 拥塞窗口 {c}'
        },
        grid: {
          left: '5%',
          right: '5%',
          bottom: '10%',
          top: '5%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          name: '传输轮次',
          nameLocation: 'middle',
          nameGap: 30,
          data: rounds,
          axisLine: {
            lineStyle: {
              color: '#333'
            }
          },
          axisTick: {
            interval: 1
          }
        },
        yAxis: {
          type: 'value',
          name: '拥塞窗口 (cwnd)',
          nameLocation: 'middle',
          nameGap: 50,
          min: 0,
          max: 25,
          interval: 4,
          axisLine: {
            lineStyle: {
              color: '#333'
            }
          }
        },
        series: [
          // 填充区域
          ...areaData.map(area => ({
            type: 'line',
            data: rounds.map((round, index) => {
              if (round >= area.xAxis[0] && round <= area.xAxis[1]) {
                return cwndData[index];
              }
              return null;
            }),
            name: area.name,
            stack: 'area',
            lineStyle: area.lineStyle,
            itemStyle: area.itemStyle,
            emphasis: {
              disabled: true
            },
            z: 0
          })),
          // 主曲线
          {
            type: 'line',
            data: cwndData,
            name: '拥塞窗口',
            symbol: 'circle',
            symbolSize: 8,
            lineStyle: {
              width: 3,
              color: '#333'
            },
            itemStyle: {
              color: '#333'
            },
            markPoint: {
              data: markPointData.map(point => ({
                name: point.name,
                value: point.value,
                xAxis: point.xAxis,
                yAxis: point.yAxis,
                symbol: 'pin',
                symbolSize: 50,
                label: {
                  show: true,
                  position: 'top',
                  fontSize: 14
                }
              })),
              symbolOffset: [0, '-100%']
            },
            markLine: {
              data: markLineData.map(line => ({
                name: line.name,
                yAxis: line.yAxis,
                lineStyle: line.lineStyle,
                label: {
                  show: true,
                  formatter: line.name,
                  position: 'end'
                }
              }))
            },
            // 阶段标注
            markArea: {
              data: [
                [
                  {name: '慢开始', xAxis: 0},
                  {xAxis: 4}
                ],
                [
                  {name: '加法增大', xAxis: 4},
                  {xAxis: 12}
                ],
                [
                  {name: '乘法减小', xAxis: 12},
                  {xAxis: 13}
                ],
                [
                  {name: '恢复阶段', xAxis: 13},
                  {xAxis: 22}
                ]
              ],
              label: {
                show: true,
                color: '#333',
                fontSize: 14,
                fontWeight: 'bold'
              },
              itemStyle: {
                color: 'transparent'
              },
              lineStyle: {
                color: '#999',
                type: 'dashed'
              }
            },
            z: 10
          }
        ],
        legend: {
          data: ['拥塞窗口', '慢开始阶段', '拥塞避免阶段', '拥塞恢复阶段', '初始ssthresh', '新ssthresh'],
          bottom: 0,
          textStyle: {
            fontSize: 12
          }
        }
      };
      
      // 设置配置项
      myChart.setOption(option);
      
      // 响应窗口大小变化
      window.addEventListener('resize', () => {
        myChart.resize();
      });
      
      // 清理函数
      return () => {
        window.removeEventListener('resize', () => {
          myChart.resize();
        });
        myChart.dispose();
      };
    });
    
    return {
      chart
    };
  }
};
</script>

<style scoped>
.tcp-congestion-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
}

.header {
  text-align: center;
  margin-bottom: 30px;
}

.header h1 {
  color: #333;
  font-size: 28px;
  margin-bottom: 10px;
}

.header p {
  color: #666;
  font-size: 16px;
}

.chart-container {
  width: 100%;
  height: 600px;
  margin-bottom: 40px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  background-color: white;
}

.chart {
  width: 100%;
  height: 100%;
}

.explanation {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.explanation h2 {
  color: #333;
  margin-bottom: 20px;
  text-align: center;
}

.stage {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.stage-color {
  width: 20px;
  height: 20px;
  margin-right: 15px;
  border-radius: 4px;
}

.slow-start {
  background-color: rgba(54, 162, 235, 0.5);
}

.congestion-avoidance {
  background-color: rgba(75, 192, 192, 0.5);
}

.congestion-occur {
  background-color: rgba(255, 99, 132, 0.5);
}

.stage-info h3 {
  margin: 0 0 5px 0;
  color: #333;
}

.stage-info p {
  margin: 0;
  color: #666;
  line-height: 1.5;
}
</style>
