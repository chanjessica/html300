

<template>
   <div>
      <h2 class="mt-4 text-center">{{ message }}</h2>
      <!-- this page use BootstrapVue Grid system  -->
      <b-container class="bv-example-row">
      <b-row>
           <!-- 1st column -->
         <b-col md  id="e1" > 
            <h4>Beef</h4>
            <div class="entrees" id="e3">
               <div v-for = "food in rice" :key="food.id">
                 {{ food.item }} - ${{ food.price}}
               </div>
            </div>
         </b-col>
            <!-- 2rd column -->
         <b-col md  id="e3" > 
            <h4>Beef</h4>
            <div class="entrees" id="e4">
               <div v-for = "food in beef" :key="food.id">
                 {{ food.item }} - ${{ food.price}}
               </div>
            </div>
         </b-col>
            <!-- 3rd column -->
         <b-col md id="e1">
            <h4>Checken</h4>
               <div v-for = "food in chicken" :key="food.id">
                 {{ food.item }} - ${{ food.price}}
               </div>
         </b-col>
           <!-- 4th column -->
         <b-col md  id="e3" > 
            <h4>pork</h4>
            <div class="entrees" id="e2">
               <div v-for = "food in pork" :key="food.id">
                 {{ food.item }} - ${{ food.price}}
               </div>
            </div>
         </b-col>
      </b-row>
      </b-container>

      <footer class="my-5">
         <!-- ######  COLLAPSE  #######-->
         <h4 class="mt-5 text-center"> collapse</h4>
         <div class="container justify-content-center">
            <button class="btn btn-success d-block mb-4" data-toggle="collapse" data-target="#pay">
                Payment Method
            </button>
            <div class="collapse mb-5" id="pay">
               Cash Only
            </div>
         </div>
      </footer>
   </div>
</template>

<script>
   export default {
      data() {
         return {
         message: " BootstrapVue Grid",
         rice : [
                  {id:0, item: "Stream Rice", price: "1.95"},
                  {id:1, item: "Chickeen Fried Rice", price: "6.77"},
                  {id:2, item: "Beef Fired Rice", price: "9.99"},
                  {id:3, item: "Pork Fired Rice", price: "8.99"}
                ],
         beef : [
                  {id:0, item: "Beef Noodle Soup", price: "9.95"},
                  {id:1, item: "Hot and Sour Soup", price: "6.77"},
                  {id:2, item: "Pot Potsticker", price: "8.99"}
                ],
         pork : [
                  {id:0, item: "Sweet and Sour Pork", price: "11.95"},
                  {id:1, item: "BBQ Pork", price: "8.77"},
                  {id:2, item: "Pot Potsticker", price: "8.99"}
                ],
         chicken : [ 
                  {id:0, item: "General Tso Chicken", price: "12.95"},
                  {id:1, item: "Hot and Sour Soup", price: "6.77"},
                  {id:2, item: "Pot Potsticker", price: "8.99"}
                  ]
         };
      }
   }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   #e1 {
      background: gold;
   }
   #e2 {
      background: plum;
   }
   #e3 {
      background: lightblue;
   }
   #e4{
      background: yellow; 
   }
</style>
