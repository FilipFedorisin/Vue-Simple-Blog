<template>
  <div id="add-blog">
    <!-- Bacic Form -->
    <h1>Pridať Blog</h1>
    <form v-if="!submitted">
      <label>Titulok:</label>
      <div id="pojeb">
        <input type="text" v-model.lazy="blog.title" required />
      </div>
      <label>Obsah:</label>
      <div id="pojeb">
        <textarea type="text" v-model.lazy="blog.content"></textarea>
      </div>
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
      <h1>{{ blog.title }}</h1>
      <p>{{ blog.content }}</p>
      <hr />
      <p><b>Autor: </b>{{ blog.author }}</p>
      <p><b>Štítky:</b></p>
      <ul>
        <li v-for="category in blog.categories" v-bind:key="category">{{ category }}</li>
      </ul>
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
input {
  border-radius: 4px;
  box-sizing: border-box;
}
textarea {
  border-radius: 4px;
  box-sizing: border-box;
  resize: none;
  height: 200px;
}
#pojeb {
  margin: 10px;
}
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
  padding-left: 10px;
}
input[type='text'],
textarea {
  display: block;
  width: 100%;
  padding: 3px;
}
#preview {
  border-radius: 10px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  padding: 15px;
  margin: 15px 10px;
  box-sizing: border-box;
  background: #eee;
}
#preview p {
  width: 100%;
  overflow: hidden;
  padding: 0;
  margin: 5px 0;
}
h1 {
  padding: 0;
  margin: 0;
  padding-bottom: 5px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  text-align: center;
}
h3 {
  margin: auto;
  margin-top: 10px;
  margin-left: 10px;
}
#checkboxes input {
  display: inline-block;
  margin: 0px;
}
#checkboxes label {
  display: inline-block;
  margin: 0px;
  padding-right: 5px;
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
select {
  margin-left: 10px;
  margin-right: 30px;
}
button {
  float: right;
  margin-right: 10px;
}
</style>
