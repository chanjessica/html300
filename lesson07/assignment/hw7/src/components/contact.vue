<template>
  <div>

    <!-- #######  modal  ####### -->
    <div class="container">
        <!-- Button to Open the Modal -->
        <button class="btn btn-lg btn-outline-danger m-5 px-5" data-toggle="modal" data-target="#login">
            Log In
        </button>
        <!-- The Modal -->
        <div class="modal" id="login">
            <div class="modal-dialog">
               <div class="modal-content">
                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h4 class="modal-title">Log In to Your Account</h4>
                        <button class="close" data-dismiss="modal">&times;</button>
                    </div>
                    
                    <!-- Modal body -->
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label class="mt-3">Name</label>
                                <input type="text" class="form-control form-control-lg" placeholder="user name">
                                <label class="mt-3">Email</label>
                                <input type="email" class="form-control form-control-lg" placeholder="xyz@yahoo.com">
                                <label class="mt-3">Password</label>
                                <input type="password" class="form-control form-control-lg" placeholder="*******">
                                <input type="submit" value="Submit" class="mt-3 btn btn-success">
                            </div>
                        </form>
                    </div>
                    
                    <!-- Modal footer -->
                    <div class="modal-footer">
                        <button  class="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>
                </div>  <!-- end of "modal-content" -->    
            </div> <!-- end of "modal-dialog" -->
        </div>  <!-- end of LOGIN "model" -->
     </div><!-- end of "container" --> 


   <!-- #######  tooltip   ####### -->
    <h2 class="mt-4 text-center" >tooltip </h2>

    <div class="container  mx-auto">
        <button class="btn btn-lg btn-info" data-toggle="tooltip" data-placement="left" title="www.HappyFood.com">
            Order Online
        </button>
        <button class="btn btn-lg btn-primary" data-toggle="tooltip" data-placement="bottom" data-html="true" title="<em>(206)123-4567</em>">
            Order by Phone
         </button>    
         <button class="btn btn-lg btn-warning" data-toggle="tooltip" data-placement="top" title="Seattle Pike Market">
            Dine In
         </button>
         <button class="btn btn-lg btn-danger" data-toggle="tooltip" data-placement="right" title="www.onYourOwnFeet.com">
             Delivery
        </button>
    </div>  <!-- end of tooltip "container" -->
 
    <!-- #######  popover  ####### -->
    <h2 class="mt-4 text-center justify-content-center" >popovers </h2>
    <button id="pop" class="btn btn-danger" 
            data-trigger="focus" 
            data-container="body" 
            data-toggle="popover" 
            data-placement="bottom" 
            data-content="data-placement is not working on TOOLTIP, data-html=true is also not working">    
        display on bottom
    </button>
 
    <!-- #######  copy right  #####-->
    <footer>
        <div class="container bg-dark">
            <div class="row">
                <div class="col text-center py-4">
                    <p>Copyright &copy; <span id="year"></span></p>
                </div>                
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
    background: pink;
}
</style>
