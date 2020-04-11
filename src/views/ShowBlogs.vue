<template>
  <div id="show-blogs">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="search blogs" />
    <div v-for="blog in filteredBlogs" class="single-blog" v-bind:key="blog">
      <router-link v-bind:to="'/blog/' + blog.id">
        <h2>{{ blog.title | toUppercase }}</h2>
      </router-link>
      <article>{{ blog.content | snippet }}</article>
    </div>
  </div>
</template>

<script>
import search from '../mixins/search';

export default {
  data() {
    return {
      blogs: [],
      search: '',
    };
  },
  methods: {
    loadBlogPosts: function() {
      // prettier-ignore
      this.$http
        .get('https://blog-database-52f50.firebaseio.com/posts.json')
        .then(function(data) {
          return data.json();
        })
        .then(function(data){
          var blogsArray = [];
          for (let key in data){
            data[key].id = key;
            blogsArray.push(data[key]);
          }
          this.blogs = blogsArray;
        })
    },
  },
  created() {
    this.loadBlogPosts();
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    },
  },
  directives: {
    rainbow: {
      bind(el) {
        // prettier-ignore
        el.style.color ='#' + Math.random().toString().slice(2, 8);
      },
    },
  },
  mixins: [search],
};
</script>

<style scoped>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
input {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
h1 {
  text-align: center;
}
</style>
