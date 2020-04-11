<template>
  <div id="add-blog">
    <!-- Bacic Form -->
    <h2>Tvorba nového blogu...</h2>
    <form v-if="!submitted">
      <label>Titulok:</label>
      <input type="text" v-model.lazy="blog.title" required />
      <label>Obsah:</label>
      <textarea v-model.lazy="blog.content"></textarea>
      <div id="checkboxes">
        <label>Móda</label>
        <input type="checkbox" value="Móda" v-model="blog.categories" />
        <label>Krása</label>
        <input type="checkbox" value="Krása" v-model="blog.categories" />
        <label>Kozmetika</label>
        <input type="checkbox" value="Kozmetika" v-model="blog.categories" />
        <label>Život</label>
        <input type="checkbox" value="Život" v-model="blog.categories" />
      </div>
      <label>Autor:</label>
      <select v-model="blog.author">
        <option v-for="author in authors" v-bind:key="author">{{ author }}</option>
      </select>
      <button v-on:click.prevent="post">Publikovať</button>
    </form>

    <!-- Blog Preview -->
    <div v-if="submitted">
      <h3>Blog bol úspešne publikovaný...</h3>
    </div>
    <div id="preview">
      <h4>{{ blog.title }}</h4>
      <p>{{ blog.content }}</p>
      <p>Štítky</p>
      <ul>
        <li v-for="category in blog.categories" v-bind:key="category">{{ category }}</li>
      </ul>
      <p>Autor: {{ blog.author }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blog: {
        title: '',
        content: '',
        categories: [],
        author: '',
      },
      authors: ['Jožo Kapura', 'Medard Fajčák', 'Čmelák Fellak'],
      submitted: false,
    };
  },
  methods: {
    post: function() {
      // prettier-ignore
      this.$http
      .post('https://blog-database-52f50.firebaseio.com/posts.json', this.blog)
      .then(function(data) {
        console.log(data);
        this.submitted = true;
      });
    },
  },
};
</script>

<style>
#add-blog * {
  box-sizing: border-box;
}
#add-blog {
  margin: 20px auto;
  max-width: 500px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type='text'],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
#preview p {
  width: 100%;
  overflow: hidden;
}
h3 {
  margin-top: 10px;
}
#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}
#checkboxes label {
  display: inline-block;
}
</style>
