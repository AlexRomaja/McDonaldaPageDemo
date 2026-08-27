
import { render, screen } from '@testing-library/react';

import ProductCard from '../../Components/molecules/productCard';

jest.mock('next/image', () => ({
    __esModule: true,
    default: ({fill, ...props}: any) => <img {...props} />
}));

const mockProduct = {
    id:0,
    label:'Hamburguesa Doble con Queso',
    text:'Hamburguesa Doble con Queso',
    body:'Dos deliciosas carnes, 100% de res, con dos rebanadas de queso amarillo, acompañada de catsup, mostaza, pepinillos y cebolla con un fresco y esponjoso bollo.',
    src:'https://example.com/hamburguesa.png',
    productSlug: 'hamburguesa-doble-con-queso'
}

describe('Crea card del producto', () => {
    it('Genera el texto e imagen de la card', ()=> {
        render(<ProductCard product={mockProduct} categorySlug='hamburguesas' productSlug='hamburguesa-doble-con-queso'/>);

        expect(screen.getByText('Hamburguesa Doble con Queso')).toBeInTheDocument();

        const image = screen.getByRole('img');
        expect(image).toHaveAttribute('src', mockProduct.src)
        expect(image).toHaveAttribute('alt', mockProduct.label)
    });

    it('Genera sub-ruta', ()=>{
        render(<ProductCard product={mockProduct} categorySlug='hamburguesas' productSlug='hamburguesa-doble-con-queso' />);

        const link = screen.getByRole('link');
        expect(link).toHaveAttribute('href', '/menu/hamburguesas/hamburguesa-doble-con-queso')
    })
})
