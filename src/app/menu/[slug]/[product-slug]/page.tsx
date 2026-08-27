import Image from "next/image";
import { notFound } from "next/navigation";
import { getProductbySlug } from "@/services/menu";
import SwipeMenu from "@/Components/organisms/swipeMenu";
import ProductAccordion from "@/Components/molecules/productAccodeon";

interface ProductPageProps {
    params: Promise<{
        slug: string;
        'product-slug': string;
    }>;
}

export default async function ProductPage ({params}: ProductPageProps) {
    const {slug,'product-slug': productSlug} = await params;

    /* Obtiene producto de la list */
    const product = await getProductbySlug(slug, productSlug);
    
    if(!product){
        notFound();
    }

    return (
        <main className="bg-white w-full">
            <SwipeMenu />
            {/* Imagen y texto */}
            <div className="flex flex-col md:flex-row items-center mx-20 md:mx-50 ">
                
                <div className="w-full md:w-1/2 flex items-center justify-center">
                    {/* Imagen izq */}
                    <div className="relative w-[200px] h-[180px] md:w-[200px] md:h-[300px]">
                        <Image
                        src={product.src}
                        alt={product.label}
                        fill
                        priority
                        sizes="(max-width: 440px) 50vw, (max-width: 1024px) 25vw, 20vw)"
                        className="object-contain"
                        />
                    </div>
                </div>

                <div className="w-full md:w-1/2 text-center md:text-start">
                    {/* Texto derecha */}
                    <h1 className="text-[20px] md:text-[40px] font-bold text-black">
                        {product.text}
                    </h1>
                    <p className="text-[12px] md:text-[18px] pt-1 md:pt-5 text-gray-500">
                        {product.body}
                    </p>
                </div>
            </div>

            {/* Seccion de dropmenus */}
            <div className="items-center mx-5 md:mx-60 mt-5 md:mt-0">
                <ProductAccordion informacion={product.informacion}/>
            </div>
        </main>
    )
}