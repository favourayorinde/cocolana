import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OptionButton from './OptionButton'
import CanvasObject from './CanvasObject'

function App() {


  return (
    <>
      <div className='navbar kulim-park'>
        <span>
          favour_
        </span>
        <div className='navbar-right'>
          <span className='centerline'>
            <img className='thin-line' src="/nav-line.svg" alt="" />
            <span>demo</span>
          </span>
          <span className='centerline'>
          <img className='thin-line' src="/nav-line.svg" alt="" />
            react three
          </span>
        </div>
      </div>
      <div className='divider'>
      </div>
      <CanvasObject/>
      {/* <div className="headline">
        coco<br className='titlebreak'/>lana
      </div> */}
      <div className='navbar body-copy'>
        <div className="leftcopy kulim-park">
        WE believe in perfume supremacy
        <br />
        capture the room with cocolana
        <br />
        top fragrance
        </div>
        <div className='choice-list'>
          <OptionButton>
            Blessed Spring
          </OptionButton>
          <OptionButton>
            Clear Waterfall
          </OptionButton>
          <OptionButton>
            Crystal Delta
          </OptionButton>
        </div>
      </div>
      <div className='kulim-park buy-now-btn'>
        Buy Now
      </div>
    </>
  )
}

export default App
