import React from 'react';
import Bronx from './Bronx';
import Brooklyn from './Brooklyn';
import Manhattan from './Manhattan';
import Queens from './Queens';
import StatenIsland from './StatenIsland';
import './HorizontalScroll.css';

export default function Main() {
  return (
    <main className="scroll-container">
      <Bronx />
      <Brooklyn />
      <Manhattan />
      <Queens />
      <StatenIsland />
    </main>
  )
}
