<template>
  <div id="single-blog">
    <h1>{{ blog.title }}</h1>
    <article>{{ blog.content }}</article>
    <hr />
    <p>Autor: {{ blog.author }}</p>
    <p>Tagy:</p>
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
  border-radius: 10px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  padding: 15px;
  margin: auto;
  margin-left: 10px;
  margin-right: 10px;
  box-sizing: border-box;
  background: #eee;
  max-width: 800px;
}
p {
  padding: 0;
  margin: 5px 0;
}
li {
  display: inline-block;
  margin: 0;
  padding-right: 5px;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>
