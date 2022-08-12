import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

export default ({photos, name}) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
      slidesPerView={1}
      navigation
      effect="fade"
    >
      <SwiperSlide><img src={photos[0]} alt={name} /></SwiperSlide>
      <SwiperSlide><img src={photos[1]} alt={name} /></SwiperSlide>
      <SwiperSlide><img src={photos[2]} alt={name} /></SwiperSlide>
    </Swiper>
  );
};
