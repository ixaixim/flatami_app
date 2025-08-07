import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface ImageCarouselProps {
  images: string[];
  title: string;
}

export function ImageCarousel({ images, title }: ImageCarouselProps) {
  return (
    <Swiper 
      modules={[Pagination]} 
      pagination={{ clickable: true }} 
      spaceBetween={8} 
      slidesPerView={1}
      className="rounded-lg mb-4"
    >
      {images.map((src, idx) => (
        <SwiperSlide key={idx}>
          <img 
            src={src} 
            alt={`${title} image ${idx+1}`} 
            className="w-full h-64 object-cover rounded-lg" 
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
