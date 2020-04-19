<template>
  <div class="rating">
    <span :class="{'active': value>2}"  @click="set_active(3)"></span>
    <span :class="{'active': value>1}"  @click="set_active(2)"></span>
    <span :class="{'active': value>0}"  @click="set_active(1)"></span>
  </div>
</template>

<script>
export default {
  name: '',
  data: () => ({
    value: 0
  }),
  methods: {
    set_active: function (vals) {
      this.value = vals
    }
  }

}
</script>
<style scoped>
  .rating {
    unicode-bidi: bidi-override;
    direction: rtl;
  }
  .rating > span {
    display: inline-block;
    position: relative;
    font-size: 24px;
    content: '--';
  }
  .rating > span:hover,
  .rating > span:hover ~ span {
    color: transparent;
  }
  .rating > span:hover:before,
  .rating > span:hover ~ span:before {
    content: "\2605";
    position: absolute;
    left: 0;
    color: gold;
  }
  .rating > span:before.active{
    content: "\2605";
    color: gold;
    position: absolute;
    border-color: gold;

  }
</style>
