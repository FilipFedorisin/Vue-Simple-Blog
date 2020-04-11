<template>
  <div id="fill">
    <Header></Header>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header';

export default {
  components: {
    Header,
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
footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
