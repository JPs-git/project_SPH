<template>
  <div class="home-root">
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Floor></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import ListContainer from "./ListContainer";
import Recommend from "./Recommend";
import Rank from "./Rank";
import Like from "./Like";
import Floor from './Floor'
import Brand from './Brand'
export default {
  name: "Home",
  components: { ListContainer, Recommend, Rank, Like, Floor, Brand},
};
</script>

<style>
.home-root {
 
}
</style>