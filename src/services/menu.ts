import { menuData } from "@/utils/constantsImg";
import { addSlug } from "@/utils/slug";
import { getCategoryKey } from "./mapSlug";

export interface NutTablaItem{
    id: number;
    text: string | number;
    peso: string | number;
    idr?: string | number;
}

export interface NutricionalData {
    [key: string]: any;
    nutTabla?: NutTablaItem[];
}

export interface InfoProduct {
    nutricional?: NutricionalData;
    alergenos?: string[];
}

export interface Product {
    id: number;
    label: string;
    text: string;
    body: string;
    src: string;
    informacion: InfoProduct;
}

export async function getProductbySlug(categorySlug: string, productSlug: string): Promise<Product | null >{
    const categoryKey = getCategoryKey(categorySlug);
    if(!categoryKey) return null;

    const categoryProducts = menuData[categoryKey];
    if(!categoryProducts) return null;

    const product = categoryProducts.find(
        (item) => addSlug(item.label) === productSlug.toLowerCase()
    )

    return (product as Product) || null;
}