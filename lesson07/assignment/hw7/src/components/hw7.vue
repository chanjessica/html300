<template>
  <div id="app">
    <h2> testing </h2>       
        <ul>
            <li v-for="i in imgListt" v-bind:key='i.id'> picture: {{ i.img }}</li>
        </ul>
  </div>
</template>

<script>
  export default {
    name: "contact",
    data() {
      return{
        message: "Home Page",
        imgList: [  {id:0, img: "food 1", imgSrc: '"http://lorempixel.com/output/food-q-c-640-480-1.jpg"'},
                    {id:1, img: "food 2", imgSrc: '"http://lorempixel.com/output/food-q-c-640-480-2.jpg"'},
                    {id:3, img: "food 3", imgSrc: '"http://lorempixel.com/output/food-q-c-640-480-3.jpg"'}
                ]
      };
    }
}
</script>

<style>
</style>
