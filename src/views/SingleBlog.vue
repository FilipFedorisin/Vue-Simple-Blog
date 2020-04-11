<template>
  <div id="single-blog">
    <h1>{{ blog.title }}</h1>
    <article>{{ blog.content }}</article>
    <p>Author: {{ blog.author }}</p>
    <ul>
      <li v-for="category in blog.categories" v-bind:key="category">{{ category }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {},
    };
  },
  created() {
    // prettier-ignore
    this.$http
      .get('https://blog-database-52f50.firebaseio.com/posts/' + this.id + '.json')
      .then(function(data){
        return data.json();
      })
      .then(function(data){
        this.blog = data;
      })
  },
};
</script>

<style scoped>
#single-blog {
  max-width: 960px;
  margin: 0 auto;
}
</style>
