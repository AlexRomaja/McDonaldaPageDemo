'use client';
import Image from 'next/image';
import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode} from 'swiper/modules';
import { swipeMenuData } from '@/utils/constantsImg';

import 'swiper/css';
import 'swiper/css/free-mode';

export default function SwipeMenu () {

    return(
        <>
        <nav className='w-full bg-white py-4 border border-gray-100 select-none xsm:pl-4 md:pl-0 '>
            <Swiper
            slidesPerView='auto'
            spaceBetween={24}
            freeMode={true}
            centerInsufficientSlides={true}
            modules={[FreeMode]}
            className='w-full px-6'>
                {swipeMenuData.map((item) => (
                    <SwiperSlide key={item.id} className='!w-auto'>
                        <button className='flex flex-col items-center w-20 md:w-24 group transition-transform duration-200 hover:scale-110'>
                            <div className='relative h-12 w-12 pointer-event-none'>
                                <Image 
                                src={item.src}
                                alt={item.label}
                                fill
                                className='object-contain'
                                draggable={false}
                                />
                            </div>
                            <span className='text-[12px] text-black text-center leading-tight pointer-events-none'>
                                {item.label}
                            </span>
                        </button>
                    </SwiperSlide>
                ))}

            </Swiper>
        </nav>
        </>
    )
}