<template>
  <div>

    <!-- #######  slider  ####### -->
    <h2>carousel slider</h2>
    <div id="food" class="carousel slide justify-content-center" data-ride="carousel">

      <!-- Indicators -->
      <ul class="carousel-indicators">
        <li data-target="#food" data-slide-to="0" class="active"></li>
        <li data-target="#food" data-slide-to="1"></li>
        <li data-target="#food" data-slide-to="2"></li>
      </ul>
      
      <!-- The slideshow -->
      <div class="carousel-inner">
        <div class="carousel-item active justify-content-center">
          <img class="rounded img-fluid mx-auto  d-block" src="http://lorempixel.com/output/food-q-c-640-480-1.jpg" alt="food 1">
        </div>
        <div class="carousel-item">
          <img class="rounded img-fluid mx-auto d-block" src="http://lorempixel.com/output/food-q-c-640-480-2.jpg" alt="food 2">
        </div>
        <div class="carousel-item">
          <img class="rounded img-fluid mx-auto d-block" src="http://lorempixel.com/output/food-q-c-640-480-3.jpg" alt="food 3">
        </div>
      </div>
      
      <!-- Left and right controls -->
      <a class="carousel-control-prev text-warning" href="#food" data-slide="prev"> <span class="carousel-control-prev-icon"></span></a>
      <a class="carousel-control-next text-warning" href="#food" data-slide="next"> <span class="carousel-control-next-icon"></span></a>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
