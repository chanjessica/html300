<template>
    <!-- pass data using array object and usgin v-for to loop through data -->
    <section v-if="posts">
        <imgList v-for="post in posts"  v-bind:key="post.id"  v-bind:post="post">
        </imgList>
    </section>
</template>

<script>
  import imgList from '@/components/img/imgList.vue';

  export default{
    components:{
      imgList
    },
    data(){
      return{
        posts : [ {id:1, food: "General Tso Chicken", price: 12.9, imgSrc: "http://lorempixel.com/output/food-q-c-640-480-1.jpg"},
                  {id:2, food: "BBQ Pork", price: 10.7, imgSrc: "http://lorempixel.com/output/food-q-c-640-480-2.jpg"},
                  {id:3, food: "Pork Fried Rice", price: 9.7, imgSrc: "http://lorempixel.com/output/food-q-c-640-480-3.jpg"}
        ]
      }
    }
  }
</script>

<style>
</style>
