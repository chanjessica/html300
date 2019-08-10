<template>
  <div>
        <!-- ######  ACCORDION  #######-->
    <h2 class="mt-4 text-center" >accordion</h2>
    <div id="review">
      <div class="card">
          <div class="card-header">
              <h5>Customer Review 
              <a href="#one" data-parent="#review" data-toggle="collapse">
                  One
              </a>
              </h5>
          </div> <!-- end of "card-header" -->
          <div id="one" class="collapse show">
              <div class="card-body">
                  1-Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, nostrum voluptatum! Illo cum repellat, vero sequi, impedit repellendus ipsa incidunt distinctio nostrum in quaerat velit, assumenda quos earum quo quas!
              </div>  <!-- end of "card-body" -->   
          </div>
      </div> <!-- end of "card" one -->

      <div class="card">
        <div class="card-header">
          <h5>Customer Review 
            <a href="#two" data-parent="#review" data-toggle="collapse">  Two  </a>
          </h5>
        </div> <!-- end of "card-header" -->
			<div id="two" class="collapse">
				<div class="card-body">
					2-Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, nostrum voluptatum! Illo cum repellat, vero sequi, impedit repellendus ipsa incidunt distinctio nostrum in quaerat velit, assumenda quos earum quo quas!
					<p class="lead"><strong>bootstrap lead class</strong> - Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nesciunt hic, dolorem molestias beatae veritatis culpa aut quam natus libero. </p>
				</div>  <!-- end of "card-body" -->   
			</div>
		</div> <!-- end of "card" two -->

		<div class="card">
        <div class="card-header">
          <h5>Customer Review 
            <a href="#three" data-parent="#review" data-toggle="collapse">  Three  </a>
          </h5>
        </div> <!-- end of "card-header" -->
			<div id="three" class="collapse">
        <div class="card-body">
          3- Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, nostrum voluptatum! Illo cum repellat, vero sequi, impedit repellendus ipsa incidunt distinctio nostrum in quaerat velit, assumenda quos earum quo quas!
        </div>  <!-- end of "card-body" -->   
			</div>
		</div> <!-- end of "card" three -->
        
    <div class="card">
        <div class="card-header">
          <h5>Customer Review 
          <a href="#four" data-parent="#review" data-toggle="collapse">
            Four
          </a>
          </h5>
        </div> <!-- end of "card-header" -->
        <div id="four" class="collapse">
          <div class="card-body">
            4-Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, nostrum voluptatum! Illo cum repellat, vero sequi, impedit repellendus ipsa incidunt distinctio nostrum in quaerat velit, assumenda quos earum quo quas!
          </div>  <!-- end of "card-body" -->   
        </div>
      </div> <!-- end of "card" four -->
    </div> <!-- end of "#acd" -->

  </div>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#review {
    color: black;
    background: lightblue;
}
</style>
