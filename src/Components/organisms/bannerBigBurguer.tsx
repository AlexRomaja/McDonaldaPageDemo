import Image from 'next/image';
import { bannerBuger } from '@/utils/constantsImg';

export default function BannerBigBurger () {

    return(
        <>
        <div className='bg-white w-full grid grid-cols-1 md:grid-cols-2 items-center gap-6 '>
            <div className='flex flex-col justify-center items-center md:items-start 
            text-center md:text-left gap-3 pl-0: md:pl-25'>
                <h2 className='text-[32px] md:text-[45px] font-bold leading-9'>
                    McDonald's
                </h2>
                <p className='text-[14px] md:text-[18px] mt-2'>
                    Más que una hamburguesería
                </p>
            </div>   
            <div className='relative w-full h-[250px] md:h-[450px]'>
                <Image
                src={`${bannerBuger}`}
                alt='bannerBurger'
                fill
                className='object-contain'
                priority
            />
            </div>
                     
        </div>
        </>
    )

}