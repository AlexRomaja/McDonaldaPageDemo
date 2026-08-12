'use client';

import Image from "next/image";
import {Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import {carruselImgHome} from '@/utils/constantsImg'; 

import 'swiper/css';
import 'swiper/css/pagination';

export default function CarruselWMovement () {
    return(
        <>
        <section className="w-full h-[150px] sm:h-[180px] md:h-[300px] max-h-[300px] relative overflow-hidden">
            <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{
                delay:1000,
                disableOnInteraction: false,
            }}
            loop={true}
            pagination={{
                clickable: true,
            }}
            className="w-full h-full">
                {carruselImgHome.map((item, index) =>(
                    <SwiperSlide key={item.id} 
                    className="relative w-full h-full">
                        <Image
                        src={item.src}
                        alt={item.label}
                        fill
                        sizes="100vw"
                        priority={index === 0}
                        className="object-cover select-none"
                        draggable={false}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
        </>
    )
};