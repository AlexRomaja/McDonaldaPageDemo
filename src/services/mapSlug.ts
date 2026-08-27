import { menuData } from "@/utils/constantsImg";

/* Mapea Slug por la inconsistencia en la api */
const CATEGORY_MAP : Record<string, keyof typeof menuData> = {
    'para-acompanar': 'paraacompañar',
    'cajita-feliz' : 'cajitafeliz',
    'cajita-feliz-desayuno' : 'cajitafelizdesayuno',
};

export function getCategoryKey(slug: string): keyof typeof menuData | undefined {
    const cleanSlug = decodeURIComponent(slug).trim().toLowerCase();
    
    if(cleanSlug in CATEGORY_MAP){
        return CATEGORY_MAP[slug];
    }

    if(cleanSlug in menuData){
        return cleanSlug as keyof typeof menuData;
    }

    return undefined;
}

export async function getProductbyCategory(slug: string){
    const categoryKey = getCategoryKey(slug);
    if(!categoryKey) return null;
    return menuData[categoryKey];
}