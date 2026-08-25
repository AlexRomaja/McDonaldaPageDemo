import Image from "next/image";
import { menuData } from "@/utils/constantsImg";
import { addSlug } from "@/utils/slug";
import { notFound } from "next/navigation";

interface ProductPageProps {
    params: Promise<{
        slug: string;
        'product-slug': string;
    }>;
}

export default async function ProductPage ({params}: ProductPageProps) {
    const {slug,'product-slug': productSlug} = await params;
    
    /* Obtiene producto de la list */
    const categoryProducts = menuData[slug as keyof typeof menuData];

    if(!categoryProducts){
        notFound();
    }

    /* Busca que exista el procuta con el slug */
    const product = categoryProducts.find(
        (item) => addSlug(item.label) === productSlug
    );
    if(!product){
        notFound();
    }

    console.log('🐍🐍 product ', product)

    return (
        <main className="bg-white w-full">
            {/* Imagen y texto */}
            <div className="flex flex-col md:flex-row items-center mx-50">
                <div className="w-full flex relative items-center justify-center md:w-1/2 h-[280px] sm:h-[350px] md:h-[400px]">
                    {/* Imagen izq */}
                    <Image
                    src={product.src}
                    alt={product.label}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain"
                    />
                </div>

                <div className="w-full md:w-1/2">
                    {/* Texto derecha */}
                    <h1 className="font-bold text-[40px] text-black">
                        {product.text}
                    </h1>
                    <p className="text-[18px] pt-5 text-gray-500">
                        {product.body}
                    </p>
                </div>
            </div>

            {/* Seccion de dropmenus */}
            <div></div>
        </main>
    )
}