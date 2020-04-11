import ShowBlogs from './views/ShowBlogs.vue';
import ListBlogs from './views/ListBlogs.vue';
import AddBlog from './views/AddBlog.vue';

export default [
  { path: '/', component: ShowBlogs },
  { path: '/list', component: ListBlogs },
  { path: '/add', component: AddBlog },
];
