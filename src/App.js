import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cocktails from './components/Cocktails'
import Navigation from './components/Navigation'
import Wine from './components/Wine'
import Beer from './components/Beer'
import Other from './components/Other'
import Footer from './components/Footer'
import Home from './components/Home'
import HappyHour from './components/HappyHour'

function App () {
  const signature = {
    signature: [
      {
        id: 1,
        name: 'Strawberry Fields',
        desc: 'ripe strawberry with a punch',
        ingredients: `Deep Eddy, Cocchi Rosa, Yellow Chartreuse, strawberry, lemon`
      },
      {
        id: 2,
        name: 'Hot Heather',
        desc: 'taste of the tropics with zippy, gingery heat',
        ingredients: `Patron Blanco Tequila, Mango Brandy, grapefruit, ginger, lemon`
      },
      {
        id: 3,
        name: 'White Ferrari',
        desc: 'taste of the tropics with zippy, gingery heat',
        ingredients: `Casamigos Reposado, white port, persimmon, lime`
      },
      {
        id: 4,
        name: 'Young Forever',
        desc: 'taste of the tropics with zippy, gingery heat',
        ingredients: `La Luna Mezcal, blanc vermouth, grapefruit, lime, salt + fizzy soda water`
      },
      {
        id: 5,
        name: 'Batman',
        desc: 'taste of the tropics with zippy, gingery heat',
        ingredients: `Bombay Sapphire, Italicious Rosolio, Pineau de Charentes, lemon, absinthe, cava`
      },
      {
        id: 6,
        name: 'Better Guess',
        desc: 'taste of the tropics with zippy, gingery heat',
        ingredients: `Del Maguey Vida, Bols Genever, blanc vermouth, Bechervovka, Avezé`
      },
      {
        id: 7,
        name: 'Adult Swim',
        desc: 'taste of the tropics with zippy, gingery heat',
        ingredients: `Maker's Mark, Amontillado Sherry, China-China, raspberry, cacao`
      }
    ]
  }
  const classic = {
    classic: [
      {
        id: 1,
        name: 'Rum Punch',
        desc: 'ripe strawberry with a punch',
        ingredients: `Bacardi, RumHaven, Creme de Banané, pineaple, lime, demerara`
      },

      {
        id: 2,
        name: 'Espresso Martini',
        desc: 'ripe strawberry with a punch',
        ingredients: `Grey Goose Vodka, Borghetti, Mr. Black, Bueno Days Coffee`
      },
      {
        id: 3,
        name: 'Dirty Martini',
        desc: 'ripe strawberry with a punch',
        ingredients: `Botanist Gin, demerara, dry vermouth, olive brine`
      }
    ]
  }
  const fancy = {
    fancy: [
      {
        id: 1,
        name: 'Fancy Old Fashioned',
        desc: 'ripe strawberry with a punch',
        ingredients: `Legent Kentucky, Straight Bourbon, demerara, bitters, orange oil`
      },
      {
        id: 2,
        name: 'Fancy Margarita',
        desc: 'ripe strawberry with a punch',
        ingredients: `Patron Sherry Cask Añejo, Cointreau, lime, agave`
      }
    ]
  }
  const nightCaps = {
    nightCaps: [
      {
        id: 1,
        name: 'Fernet Branca',
        desc: '39°',
        origin: `Milan, Italy`,
        price: '$10'
      },
      {
        id: 2,
        name: 'Malort',
        desc: '35°',
        origin: `Chicago, Illinois`,
        price: '$8'
      },
      {
        id: 3,
        name: 'Montenegro',
        desc: '46°',
        origin: `Bologna, Italy`,
        price: '$11'
      },
      {
        id: 4,
        name: 'Skrewball',
        desc: '35°',
        origin: `San Diego, California`,
        price: '$10'
      }
    ]
  }
  const highball = {
    highball: [
      {
        id: 1,
        name: 'Dirty Shirley',
        desc: 'classic Japanese highball',
        ingredients:
          'Haku Vodka, Pomegranate, Lemon, Lime + very fizzy soda water',
        price: '$11'
      },
      {
        id: 2,
        name: 'Paradise Ginza',
        desc: 'frat boy highball',
        ingredients: 'Suntory Toki + very fizzy soda water, lemon oil',
        price: '$11'
      },
      {
        id: 3,
        name: 'Hot Pink SZN',
        desc: 'frat boy highball',
        ingredients:
          'Haku Vodka, Aperol, lime, Watermelon Red Bull, Topo Chico',
        price: '$13'
      },
      {
        id: 4,
        name: 'San Marcos Ranch Water',
        desc: 'frat boy highball',
        ingredients:
          'Hornitos Reposado, ancho pepper, hibiscus, lime + very fizzy soda water',
        price: '$13'
      }
    ]
  }
  const white = {
    white: [
      {
        id: 1,
        name: 'Bombino Blanco Valentina Passalacqua',
        price: '$14/$62',
        origin: 'Puglia, Italy',
        vol: '11'
      },
      {
        id: 2,
        name: 'Pinot Gris Domaine Paul Blanck',
        price: '$14/$62',
        origin: 'Alsace, France',
        vol: '13'
      }
    ]
  }
  const red = {
    red: [
      {
        id: 1,
        name: 'Pipeńo Cacique Maravilla',
        price: '$14/$62',
        origin: 'Bio Bio Valley, Chile',
        vol: '12.5'
      },
      {
        id: 2,
        name: 'No Fine Print',
        price: '$12/$54',
        origin: 'Lake County, CA',
        vol: '14.5'
      }
    ]
  }
  const rose = {
    rosé: [
      {
        id: 1,
        name: 'Jeio Cuvee Sprakling',
        price: '$14/$62',
        origin: 'Veneto, Italy',
        vol: '11.5'
      }
    ]
  }
  const bubbles = {
    bubbles: [
      {
        id: 1,
        name: 'Chandon Garden Spritz',
        price: '$13',
        origin: 'Mendoza, Argentina',
        vol: '11'
      },
      {
        id: 2,
        name: 'Campa Viejo Cava',
        price: '$14/$62',
        origin: 'Logrono, Spain',
        vol: '11.5'
      }
    ]
  }
  const champagne = {
    champagne: [
      {
        id: 1,
        name: 'Moët Split',
        price: '$25',
        origin: 'Champagne, France',
        vol: '12.2'
      },
      {
        id: 2,
        name: 'Veuve Clicquot Viejo Cava',
        price: '$200',
        origin: 'Champagne, France',
        vol: '12'
      },
      {
        id: 3,
        name: 'Veuve Clicquot Rosé',
        price: '$225',
        origin: 'Champagne, France',
        vol: '12.5'
      },
      {
        id: 4,
        name: 'Dom Pérignon',
        price: '$450',
        origin: 'Champagne, France',
        vol: '12.5'
      }
    ]
  }
  const draft = {
    draft: [
      {
        id: 1,
        name: 'Cigar City Guayabera',
        price: '$9',
        desc: 'Citra Pale Ale',
        vol: '5.5'
      },
      {
        id: 2,
        name: 'Michelob Ultra',
        price: '$8',
        desc: 'Light Lager',
        vol: '4.2'
      },
      {
        id: 3,
        name: 'Cruz Blanca Mexico Calling',
        price: '$9',
        desc: 'Lager',
        vol: '4.7'
      },
      {
        id: 4,
        name: 'Goose Island Neon Beer Hug',
        price: '$9',
        desc: 'IPA',
        vol: '7.0'
      }
    ]
  }
  const canned = {
    canned: [
      {
        id: 1,
        name: 'Estrella Jalisco',
        price: '$8',
        desc: 'Mexican Lager',
        vol: '4.5'
      },
      {
        id: 2,
        name: 'Bud Light',
        price: '$6',
        desc: 'Light Lager',
        vol: '4.2'
      },
      {
        id: 3,
        name: 'Budweiser',
        price: '$6',
        desc: 'American Pale Lager',
        vol: '5.0'
      },
      {
        id: 4,
        name: 'Spiteful IPA',
        price: '$8',
        desc: 'IPA',
        vol: '6.2'
      },
      {
        id: 5,
        name: 'Virtue Brut Cider',
        price: '$7',
        desc: 'Farmnhouse Cider',
        vol: '6.7'
      },
      {
        id: 6,
        name: 'Kona Big Wave',
        price: '$7',
        desc: 'Golden Ale',
        vol: '4.4'
      },
      {
        id: 7,
        name: 'Golden Road',
        price: '$7',
        desc: 'Mango Wheat Ale',
        vol: '5.0'
      },
      {
        id: 8,
        name: 'High Noon',
        price: '$9',
        desc: 'Hard Seltzer',
        vol: '4.5'
      },
      {
        id: 9,
        name: 'Luna Bay Palo Santo Blueberry',
        price: '$7',
        desc: 'Hard Kombucha',
        vol: '6.0'
      },
      {
        id: 10,
        name: 'Luna Bay Raspberry Rose',
        price: '$7',
        desc: 'Hard Kombucha',
        vol: '6.0'
      }
    ]
  }
  const other = {
    other: [
      {
        id: 1,
        name: 'Limonada',
        price: '$5',
        desc: 'lime, sugar + very fizzy soda water'
      },
      {
        id: 2,
        name: 'Red Bull',
        price: '$5',
        desc: 'Regular | Sugar-Free | Seasonal | Coco-Berry'
      },
      {
        id: 3,
        name: 'Spring Water',
        price: '$5',
        desc: 'Liquid Death Still | Liquid Death Sparkling'
      },
      {
        id: 4,
        name: 'Mineral Water',
        price: '$5',
        desc: 'Topo Chico | Topo Chico Grapefruit'
      }
    ]
  }
  const snacks = {
    snacks: [
      {
        id: 1,
        name: 'Olive You',
        ingredients:
          'Castelvetrano, Bella di Cerignola, Gaeta, Italian olive oil',
        price: '7'
      },
      {
        id: 2,
        name: 'Crab Rangoon',
        desc: '5 Pieces',
        ingredients: 'Everything seasoning, Thai sweet chili',
        price: '9'
      },
      {
        id: 3,
        name: 'Fries',
        ingredients: 'House-cut Kennebec potato, sea salt',
        price: '8'
      }
    ]
  }
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/chicago-happy-hour' element={<HappyHour />} />
          <Route
            path='/chicago-menu'
            element={
              <>
                <Navigation />
                <Cocktails
                  signature={signature}
                  classic={classic}
                  highball={highball}
                  fancy={fancy}
                  nightCaps={nightCaps}
                />
                <Wine
                  white={white}
                  red={red}
                  rose={rose}
                  bubbles={bubbles}
                  champagne={champagne}
                />
                <Beer draft={draft} canned={canned} />
                <Other other={other} snacks={snacks} />
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
