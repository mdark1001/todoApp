<template>
  <div class="column is-4-desktop is-12-mobile ">
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-5">{{  project.title }}</p>
        </div>
      </div>

      <div class="content">
        <p>
          {{project.description}}
        </p>
        <br>
        <!-- <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time> -->
      </div>
    </div>
    <chart-doughnut :hash="chart_id" :is_small="true"></chart-doughnut>
  </div>
  </div>
</template>

<script>
  import ChartDoughnut from '@/components/chartsjs/doughnut'

export default {
  name: 'project',
  props: ['project'],
  computed:{
    chart_id:function () {
      return `chart_${this.project._id}`
    }
  },
  components:{ChartDoughnut}
}
</script>
<style scoped lang="scss">
  .column  .card {
    height: 100%
  }
</style>
