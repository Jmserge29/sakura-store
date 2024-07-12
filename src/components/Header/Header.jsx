'use client'
import Marquee from './Marquee'
import FuctionsHeader from './FuctionsHeader'
import Categories from './Categories'
import useScroll from '../../hooks/useScroll'

function Header() {
  const scroll = useScroll();

  return (
    <header className='fixed pt-3 w-full'>
        <FuctionsHeader/>
        {/* Categorías / Secciones */}
        <Categories/>
        {/* Promos / Anuncios / Descuentos / New merch */}
        {scroll && <Marquee/> }
    </header>
  );
}

export default Header;
