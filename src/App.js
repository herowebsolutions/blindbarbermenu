import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cocktails from './components/Cocktails'
import Navigation from './components/Navigation'
import Wine from './components/Wine'
import Beer from './components/Beer'
import Other from './components/Other'
import Spirits from './components/Spirits'
// import Footer from './components/Footer'
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
        ingredients: `Patron Blanco Tequila, mango brandy, grapefruit, ginger, lime`
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
        ingredients: `Maker's Mark, amontillado sherry, China-China, cacao`
      }
    ]
  }
  const classic = {
    classic: [
      {
        id: 1,
        name: 'Rum Punch',
        desc: 'ripe strawberry with a punch',
        ingredients: `Bacardi 8, RumHaven, Creme de Banané, pineapple, lime, demerara`
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
        ingredients: `Botanist Gin, dry vermouth, olive brine`
      }
    ]
  }
  const fancy = {
    fancy: [
      {
        id: 1,
        name: 'Fancy Old Fashioned',
        desc: 'ripe strawberry with a punch',
        ingredients: `Legent Bourbon, demerara, angostura, orange`
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
  const highballs = {
    highballs: [
      {
        id: 1,
        name: 'Dirty Shirley',
        desc: 'classic Japanese highball',
        ingredients:
          'Haku Vodka, pomegranate, lemon, lime + very fizzy soda water',
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
  const wine = {
    wine: [
      {
        id: 1,
        name: 'Bombino Blanco Valentina Passalacqua',
        price: '$14/$62',
        origin: 'Puglia, Italy',
        vol: '11°',
        title: 'white'
      },
      {
        id: 2,
        name: 'Pinot Gris Domaine Paul Blanck',
        price: '$14/$62',
        origin: 'Alsace, France',
        vol: '13°'
      },
      {
        id: 3,
        name: 'Pipeńo Cacique Maravilla',
        price: '$14/$62',
        origin: 'Bio Bio Valley, Chile',
        vol: '12.5°',
        title: 'red'
      },
      {
        id: 4,
        name: 'No Fine Print',
        price: '$12/$54',
        origin: 'Lake County, CA',
        vol: '14.5°'
      }
    ]
  }
 
  const rose = {
    rosé: [
      {
        id: 1,
        name: 'Jeio Cuvee Sparkling Rosé',
        price: '$14/$62',
        origin: 'Veneto, Italy',
        vol: '11.5°'
      }
    ]
  }
  const bubbles = {
    bubbles: [
      {
        id: 1,
        name: 'Jeio Cuvee Sparkling Rosé',
        price: '$14/$62',
        origin: 'Veneto, Italy',
        vol: '11.5°'
      },
      {
        id: 2,
        name: 'Chandon Garden Spritz Split',
        price: '$13',
        origin: 'Mendoza, Argentina',
        vol: '11°'
      },
      {
        id: 3,
        name: 'Campa Viejo Cava',
        price: '$14/$62',
        origin: 'Logrono, Spain',
        vol: '11.5°'
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
        vol: '12.2°'
      },
      {
        id: 2,
        name: 'Veuve Clicquot Viejo Cava',
        price: '$200',
        origin: 'Champagne, France',
        vol: '12°'
      },
      {
        id: 3,
        name: 'Veuve Clicquot Rosé',
        price: '$225',
        origin: 'Champagne, France',
        vol: '12.5°'
      },
      {
        id: 4,
        name: 'Dom Pérignon',
        price: '$450',
        origin: 'Champagne, France',
        vol: '12.5°'
      }
    ]
  }
  const draft = {
    draft: [
      {
        id: 1,
        name: 'Michelob Ultra',
        price: '$8',
        desc: 'Light Lager',
        vol: '4.2°'
      },
      {
        id: 2,
        name: 'Cruz Blanca Mexico Calling',
        price: '$9',
        desc: 'Lager',
        vol: '4.7°'
      },
      
      {
        id: 3,
        name: 'Goose Island Neon Beer Hug',
        price: '$9',
        desc: 'IPA',
        vol: '7.0°'
      },
      {
        id: 4,
        name: 'Cigar City Guayabera',
        price: '$9',
        desc: 'Citra Pale Ale',
        vol: '5.5°'
      },
    ]
  }
  const canned = {
    canned: [
      {
        id: 1,
        name: 'Bud Light',
        price: '$6',
        desc: 'Light Lager',
        vol: '4.2°'
      },
      {
        id: 2,
        name: 'Budweiser',
        price: '$6',
        desc: 'American Pale Lager',
        vol: '5.0°'
      },
      {
        id: 3,
        name: 'Estrella Jalisco',
        price: '$8',
        desc: 'Mexican Lager',
        vol: '4.5°'
      },
      {
        id: 4,
        name: 'Spiteful IPA',
        price: '$8',
        desc: 'IPA',
        vol: '6.2°'
      },
      {
        id: 5,
        name: 'Kona Big Wave',
        price: '$7',
        desc: 'Golden Ale',
        vol: '4.4°'
      },
      {
        id: 6,
        name: 'Golden Road',
        price: '$7',
        desc: 'Mango Wheat Ale',
        vol: '5.0°'
      },
      {
        id: 7,
        name: 'Aval Rose Cider',
        price: '$10',
        desc: 'Rose Cider',
        vol: '6.0°'
      },
      {
        id: 8,
        name: 'Luna Bay Palo Santo Blueberry',
        price: '$7',
        desc: 'Hard Kombucha',
        vol: '6.0°'
      },
      {
        id: 9,
        name: 'Luna Bay Raspberry Rose',
        price: '$7',
        desc: 'Hard Kombucha',
        vol: '6.0°'
      },
      {
        id: 10,
        name: 'High Noon',
        price: '$11',
        desc: 'Hard Seltzer',
        vol: '4.5°'
      },
      {
        id: 11,
        name: 'Amass Seltzer',
        price: '$12',
        desc: 'Hard Seltzer',
        vol: '5.0°'
      },
      {
        id: 12,
        name: 'Coastal Spritz',
        price: '$10',
        desc: 'Wine Spritzer',
        vol: '5.0°'
      },
      {
        id: 13,
        name: 'Athletic Brewing Upside Dawn',
        price: '$8',
        desc: 'Non-Alcoholic Golden Style Ale',
        vol: '0.5°'
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
        desc: 'Regular | Sugar-Free | Watermelon'
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
        name: 'Chicken Tenders',
        desc: '5 Tenders',
        ingredients:
          'Blind Buffalo sauce, ranch, ketchup',
        price: '$15'
      },
      {
        id: 2,
        name: 'Crab Rangoon',
        desc: '5 Pieces',
        ingredients: 'Everything seasoning, Thai sweet chili',
        price: '$9'
      },
      {
        id: 3,
        name: 'Fries',
        ingredients: 'House-cut Kennebec potato, sea salt',
        price: '$8'
      }
    ]
  }
  const spirits = {
    spirits: [
      {
        id: 1,
        name: 'Deep Eddy',
        price: '$12',
        vol: '',
        title: 'Vodka'
      },
      {
        id: 2,
        name: 'Grey Goose',
        price: '$14',
        vol: ''
      },
      {
        id: 3,
        name: 'Haku',
        price: '$13',
        vol: ''
      },
      {
        id: 4,
        name: 'Ketel One',
        price: '$14',
        vol: ''
      },
      {
        id: 5,
        name: 'Titos',
        price: '$13',
        vol: ''
      },
      {
        id: 6,
        name: 'Amass',
        price: '$14',
        vol: '',
        title: 'Gin'
      },
      {
        id: 7,
        name: 'Botanist',
        price: '$14',
        vol: ''
      },
      {
        id: 8,
        name: 'Bombay',
        price: '$13',
        vol: ''
      },
      {
        id: 9,
        name: 'Bombay Bramble',
        price: '$13',
        vol: ''
      },
      {
        id: 10,
        name: 'Hendricks',
        price: '$14',
        vol: ''
      },
      {
        id: 11,
        name: 'Roku',
        price: '$13',
        vol: ''
      },
      {
        id: 12,
        name: 'Spring 44',
        price: '$12',
        vol: ''
      },
      {
        id: 13,
        name: 'Tanqueray 10',
        price: '$14',
        vol: ''
      },
      {
        id: 14,
        name: 'Bacardi White',
        price: '$12',
        vol: '',
        title: 'Rum'
      },
      {
        id: 15,
        name: 'Bacardi 8',
        price: '$14',
        vol: ''
      },
      {
        id: 16,
        name: 'Leblon',
        price: '$13',
        vol: ''
      },
      {
        id: 17,
        name: 'Mount Gay Black Barrel',
        price: '$14',
        vol: ''
      },
      {
        id: 18,
        name: 'Rhum JM Agricole',
        price: '$14',
        vol: ''
      },
      {
        id: 19,
        name: 'Casamigos Blanco',
        price: '$12',
        vol: '',
        title: 'Tequila'
      },
      {
        id: 20,
        name: 'Casamigos Reposado',
        price: '$16',
        vol: ''
      },
      {
        id: 21,
        name: 'Casamigos Añejo',
        price: '$18',
        vol: ''
      },
      {
        id: 22,
        name: 'Casa Dragones',
        price: '$19',
        vol: ''
      },
      {
        id: 23,
        name: 'Cincoro Blanco',
        price: '$25',
        vol: ''
      },
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
                  highballs={highballs}
                  fancy={fancy}
                  nightCaps={nightCaps}
                />
                <Wine
                  wine={wine}
                  rose={rose}
                  bubbles={bubbles}
                  champagne={champagne}
                />
                <Beer draft={draft} canned={canned} />
                <Other other={other} snacks={snacks} />
                <Spirits spirits={spirits} />

              </>
            }
          />
          <Route path='*' element={<Home />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  )
}

export default App
