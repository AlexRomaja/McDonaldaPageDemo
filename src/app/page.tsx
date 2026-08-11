import { Button } from '@heroui/react';
import Header from '@/Components/organisms/header';
import SwipeMenu from '@/Components/organisms/swipeMenu';
import BannerBigBurger from '@/Components/organisms/bannerBigBurguer';
import CarruselHome from '@/Components/organisms/carruselHome';
import CardsHome from '@/Components/organisms/cardsGridHome';
import CarruselWMovement from '@/Components/organisms/carruselWMove';

export default function Home() {
  
  return (
    <>
    <div className='h-auto'>
      <Header />
      <SwipeMenu />
      <BannerBigBurger />
      <CarruselHome />
      <CardsHome />
      <CarruselWMovement />
    </div>
    </>
  );
}
