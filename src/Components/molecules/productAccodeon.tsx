'use client';

import { Accordion } from "@heroui/react";

export interface NutTablaItem {
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

interface AccordionProps {
    informacion?: InfoProduct;
}

export default function ProductAccordion({ informacion }: AccordionProps){
    const {nutricional, alergenos} = informacion || {};
    const nutTablaList = nutricional?.nutTabla || [];

    return(
        <div className="w-full mx-aut mb-20">
            {/* Titulo */}
            <h2 className="text-[24px] md:text-[32px] text-black font-bold text-center md:text-start">
                Más Información
            </h2>

            {/* Acordeon */}
            <Accordion allowsMultipleExpanded className='w-full'>
                {/* Titulo */}
                <Accordion.Item id='nutricional'>
                    <Accordion.Heading>
                        <Accordion.Trigger
                        className='w-full flex justify-between item-center '>
                            <span className="text-[16px] md:text-[20px] font-bold text-black ">
                                Información Nutricional
                            </span>
                            <Accordion.Indicator />
                        </Accordion.Trigger>
                    </Accordion.Heading>

                {/* Cards y Tabla */}
                <Accordion.Panel>
                    <Accordion.Body className="flex flex-col items-center">
                        {/* Cards */}
                        {nutTablaList.length > 0 && (
                            <div className="w-full flex flex-wrap justify-center gap-3">
                                {nutTablaList.map((item: NutTablaItem) => {
                                    if(item.peso === undefined || item.peso === null ) return null;

                                    return(
                                        <div key={item.id}
                                        className="w-22 h-20 md:w-26 md:h-24 bg-white rounded-xl border border-gray-100 shadow-md flex flex-col justify-center items-center text-center p-3">
                                            <span className="text-[14px] md:text-[18px] font-bold text-black line-clamp-1">
                                                {item.peso}
                                            </span>
                                            <span className="text-[12px] md:text-[14px] text-gray-500 font-medium line-clamp-2">
                                                {item.text}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        )}

                        {/* Tabla */}
                        {nutTablaList.length > 0 && (
                            <div className="w-full overflow-x-auto rounded-lg mt-6">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-gray-200/70 text-[12px] md:text-[16px] text-black font-bold">
                                            <th>Información Nutricional</th>
                                            <th>Por Producto</th>
                                            <th>I.D.R%</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {nutTablaList.map((row: NutTablaItem, index: number) => (
                                            <tr key={row.id}
                                            className={`text-[12px] md:text-[14px] text-gray-800
                                            ${index % 2 === 0 ? 'bg-white' : 'bg-gray-100/60'}`}>
                                                <td>{row.text}</td>
                                                <td>{row.peso ?? ''}</td>
                                                <td>{row.idr ?? ''}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </Accordion.Body>
                </Accordion.Panel>
                </Accordion.Item>

                {/* Alergenos */}
                <Accordion.Item id='alergenos'>
                    <Accordion.Heading>
                        <Accordion.Trigger className='w-full flex justify-between items-center py-4'>
                            <span className="text-[16px] md:text-[20px] font-bold text-black">
                                Información Sobre Alérgenos
                            </span>
                            <Accordion.Indicator />
                        </Accordion.Trigger>
                    </Accordion.Heading>

                    <Accordion.Panel>
                        <Accordion.Body className="">
                            {alergenos && alergenos.length > 0 ? (
                                <ul className="flex flex-wrap gap-2 md:gap-4 items-center justify-center">
                                    {alergenos.map((alerg: string, idx: number) => (
                                        <li key={idx} 
                                        className="bg-gray-100 text-gray-800 text-[12px] md:text-[14px] font-semibold 
                                        px-4 py-2 rounded-full border border-gray-200">
                                            {alerg}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>Sin información</p>
                            )}
                        </Accordion.Body>
                    </Accordion.Panel>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}