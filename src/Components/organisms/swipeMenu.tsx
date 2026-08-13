'use client';
import Image from 'next/image';
import Link from 'next/link';
import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode} from 'swiper/modules';
import { swipeMenuData } from '@/utils/constantsImg';
import { addSlug } from '@/utils/slug';

import 'swiper/css';
import 'swiper/css/free-mode';
import { usePathname } from 'next/navigation';

const menuDataSlug = swipeMenuData.map((item) => ({
        ...item,
        slug: addSlug(item.label),
}))

export default function SwipeMenu () {

    const pathname = usePathname();

    console.log('🪖 menuDataSlug ', menuDataSlug)
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
                {menuDataSlug.map((item) => {
                    const href = `/menu/${item.slug}`;

                    return(
                        <SwiperSlide key={item.id} className='!w-auto'>
                            <Link 
                            href={href} 
                            className={`flex flex-col items-center w-20 md:w-24 
                            group transition-transform duration-200 hover:scale-110`}>
                                <div className='relative h-12 w-12 pointer-events-none'>
                                    <Image 
                                    src={item.src}
                                    alt={item.label}
                                    fill
                                    sizes='60px'
                                    className='object-contain'
                                    draggable={false}
                                    />
                                </div>
                            <span className='text-[12px] text-black text-center leading-tight pointer-events-none'>
                                {item.label}
                            </span>
                            </Link>
                        </SwiperSlide>
                    );
                })}

            </Swiper>
        </nav>
        </>
    )
}