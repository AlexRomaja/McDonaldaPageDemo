import Image from 'next/image';


export default function Header () {

    return(
        <>
        <div className=" relative ring ring-red-500 h-[545px] w-full overflow-hidden">
            {/* Mobil */}
            <div className='relative h-full w-full block md:hidden z-1'>
                <Image
                src="https://mcd-landings-l-statics.appmcdonalds.com/uploads-live/mobile_Home_Background_2c12ef6e55.webp"
                alt="Header background"
                fill
                className="fill object-center"
                priority
                />
            </div>

             {/* Desk */}
            <div className='relative h-full w-full md:block hidden'>
                <Image
                src="https://mcd-landings-l-statics.appmcdonalds.com/uploads-live/home_Background_785a456a07.webp"
                alt="Header background"
                fill
                className="fill object-center"
                priority
                />
            </div>
        </div>
        </>
    )
}