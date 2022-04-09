<template>
  <div class="list-container-root">
    <div class="lun-bo-tu">这是一个轮播图</div>
    <div class="links">一个框</div>
  </div>
</template>

<script>
export default {
  name: "ListContainer",
};
</script>

<style>
.lun-bo-tu {
  width: 1000px;
  height: 400px;
  background-color: cadetblue;
  float: left;
  position: relative;
  left: 150px;
}
.links {
  width: 200px;
  height: 400px;
  background-color: antiquewhite;
  float: right;
  position: relative;
  right: 100px;
}
</style>