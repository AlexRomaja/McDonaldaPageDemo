import Image from 'next/image';
import {cardsDataHome} from '@/utils/constantsImg';

export default function CardsHome () {
    return(
        <>
        <div className='bg-white'>
            <section className='w-full max-w-7xl mx-auto px-4 py-8'>
            <div className='flex flex-col md:flex-row md:flex-wrap lg:flex-row 
            gap-6 md:gap-2 items-center justify-center '>
                {cardsDataHome.map((cards) => (
                    <div key={cards.id}
                    className='relative w-full md:flex-1 
                    max-w-[360px] lg:max-w-[424px]
                    h-[504px] lg:h-[600px]  overflow-hidden group'>
                    <Image 
                    src={cards.src}
                    alt={cards.label}
                    fill
                    sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                    className='object-contain'
                    />
                    <div className='relative z-20 h-full p-6 flex flex-col justify-end text-white'>
                        <p className='text-lg font-bold text-black'>
                            {cards.text}
                        </p>
                    </div>
                    </div>
                ))}
            </div>
        </section>
        </div>
        </>
    )
} 