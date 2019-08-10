

<template>
   <div>
      <h2 class="mt-4 text-center">Bootstrap4 Grid system</h2>
      <!-- this page use Bootstrap4 Grid system  -->
      <!-- Columns start at 100% wide on mobile....and bump up to 25% wide on desktop -->
      <div class="container">
         <div class="row">
            <div class="menu-col1 bg-warning col-xl-3 col-lg-4 col-md-6 col-sm-12">
               <!-- 1st column -->
               <h4>Rice</h4>
               <div class="entrees" id="e1">
                  <div class="front">
                     Steam Pork Dumpling <br>
                  </div>
                  <div class="back">
                     $9.95
                  </div>
               </div>
               <div class="entrees" id="e2">
                  <div class="front">
                     Hot and Sour Soup
                  </div>
                  <div class="back">
                     $5.95
                  </div>
               </div>
               <div class="entrees" id="e3">
                  <div class="front">
                     Fried Pork Chop <br>
                  </div>
                  <div class="back">
                     $9.95
                  </div>
               </div>
               <div class="entrees" id="e4">
                  <div class="front">
                     Pot Potsticker
                  </div>
                  <div class="back">
                     $7.95
                  </div>
               </div>
               <div class="entrees" id="e5">
                  <div class="front">
                     General Tso Chicken <br>
                  </div>
                  <div class="back">
                     $9.95
                  </div>
               </div>
               <div class="entrees" id="e6">
                  <div class="front">
                     Beef Noodle Soup
                  </div>
                  <div class="back">
                     $10.95
                  </div>
               </div>
               <div class="entrees" id="e7">
                  <div class="front">
                     Rice Noodle with Meat Souce <br>
                  </div>
                  <div class="back">
                     $9.95
                  </div>
               </div>
               <div class="entrees" id="e8">
                  <div class="front">
                     Peking Duck
                  </div>
                  <div class="back">
                     $65.95
                  </div>
               </div>
            </div>
            <!-- end of 1st column -->
            <div class="menu-col2 bg-info col-xl-3 col-lg-4 col-md-6 col-sm-12">
               <!-- 2nd column -->
               <h4>Chicken</h4>
            </div>
            <!-- end of 2nd column -->
            <div class="menu-col3 bg-primary col-xl-3 col-lg-4 col-md-6 col-sm-12">
               <!-- 3rd column -->
               <h4>Beef</h4>
            </div>
            <!-- end of 3rd column -->
            <div class="menu-col4 bg-danger col-xl-3 col-lg-4 col-md-6 col-sm-12">
               <!-- 4th column -->
               <h4>Pork</h4>
               <div class="entrees" id="e1">
                  <div class="front">
                     Steam Pork Dumpling <br>
                  </div>
                  <div class="back">
                     $9.95
                  </div>
               </div>
               <div class="entrees" id="e2">
                  <div class="front">
                     Hot and Sour Soup
                  </div>
                  <div class="back">
                     $5.95
                  </div>
               </div>
               <div class="entrees" id="e3">
                  <div class="front">
                    Fried Pork Chop <br>
                  </div>
                  <div class="back">
                    $9.95
                  </div>
               </div>
               <div class="entrees" id="e4">
                  <div class="front">
                    Pot Potsticker
                  </div>
                  <div class="back">
                    $7.95
                  </div>
               </div>
               <div class="entrees" id="e5">
                  <div class="front">
                    General Tso Chicken <br>
                  </div>
                  <div class="back">
                    $9.95
                  </div>
               </div>
               <div class="entrees" id="e6">
                  <div class="front">
                    Beef Noodle Soup
                  </div>
                  <div class="back">
                    $10.95
                  </div>
               </div>
               <div class="entrees" id="e7">
                  <div class="front">
                    Rice Noodle with Meat Souce <br>
                  </div>
                  <div class="back">
                    $9.95
                  </div>
               </div>
               <div class="entrees" id="e8">
                  <div class="front">
                    Peking Duck
                  </div>
                  <div class="back">
                    $65.95
                  </div>
               </div>
            </div> <!-- end of 4th column -->
         </div>   <!-- enf of "row" -->
      </div>      <!-- enf of "container" -->

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
   
   }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   body {
   background: lightblue;
   }
</style>
