import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Specialty from './components/Specialty'
import Navigation from './components/Navigation'
import Wine from './components/Wine'
import Beer from './components/Beer'
import ZeroProof from './components/ZeroProof'
import Footer from './components/Footer'
import Home from './components/Home'
import HappyHour from './components/HappyHour'

function App () {
  const shaken = [
    {
      id: 1,
      name: 'Strawberry Fields',
      desc: 'ripe strawberry with a punch',
      ingredients: `Tito's Vodka, Cocchi Rosa, chartreuse, strawberry, lemon`
    },
    {
      id: 2,
      name: 'Hot Heather',
      desc: 'taste of the tropics with zippy, gingery heat',
      ingredients: `Don Julio Blanco Tequila, Mango Brandy, grapefruit, ginger, lime`
    },
    {
      id: 3,
      name: 'Hot Heather',
      desc: 'taste of the tropics with zippy, gingery heat',
      ingredients: `Don Julio Blanco Tequila, Mango Brandy, grapefruit, ginger, lime`
    },
    {
      id: 4,
      name: 'Hot Heather',
      desc: 'taste of the tropics with zippy, gingery heat',
      ingredients: `Don Julio Blanco Tequila, Mango Brandy, grapefruit, ginger, lime`
    }
  ]
  const stirred = [
    {
      id: 1,
      name: 'Strawberry Fields',
      desc: 'ripe strawberry with a punch',
      ingredients: `Tito's Vodka, Cocchi Rosa, chartreuse, strawberry, lemon`
    },
    {
      id: 2,
      name: 'Strawberry Fields',
      desc: 'ripe strawberry with a punch',
      ingredients: `Tito's Vodka, Cocchi Rosa, chartreuse, strawberry, lemon`
    },
    {
      id: 3,
      name: 'Strawberry Fields',
      desc: 'ripe strawberry with a punch',
      ingredients: `Tito's Vodka, Cocchi Rosa, chartreuse, strawberry, lemon`
    }
  ]
  const spritz = [
    {
      id: 1,
      name: 'Strawberry Fields',
      desc: 'ripe strawberry with a punch',
      ingredients: `Tito's Vodka, Cocchi Rosa, chartreuse, strawberry, lemon`
    },
    {
      id: 2,
      name: 'Strawberry Fields',
      desc: 'ripe strawberry with a punch',
      ingredients: `Tito's Vodka, Cocchi Rosa, chartreuse, strawberry, lemon`
    },
    {
      id: 3,
      name: 'Strawberry Fields',
      desc: 'ripe strawberry with a punch',
      ingredients: `Tito's Vodka, Cocchi Rosa, chartreuse, strawberry, lemon`
    }
  ]
  const houseSpecials = [
    {
      id: 1,
      name: 'Strawberry Fields',
      price: '$15',
      desc: 'ripe strawberry with a punch',
      ingredients: `Tito's Vodka, Cocchi Rosa, chartreuse, strawberry, lemon`
    },
    {
      id: 2,
      name: 'Strawberry Fields',
      price: '$15',
      desc: 'ripe strawberry with a punch',
      ingredients: `Tito's Vodka, Cocchi Rosa, chartreuse, strawberry, lemon`
    },
    {
      id: 3,
      name: 'Strawberry Fields',
      price: '$15',
      desc: 'ripe strawberry with a punch',
      ingredients: `Tito's Vodka, Cocchi Rosa, chartreuse, strawberry, lemon`
    }
  ]
  const highball = [
    {
      id: 1,
      name: 'Paradise Ginza',
      price: '$13',
      desc: 'classic Japanese highball',
      ingredients: 'Suntory Toki Japanese Whisky + fizzy soda water'
    },
    {
      id: 2,
      name: 'Frenchman Knob',
      price: '$13',
      desc: 'frat boy highball',
      ingredients: 'Jim Beam Black + fizzy soda water'
    }
  ]
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/happy-hour' element={<HappyHour />} />
          <Route
            path='/full-menu'
            element={
              <>
                <Navigation />
                <Specialty
                  shaken={shaken}
                  stirred={stirred}
                  spritz={spritz}
                  houseSpecials={houseSpecials}
                  highball={highball}
                />
                <Wine />
                <Beer />
                <ZeroProof />
              </>
            }
          />
          <Route path='*' element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
