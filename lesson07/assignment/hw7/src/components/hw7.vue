<template>
  <div id="app">
    <h2> examples </h2> <br>
    <h4> {{ task1 }}</h4>
    <input type="text" v-on:input="changeTitle" value="type something here ">   <br>
    <br>
    <h4> {{ task3 }}</h4>
    <h5><a v-bind:href="link" target="_blank"> Bootstrap Vue Site</a></h5>
    <br>
    <h4> {{ task2 }}</h4>
    <button v-on:click ="increase">Click Me </button>
    <p> {{counter}}</P>
    <br>
    <h4> {{ task4 }} </h4>
    <input type="text" v-model="name">
    <p> {{ name }}</p>  <br>

    <h4> {{ task5 }} </h4>
    <div class="demo" v-on:click="attachRed = !attachRed" v-bind:class="{ red:attachRed}">   <br>
    <p v-if="show">Can you see me</p>
     <button v-on:click="show = !show">Hide and See</button>
    </div>

    <h4> {{ task6 }} </h4>
    <h2> {{ imgList[0].img }} </h2>       
    <b-img src="http://lorempixel.com/output/food-q-c-640-480-1.jpg" fluid alt="food1"></b-img>
      
    <b-img src="imgList[0].url"  alt= " imgList[0].img "></b-img>
    <b-img v-for="image in imgList" :key="image.id" img-src="image.url" fluid alt=" image.img">
    </b-img>  
        
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return{
        task1: 'my image array is not working :(',
        task2: 'counting number of clicks on the buttom',
        task3: 'need help -- see Bootstrap-Vue documenation',
        task4: 'v-modal',
        task5: 'v-if',
        task6: 'Image array',
        message: "Home Page",
        counter: 0,
        attachRed: false,
        show: true,
        name: 'Aaron',
        link: 'https://bootstrap-vue.js.org/docs/components/alert',
        imgList: [  {id:0, img: 'food 1', url: 'http://lorempixel.com/output/food-q-c-640-480-1.jpg'},
                    {id:1, img: 'food 2', url: 'http://lorempixel.com/output/food-q-c-640-480-2.jpg'},
                    {id:2, img: 'food 3', url: 'http://lorempixel.com/output/food-q-c-640-480-3.jpg'}
                ]
      };
    },
    methods:{
      changeTitle: function(event){
        this.task1 = event.target.value;
      },
        increase: function(){ this.counter++; } 
    }
}
</script>

<style>
</style>
