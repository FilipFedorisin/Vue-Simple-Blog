<template>
  <div>
    <head>
      <titl>Blog</titl>
    </head>
    <addBlog></addBlog>
  </div>
</template>

<script>
import addBlog from './components/addBlog.vue';
export default {
  components: {
    addBlog,
  },
  data() {
    return {};
  },
  created() {
    document.title = 'Blog';
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: 'Nunito SemiBold';
}
</style>
