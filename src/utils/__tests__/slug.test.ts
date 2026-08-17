
import { addSlug } from "../slug";

describe('formatea texto para crear slug', () => {
    it('Remueve espacios y mayusculas', () =>{
        expect(addSlug('Harburguesa de Queso')).toBe('harburguesa-de-queso')
    })

    it('Remueve las ñ', ()=>{
        expect(addSlug('Piñata de Piña')).toBe('pinata-de-pina')
    })
})




/* 
import {addSlug} from '../slug';

describe('addSlug utility', () =>{
    it('debe convertir strings en un slug valido', () => {
        expect(addSlug('Cajita Feliz Épica')).toBe('cajita-feliz-epica');
    });

    it('debe reemplazar ñ por n', () =>{
        expect(addSlug('Piñata de Piña')).toBe('pinata-de-pina');
    });
}) */