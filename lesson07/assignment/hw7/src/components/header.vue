<template>
    <nav class="bg-warning navbar navbar-expand-sm">
        <div class="container">	
            <div class="collapse navbar-collapse" id="item-nav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item"><router-link to="/hello">Hello </router-link>  </li>
                    <li class="nav-item"><router-link to="/HW7">HW7 </router-link>  </li>
                    <li class="nav-item"><router-link to="/">Home </router-link>  </li>
                    <li class="nav-item"><router-link to="/menu"> Menu</router-link></li>
                    <li class="nav-item"><router-link to="/contact"> Contact</router-link></li>
                    <li class="nav-item"><router-link to="/blog"> Blog</router-link></li>
                </ul>
            </div>  <!-- end of "navbar-collapse"-->    
        </div>   <!-- end of "containter" -->
    </nav>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    body{
        margin: 0;
    }
    li {
        width: 100px;
        height: 50x;
        padding: 5px;
    }
</style>
