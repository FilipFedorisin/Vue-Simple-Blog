import Vue from 'vue';
import VueRouter from 'vue-router';

import ShowBlogs from '../views/ShowBlogs.vue';
import ListBlogs from '../views/ListBlogs.vue';
import AddBlog from '../views/AddBlog.vue';
import SingleBlog from '../views/SingleBlog.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', component: ShowBlogs },
    { path: '/list', component: ListBlogs },
    { path: '/add', component: AddBlog },
    { path: '/blog/:id', component: SingleBlog },
  ],
  mode: 'history',
});

export default router;
