import {Button, Link} from '@heroui/react';

export default function BannerAmarilloHome () {
    return(
        <>
        <section className="bg-[#F5B027] relative hidden md:flex flex-row h-[130px] max-h-[200px] w-full
        items-center justify-between px-8">
            <div className="flex flex-col gap-2 text-black text-[22px]">
                <span>
                    Registrate y disfruta de la experiencia completa:
                </span>
                <span className=" font-bold">
                    Ofertas, descuentos, compras y muchas, muchas sorpresas
                </span>
            </div>
            <div className='pr-6'>
                <a href='https://accounts.mcdonalds.com.mx/'
                rel="noopener noreferrer"
                className='inline-block'>
                <Button
                className='text-black bg-white border border-black h-[48px] w-[200px] rounded-md'>
                    Ingresa ya!
                </Button>
                </a>
            </div>
        </section>
        </>
    )
}