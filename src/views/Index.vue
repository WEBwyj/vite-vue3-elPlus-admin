<template>
  <el-row :gutter="10">
    <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
      <el-row :gutter="10">
        <el-col :span="24" style="margin-bottom: 10px">
          <el-card shadow="always" class="index card_bg">
            <div
              ref="echartRef"
              :style="{ width: '100%', height: '300px' }"
            ></div>
          </el-card>
        </el-col>
        <el-col :span="24">
          <el-card shadow="always" class="index card_bg">
            <div
              ref="echartRef2"
              :style="{ width: '100%', height: '300px' }"
            ></div>
          </el-card>
        </el-col>
      </el-row>
    </el-col>
    <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
      <el-card shadow="always" class="index card_bg">
        <div id="clock">
          <p class="date">{{ date }}</p>
          <p class="time">{{ time }}</p>
        </div>
      </el-card>
    </el-col>
    <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
      <el-row :gutter="10">
        <el-col :span="24" style="margin-bottom: 10px">
          <el-card shadow="always" class="index card_bg">
            <div
              ref="echartRef3"
              :style="{ width: '100%', height: '300px' }"
            ></div>
          </el-card>
        </el-col>
        <el-col :span="24">
          <el-card shadow="always" class="index card_bg">
            <div
              ref="echartRef4"
              :style="{ width: '100%', height: '300px' }"
            ></div>
          </el-card>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import { getCurrentInstance, onMounted, reactive, ref, toRefs } from "vue";
import * as echarts from "echarts";
export default {
  components: {},
  setup() {
    let { proxy } = getCurrentInstance();
    let echartRef = ref(null);
    let echartRef2 = ref(null);
    let echartRef3 = ref(null);
    let echartRef4 = ref(null);

    const clock = reactive({
      date: "",
      time: "",
    });

    onMounted(() => {
      setInterval(updateTime, 1000);
      getMockData()

      // 柱状图
      let barChart = proxy.$echarts.init(echartRef.value);
      let option = {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [120, 200, 150, 80],
            type: "bar",
          },
        ],
      };
      barChart.setOption(option);

      // 渐变堆叠图
      let gradChart = proxy.$echarts.init(echartRef2.value);
      let option2 = {
        color: ["#80FFA5", "#00DDFF", "#37A2FF", "#FF0087", "#FFBF00"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        legend: {
          data: ["Line 1", "Line 2", "Line 3", "Line 4", "Line 5"],
          textStyle: {
            color: "#ffffff",
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "Line 1",
            type: "line",
            stack: "Total",
            smooth: true,
            lineStyle: {
              width: 0,
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgb(128, 255, 165)",
                },
                {
                  offset: 1,
                  color: "rgb(1, 191, 236)",
                },
              ]),
            },
            emphasis: {
              focus: "series",
            },
            data: [140, 232, 101, 264, 90, 340, 250],
          },
          {
            name: "Line 2",
            type: "line",
            stack: "Total",
            smooth: true,
            lineStyle: {
              width: 0,
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgb(0, 221, 255)",
                },
                {
                  offset: 1,
                  color: "rgb(77, 119, 255)",
                },
              ]),
            },
            emphasis: {
              focus: "series",
            },
            data: [120, 282, 111, 234, 220, 340, 310],
          },
          {
            name: "Line 3",
            type: "line",
            stack: "Total",
            smooth: true,
            lineStyle: {
              width: 0,
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgb(55, 162, 255)",
                },
                {
                  offset: 1,
                  color: "rgb(116, 21, 219)",
                },
              ]),
            },
            emphasis: {
              focus: "series",
            },
            data: [320, 132, 201, 334, 190, 130, 220],
          },
          {
            name: "Line 4",
            type: "line",
            stack: "Total",
            smooth: true,
            lineStyle: {
              width: 0,
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgb(255, 0, 135)",
                },
                {
                  offset: 1,
                  color: "rgb(135, 0, 157)",
                },
              ]),
            },
            emphasis: {
              focus: "series",
            },
            data: [220, 402, 231, 134, 190, 230, 120],
          },
          {
            name: "Line 5",
            type: "line",
            stack: "Total",
            smooth: true,
            lineStyle: {
              width: 0,
            },
            showSymbol: false,
            label: {
              show: true,
              position: "top",
            },
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgb(255, 191, 0)",
                },
                {
                  offset: 1,
                  color: "rgb(224, 62, 76)",
                },
              ]),
            },
            emphasis: {
              focus: "series",
            },
            data: [220, 302, 181, 234, 210, 290, 150],
          },
        ],
      };
      gradChart.setOption(option2);

      // 饼图
      let dougChart = proxy.$echarts.init(echartRef3.value);
      let option3 = {
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "2%",
          left: "center",
          textStyle: {
            color: "#ffffff",
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          top: "10%",
          containLabel: true,
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 2,
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "20",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1048, name: "Search Engine" },
              { value: 735, name: "Direct" },
              { value: 580, name: "Email" },
              { value: 484, name: "Union Ads" },
              { value: 300, name: "Video Ads" },
            ],
          },
        ],
      };
      dougChart.setOption(option3);

      // 折线图
      let lineChart = proxy.$echarts.init(echartRef4.value);
      let option4 = {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            smooth: true,
          },
        ],
      };
      lineChart.setOption(option4);

      window.addEventListener("resize", function () {
        barChart.resize();
        gradChart.resize();
        dougChart.resize();
        lineChart.resize();
      });
    });

    // 数字时钟
    const updateTime = () => {
      let week = [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
      ];
      var cd = new Date();
      clock.time =
        zeroPadding(cd.getHours(), 2) +
        ":" +
        zeroPadding(cd.getMinutes(), 2) +
        ":" +
        zeroPadding(cd.getSeconds(), 2);
      clock.date =
        zeroPadding(cd.getFullYear(), 4) +
        "-" +
        zeroPadding(cd.getMonth() + 1, 2) +
        "-" +
        zeroPadding(cd.getDate(), 2) +
        " " +
        week[cd.getDay()];
    };
    const zeroPadding = (num, digit) => {
      var zero = "";
      for (var i = 0; i < digit; i++) {
        zero += "0";
      }
      return (zero + num).slice(-digit);
    };

    const getMockData = () => {
        proxy.$axios.get('/api/getData')
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          
        })
      };

    return {
      echartRef,
      echartRef2,
      echartRef3,
      echartRef4,
      ...toRefs(clock),
    };
  },
};
</script>

<style lang="scss" scoped>
.card_header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card_bg {
  background: #393847;
  // background: -webkit-radial-gradient(center ellipse, #2d2c3c 0%, #393847 70%);
  // background: radial-gradient(ellipse at center, #2d2c3c 0%, #393847 70%);
  background-size: 100%;
  height: 100%;
  border: none;
  // 数字时钟
  #clock {
    // font-family: "Share Tech Mono", monospace;
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    color: #daf6ff;
    text-shadow: 0 0 20px #0aafe6, 0 0 20px rgba(10, 175, 230, 0);
    .time {
      letter-spacing: 0.05em;
      font-size: 80px;
      padding: 5px 0;
    }
    .date {
      letter-spacing: 0.1em;
      font-size: 24px;
    }
  }
}
</style>
