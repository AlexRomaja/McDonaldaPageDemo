import Image from "next/image";
import Link from "next/link";

export interface Product {
    id: number;
    label: string;
    text: string;
    body: string;
    src: string;
}

interface ProductCardProps {
    product: Product;
    categorySlug: string;
    productSlug: string;
}

export default function ProductCard ({product, categorySlug, productSlug} : ProductCardProps) {

    const href = `/menu/${categorySlug}/${productSlug}`;
console.log('👽 ', productSlug)
    
    return(
        <Link 
        href={href}
        className=" w-full h-70 group flex flex-col
        border border-gray-100 rounded-2xl transition-all duration-300
        shadow-lg hover:shadow-2xl hover:scale-110">
            <div className="bg-gray-50 w-full h-48 relative flex items-center justify-center">
                <Image
                src={product.src} 
                alt={product.label}
                fill
                sizes="(max-width: 440px) 50vw, (max-width: 1024px) 25vw, 20vw)"
                className="object-contain"/>
            </div>
            <div className="bg-white w-full h-[56px] flex flex-col text-start  mt-6 px-2 md:px-6">
                <h2 className="text-black text-[14px] md:text-[16px]">
                    {product.text}
                </h2>
            </div>
        </Link>
    )
}