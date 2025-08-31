import { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// TODO: move to main.tsx these imports globally

interface ImageCarouselProps {
  images: string[];
  title: string;
}

export function ImageCarousel({ images, title }: ImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      spaceBetween={8}
      slidesPerView={1}
      onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      className="rounded-xl"
    >
      {images.map((src, i) => (
        <SwiperSlide key={i}>
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <img
              src={src}
              alt={`${title} image ${i + 1}`}
              // Performance + UX: current & next slide = eager; others = lazy
              loading={i <= activeIndex + 1 ? 'eager' : 'lazy'}
              fetchPriority={i === activeIndex ? 'high' : 'auto'}
              decoding="async"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
// ImageCarousel: Swipeable image gallery for listings and posts.
