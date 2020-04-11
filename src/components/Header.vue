<template>
  <div v-theme="'dark'">
    <nav>
      <ul>
        <li><router-link to="/" exact>HOME</router-link></li>
        <li><router-link to="/list" exact>LIST</router-link></li>
        <li><router-link to="/add" exact>ADD</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
ul {
  list-style-type: none;
  text-align: center;
  margin: 0;
  padding: 0 20px;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #fff;
  text-decoration: none;
  padding: 6px 8px;
  border-radius: 10px;
}
nav {
  background: #444;
  padding: 14px 0;
  margin-bottom: 40px;
}
.router-link-active {
  background: #eee;
  color: #444;
}
.router-link-inactive {
  background: #6b6b6b;
  color: #fff;
}
</style>
