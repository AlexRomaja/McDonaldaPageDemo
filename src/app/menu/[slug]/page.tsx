import { notFound } from "next/navigation";
import { menuData } from "@/utils/constantsImg"
import SwipeMenu from "@/Components/organisms/swipeMenu";

import ProductCard from "@/Components/molecules/productCard";

interface MenuPagesProps {
    params: Promise<{ slug: string}>;
}

export default async function MenuPages ({params}: MenuPagesProps) {

    const {slug} = await params;
    const products = menuData[slug as keyof typeof menuData];

    const getTitle = slug.replace(/-/g, " ");
    const setTitle = getTitle.charAt(0).toUpperCase() + getTitle.slice(1);

    if(!products){
        notFound();
    }

    return (
        <>
        <SwipeMenu />
        <div className="bg-white ">
            <h1 className="text-[30px] text-black font-bold px-12 mt-10">{`${setTitle}`}</h1>
            <section>
                <div className="px-5 md:px-12 py-10 gap-5 md:gap-10
                grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {products.map((product) => (
                        <ProductCard
                        key={product.id}
                        product={product}
                        categorySlug={slug}
                        />
                    ))}
                </div>
            </section>
        </div>
        </>
    )
}