import Image, { getImageProps } from 'next/image';
import { bannerBuger, bannerBugerMobil } from '@/utils/constantsImg';

export default function BannerBigBurger () {

    const common = {
        alt: 'bannerBurguer', 
        priority: true, 
        fill: true,
        sizes: '(max-width: 768px) 100vw, 50vw'
    };
    const { props: {srcSet: deskSrc}, } = getImageProps({...common, src:bannerBuger});
    const { props: {srcSet: mobilSrc, ...rest}, } = getImageProps({...common, src:bannerBugerMobil});

    return(
        <>
        <div className='bg-white w-full grid grid-cols-1 md:grid-cols-2 items-center gap-6'>
            {/* Text */}
            <div className='order-2 md:order-1 flex flex-col justify-center items-center 
            md:items-start text-center md:text-left gap-3 pl-0: md:pl-25'>
                <h2 className='text-[32px] md:text-[45px] font-bold leading-9'>
                    McDonald's
                </h2>
                <p className='text-[14px] md:text-[18px] mt-0 md:mt-2 text-black'>
                    Más que una hamburguesería
                </p>
            </div>  

            {/* Image */} 
            <div className='order-1 md:order-2 relative w-full h-[450px] md:h-[250px]'>
                <picture className='w-full h-full block'>
                    <source media="(min-width: 768px)" srcSet={deskSrc} />
                    <source media="(max-width: 767px)" srcSet={mobilSrc} />
                    <img {...rest} className='w-full h-full object-contain object-right'/>
                </picture>
            </div>
                     
        </div>
        </>
    )

}