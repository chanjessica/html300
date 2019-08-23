<template>
  <div class="container">
    <h1> pages/index </h1>

    <nuxt-link :to="'/img/'+ 1" class="img-preview">
      <article>
        <div class="img-thumbnail" style="background-image:url('http://lorempixel.com/output/food-q-c-640-480-3.jpg')">
        </div>
        <div class="img-content">
          <h1>img titie1</h1><p>preview text1</p>
        </div>
      </article>
    </nuxt-link>

    <nuxt-link :to="'/img/'+ 2" class="img-preview">
      <article>
        <div class="img-thumbnail" style="background-image:url('http://lorempixel.com/output/food-q-c-640-480-3.jpg')">
        </div>
        <div class="img-content">
          <h1>img titie2</h1><p>preview text2</p>
        </div>
      </article>
    </nuxt-link>
  </div>
</template>

<script>
</script>

<style>
</style>
