import Image from 'next/image';
import { Button } from '@heroui/react';
import { burgerMobil, burgerDesk } from '@/utils/constantsImg';


export default function Header () {

    const buttonClass = 'h-[40px] w-[150px] bg-white text-black font-bold rounded-lg transition-transform duration-200 hover:scale-105 active:scale-95 gap-3';

    return(
        <>
        <div className=" relative xsm:h-[320px] md:h-[545px] w-full overflow-hidden transition-all duration-500 ease-in-out">
            {/* Shader */}
            <div className="absolute inset-0 w-full bg-black/50 opacity-100 md:opacity-0 transition-opacity duration-70 pointer-events-none z-10" />
            <div className="absolute inset-y-0 left-0 w-[95%] bg-gradient-to-r from-black/70 via-black/60 to-transparent pointer-events-none z-10
            opacity-0 md:opacity-100 transition-opacity duration-700" />

            {/* Mobil */}
            <div className='aabsolute inset-0 z-0 opacity-100 md:opacity-0 transition-opacity duration-700 ease-in-out'>
                <Image
                src={`${burgerMobil}`}
                alt="Header background"
                fill
                className="object-cover object-center"
                priority
                />
            </div>

             {/* Desk */}
            <div className='absolute inset-0 z-0 opacity-0 md:opacity-100 transition-opacity duration-700 ease-in-out'>
                <Image
                src={`${burgerDesk}`}
                alt="Header background"
                fill
                className="fill object-center"
                priority
                />
            </div>

            {/* Text Buttons */}
            <div className='relative h-full w-full pl-0 md:pl-20 z-20 flex flex-col justify-center
             items-center md:items-start'>
                <h1 className='text-white font-bold text-[25px] md:text-[40px]'>
                    Cómo quieres hoy tu pedido
                </h1>

                <div className='flex flex-row gap-2 pt-3'>
                    <Button className={`${buttonClass}`} >
                        <p>🏠</p>
                        <p>Pickup</p>
                    </Button>
                    <Button className={`${buttonClass}`}>
                        <p>🛩️</p>
                        <p>McDelivery</p>  
                    </Button>
                </div>
                
            </div>
        </div>
        </>
    )
}