<template>
  <div id="show-blogs">
    <h1>List Blog Titles</h1>
    <input type="text" v-model="search" placeholder="search blogs" />
    <div v-for="blog in filteredBlogs" class="single-blog" v-bind:key="blog">
      <h2 v-rainbow>{{ blog.title | toUppercase }}</h2>
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
        .get('http://jsonplaceholder.typicode.com/posts')
        .then(function(data) {
          this.blogs = data.body.slice(0, 10);
        });
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
