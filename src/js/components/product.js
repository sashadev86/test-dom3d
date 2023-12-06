import Swiper from "swiper";
import { Pagination, Autoplay } from "swiper/modules";

const swiper = new Swiper(".swiper", {
  modules: [Pagination, Autoplay],
  loop: true,
  autoplay: {
    delay: 3000,
  },
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
