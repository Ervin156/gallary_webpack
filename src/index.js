import Gallery from './Gallary';

const gallery = new Gallery({
  limit: 10,
  page: 1,
  gallery_id: "#gallery",
  nav_id: "#navigation"
});
gallery.renderList();
