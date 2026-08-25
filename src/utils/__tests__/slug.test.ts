
import { addSlug } from "../slug";

describe('formatea texto para crear slug', () => {
    it('Remueve espacios y mayusculas', () =>{
        expect(addSlug('Harburguesa de Queso')).toBe('harburguesa-de-queso')
    })

    it('Remueve las ñ', ()=>{
        expect(addSlug('Piñata de Piña')).toBe('pinata-de-pina')
    })
})
