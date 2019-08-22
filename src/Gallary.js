import Request from "./Request";
import Img from "./Img";

class Gallery {
  constructor({ limit, page, gallery_id, nav_id }) {
    this.limit = limit;
    this.page = page;
    // this.gallery_id = gallery_id;
    // this.nav_id = nav_id;
    this.photos = [];

    this.container = document.querySelector(gallery_id);

    this.btnLeft = document.querySelector(`${nav_id} #prev`);
    this.btnRight = document.querySelector(`${nav_id} #next`);
    this.input = document.querySelector(`${nav_id} input`);
    this.select = document.querySelector(`${nav_id} select`);

    this.renderList = this.renderList.bind(this);
    this.onlikeHandler = this.onlikeHandler.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  build() {
    this.input.value = this.page;
    this.select.value = this.limit;
    this.btnLeft.onclick = this.changePage;
  }

  onlikeHandler(photo, like) {
    Request.likePhotos(photo.id);
  }
  changePage(e) {
    const IS_LEFT = e.target === this.btnLeft;
    const IS_RIGHT = e.target === this.btnRight;
    const IS_SELECT = e.target === this.select;
    const IS_INPUT = e.target === this.input;

    if (IS_LEFT && this.page > 1) {
      this.page--;
    }
    if (IS_RIGHT) {
      this.page++;
    }
    if (IS_SELECT) {
      this.limit = this.select.value;
    }
    if (IS_INPUT) {
      this.limit = this.input.value;
    }
    !IS_INPUT && (this.input.value = this.page);

    this.renderList();
  }
  renderList() {
    Request.listPhotos(this.limit, this.page).then(data => {
      this.photos = data.map(photo => {
        const img = new Img({ photo, onlikeHandler: this.onlikeHandler });
        return img.build();
      });

      this.container.append(...this.photos);
    });
  }
}

export default Gallery;


