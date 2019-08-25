<template>
  <div class="home-page">
    <section> class="into">
    <h1> pages/index </h1>
    </section>
  <section>
    <ImgPreview id="1"  url="http://lorempixel.com/output/food-q-c-640-480-1.jpg" title="Food itme 1"  price="7.98" />
    <ImgPreview id="2"  url="http://lorempixel.com/output/food-q-c-640-480-2.jpg" title="Food itme 2"  price="9.99" />
    <ImgPreview id="3"  url="http://lorempixel.com/output/food-q-c-640-480-3.jpg" title="Food itme 3"  price=" 8.99" />
  </section>
    <section>
    <p>/pages/home/index.vue</p>
  </section>
  </div>

</template>

<script>

  import ImgPreview from '@/components/img/img.vue'

  export default{
    components:{
      ImgPreview
    }

  }
</script>
