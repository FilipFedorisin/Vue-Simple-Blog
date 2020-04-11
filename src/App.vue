<template>
  <div>
    <Header></Header>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  components: {
    Header,
    Footer,
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
