<template>
  <el-card shadow="never" class="index">
    <template #header>
      <div class="card_header">
        <b>首页</b>
      </div>
    </template>
    <div ref="echartRef" :style="{ width: '100%', height: '300px' }"></div>
  </el-card>
</template>

<script>
import { getCurrentInstance, onMounted, ref } from "vue";
export default {
  components: {},
  setup() {
    let { proxy } = getCurrentInstance();
    let echartRef = ref(null);

    onMounted(() => {
      let barChart = proxy.$echarts.init(echartRef.value);
      barChart.setOption({
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: "bar",
          },
        ],
      });
      window.onresize = function () {
        barChart.resize();
      };
    });

    return {
      echartRef,
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
</style>
