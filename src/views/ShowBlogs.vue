<template>
  <div id="show-blogs">
    <h1>Všetky Blogy</h1>
    <div id="pojeb">
      <input type="text" v-model="search" placeholder="Hľadať..." />
    </div>
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
body {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
#show-blogs {
  max-width: 800px;
  margin: auto;
  padding: 0px;
}
.single-blog {
  border-radius: 10px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  padding: 15px;
  margin: 15px 10px;
  box-sizing: border-box;
  background: #eee;
}
input {
  border-radius: 4px;
  box-sizing: border-box;
}
#pojeb {
  margin: 10px;
}
h1 {
  padding: 0;
  margin: 0;
  padding-bottom: 5px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  text-align: center;
}
a {
  font-family: sans-serif;
  color: black;
  text-decoration: none;
}
</style>
