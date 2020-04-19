<template>
  <div class="chart-container" :class="{'is-small':is_small}">
    <canvas :id="hash" width="100px" height="100px"></canvas>
  </div>
</template>

<script>
  const Chart = require('chart.js');
  const Colors = require('./colors').default
  export default {
    name: "",
    props: ['hash', 'title', 'datasets', 'labels','is_small'],
    data: () => ({
      ctx: undefined,
      chart: undefined,
    }),
    mounted: function () {
      this.ctx = document.getElementById(this.hash).getContext('2d');
      this.chart = new Chart(this.ctx, {
        type: 'doughnut',
        display:false,
        data: {
          labels: ['Red', 'Blue', 'Yellow'],
          datasets: [{
            label: '',
            data: [],
            backgroundColor: Colors,
          }]
        },
        options:{
          legend:false
        }
      })
    },
    methods: {},

  }
</script>
<style scoped>
  .chart-container{
    position: relative;
    margin: 0 auto;
  }
  .is-small{

    height: 120px;
    width: 120px

  }
</style>
