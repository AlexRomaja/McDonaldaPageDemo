import { Button } from '@heroui/react';
import Header from '@/Components/organisms/header';
import SwipeMenu from '@/Components/organisms/swipeMenu';
import BannerBigBurger from '@/Components/organisms/bannerBigBurguer';

export default function Home() {
  
  return (
    <>
    <div className='h-auto'>
      <Header />
      <SwipeMenu />
      <BannerBigBurger />
    </div>
    </>
  );
}
