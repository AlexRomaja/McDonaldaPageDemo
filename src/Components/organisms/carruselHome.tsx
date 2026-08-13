'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import { promo1, promo2, promo3} from '@/utils/constantsImg';

import 'swiper/css';

export default function CarruselHome () {

    const carouselItems = [
        {id:1, alt:'im1', src:promo1},
        {id:2, alt:'im2', src:promo2},
        {id:3, alt:'im3', src:promo3},
    ]

    return(
        <>
        <section className='w-full bg-white select-none pb-5 '>
            <Swiper
            slidesPerView={1.2}
            centeredSlides={true}
            spaceBetween={16}
            breakpoints={{
                768: {
                    slidesPerView: 3,
                    centeredSlides: false,
                    spaceBetween: 24,
                    allowTouchMove: false,
                },
            }}
            className='w-full px-4 md:px-12'
            >
            {carouselItems.map((item) => (
                <SwiperSlide key={item.id}>
                    <div className='relative w-full aspect-[40/25]'>
                        <Image 
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes='(max-width: 768px) 85vw, 33vw'
                        className='object-contain'
                        draggable={false}
                        />
                    </div>
                </SwiperSlide>
            ))}
            </Swiper>
        </section>
        </>
    )
}