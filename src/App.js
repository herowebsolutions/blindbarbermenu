import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cocktails from './components/Cocktails'
import Navigation from './components/Navigation'
import Wine from './components/Wine'
import Beer from './components/Beer'
import Other from './components/Other'
import Spirits from './components/Spirits'
import Bottles from './components/Bottles'
import Home from './components/Home'
import HappyHour from './components/HappyHour'
import Footer from './components/Footer'
import BottlesNav from './components/BottlesNav'
import HappyNav from './components/HappyNav'

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
        name: 'Bright Light',
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
        name: 'Pinot Blanc Domaine Paul Blanck',
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
        name: 'Campa Viejo Cava',
        price: '$14/$62',
        origin: 'Logrono, Spain',
        vol: '11.5°'
      },
      {
        id: 3,
        name: 'Chandon Garden Spritz Split',
        price: '$13',
        origin: 'Mendoza, Argentina',
        vol: '11°'
      },
      {
        id: 4,
        name: 'Coastal Spritz',
        price: '$10',
        origin: 'Washington, USA',
        desc: 'Pineapple Rosé Spritzer',
        vol: '5°'
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
        name: 'Veuve Clicquot Brut',
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
      }
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
        vol: '5°'
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
        name: 'Aval Rose Cider',
        price: '$10',
        desc: 'Rose Cider',
        vol: '6°'
      },
      {
        id: 7,
        name: 'Luna Bay Palo Santo Blueberry',
        price: '$7',
        desc: 'Hard Kombucha',
        vol: '6°'
      },
      {
        id: 8,
        name: 'Luna Bay Raspberry Rose',
        price: '$7',
        desc: 'Hard Kombucha',
        vol: '6°'
      },
      {
        id: 9,
        name: 'High Noon',
        price: '$11',
        desc: 'Hard Seltzer',
        vol: '4.5°'
      },
      {
        id: 10,
        name: 'Amass Seltzer',
        price: '$12',
        desc: 'Hard Seltzer',
        vol: '5°'
      },

      {
        id: 11,
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
        ingredients: 'Blind Buffalo sauce, ranch, ketchup',
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
      {
        id: 24,
        name: 'Cincoro Reposado',
        price: '$27',
        vol: ''
      },
      {
        id: 25,
        name: 'Cincoro Añejo',
        price: '$29',
        vol: ''
      },
      {
        id: 26,
        name: 'Clase Azul Reposado',
        price: '$35',
        vol: ''
      },
      {
        id: 27,
        name: 'Clase Azul Plata',
        price: '$26',
        vol: ''
      },
      {
        id: 28,
        name: 'Clase Azul Gold',
        price: '$78',
        vol: ''
      },
      {
        id: 29,
        name: 'Clase Azul Añejo',
        price: '$120',
        vol: ''
      },
      {
        id: 30,
        name: 'Don Julio Blanco',
        price: '$13',
        vol: ''
      },
      {
        id: 31,
        name: 'Don Julio Reposado',
        price: '$15',
        vol: ''
      },
      {
        id: 32,
        name: 'Don Julio Añejo',
        price: '$17',
        vol: ''
      },
      {
        id: 33,
        name: 'Don Julio Crystal',
        price: '$21',
        vol: ''
      },
      {
        id: 34,
        name: 'Don Julio Primavera',
        price: '$33',
        vol: ''
      },
      {
        id: 35,
        name: 'Don Julio 1942',
        price: '$35',
        vol: ''
      },
      {
        id: 36,
        name: 'Don Julio Ultima Reserva',
        price: '$115',
        vol: ''
      },
      {
        id: 37,
        name: 'Fortaleza Blanco',
        price: '$15',
        vol: ''
      },
      {
        id: 38,
        name: 'Fortaleza Reposado',
        price: '$19',
        vol: ''
      },
      {
        id: 39,
        name: 'Fortaleza Añejo',
        price: '$23',
        vol: ''
      },
      {
        id: 40,
        name: 'Hornitos Reposado',
        price: '$15',
        vol: ''
      },
      {
        id: 41,
        name: 'Jon Basil Blanco',
        price: '$14',
        vol: ''
      },
      {
        id: 42,
        name: 'Jon Basil Reposado',
        price: '$16',
        vol: ''
      },
      {
        id: 43,
        name: 'Lunazul',
        price: '$12',
        vol: ''
      },
      {
        id: 44,
        name: 'Patrón Silver',
        price: '$15',
        vol: ''
      },
      {
        id: 45,
        name: 'Patrón Reposado',
        price: '$17',
        vol: ''
      },
      {
        id: 46,
        name: 'Patrón Añejo',
        price: '$18',
        vol: ''
      },
      {
        id: 47,
        name: 'Patrón Sherry Cask Aged Extra Añejo',
        price: '$22',
        vol: ''
      },
      {
        id: 48,
        name: 'Tres Generaciones Reposado',
        price: '$15',
        vol: ''
      },
      {
        id: 49,
        name: 'Amaras Cupreata',
        price: '$16',
        vol: '',
        title: 'Mezcal'
      },
      {
        id: 50,
        name: 'Bahnez',
        price: '$13',
        vol: ''
      },
      {
        id: 51,
        name: 'Fidencio',
        price: '$13',
        vol: ''
      },
      {
        id: 52,
        name: 'La Luna Cupreata',
        price: '$12',
        vol: ''
      },
      {
        id: 53,
        name: 'Del Maguey Vida',
        price: '$13',
        vol: ''
      },
      {
        id: 54,
        name: 'George Dickel',
        price: '$14',
        vol: '',
        title: 'Rye'
      },
      {
        id: 55,
        name: 'High West Double',
        price: '$16',
        vol: ''
      },
      {
        id: 56,
        name: 'Jack Daniels',
        price: '$12',
        vol: ''
      },
      {
        id: 57,
        name: 'Michters',
        price: '$14',
        vol: ''
      },
      {
        id: 58,
        name: 'Old Overholt',
        price: '$13',
        vol: ''
      },
      {
        id: 59,
        name: 'Angels Envy',
        price: '$18',
        vol: '',
        title: 'Bourbon'
      },
      {
        id: 60,
        name: 'Buffalo Trace',
        price: '$16',
        vol: ''
      },
      {
        id: 61,
        name: 'Jack Daniels',
        price: '$13',
        vol: ''
      },
      {
        id: 62,
        name: 'Jim Beam Black (1L)',
        price: '$13',
        vol: ''
      },
      {
        id: 63,
        name: 'Knob Creek (1L)',
        price: '$14',
        vol: ''
      },
      {
        id: 64,
        name: `Maker's Mark (1L)`,
        price: '$14',
        vol: ''
      },
      {
        id: 65,
        name: 'Old Grand Dad (80 Proof)',
        price: '$12',
        vol: ''
      },
      {
        id: 66,
        name: 'Dewars White Label',
        price: '$13',
        vol: '',
        title: 'Scotch'
      },
      {
        id: 67,
        name: 'Dewars Japanese Smooth',
        price: '$14',
        vol: ''
      },
      {
        id: 68,
        name: 'Glenlivet 12 Year',
        price: '$14',
        vol: ''
      },
      {
        id: 69,
        name: 'Johnnie Walker Black',
        price: '$16',
        vol: ''
      },
      {
        id: 70,
        name: 'Johnnie Walker High Rye',
        price: '$16',
        vol: ''
      },
      {
        id: 71,
        name: 'Jameson',
        price: '$12',
        vol: '',
        title: 'Whiskey'
      },
      {
        id: 72,
        name: 'Roe & Co',
        price: '$12',
        vol: ''
      },
      {
        id: 73,
        name: 'Suntory Toki',
        price: '$14',
        vol: ''
      },
      {
        id: 74,
        name: 'Westward Single Malt Whiskey',
        price: '$16',
        vol: ''
      },
      {
        id: 75,
        name: `D'usse`,
        price: '$16',
        vol: '',
        title: 'Cognac'
      },
      {
        id: 76,
        name: 'Hennessey VS',
        price: '$15',
        vol: ''
      },
      {
        id: 77,
        name: 'Remy Martin 1738',
        price: '$19',
        vol: ''
      }
    ]
  }
  // bottles
  const bottles = {
    bottles: [
      {
        id: 1,
        name: `Tito's`,
        price: '$375',
        type: 'Vodka'
      },
      {
        id: 2,
        name: `Grey Goose`,
        price: '$425',
        type: 'Vodka'
      },
      {
        id: 3,
        name: `Ketel One`,
        price: '$400',
        type: 'Vodka'
      },
      {
        id: 4,
        name: `Don Julio 1942`,
        price: '$850',
        type: 'Tequila'
      },
      {
        id: 5,
        name: `Casamigos Blanco`,
        price: '$450',
        type: 'Tequila'
      },
      {
        id: 6,
        name: `Casamigos Reposado`,
        price: '$475',
        type: 'Tequila'
      },
      {
        id: 7,
        name: `Casamigos Añejo`,
        price: '$500',
        type: 'Tequila'
      },
      {
        id: 8,
        name: `Patrón Silver`,
        price: '$475',
        type: 'Tequila'
      },

      {
        id: 9,
        name: `La Luna`,
        price: '$400',
        type: 'Mezcal'
      },
      {
        id: 10,
        name: `Bombay Sapphire`,
        price: '$375',
        type: 'Gin'
      },
      {
        id: 11,
        name: `Hendrick's`,
        price: '$425',
        type: 'Gin'
      },
      {
        id: 12,
        name: `D'ussé`,
        price: '$450',
        type: 'Cognac'
      },
      {
        id: 13,
        name: `Hennessy`,
        price: '$475',
        type: 'Cognac'
      },
      {
        id: 14,
        name: `Johnnie Walker Black`,
        price: '$450',
        type: 'Scotch'
      },
      {
        id: 15,
        name: `Jameson`,
        price: '$425',
        type: 'Irish Whiskey'
      },
      {
        id: 16,
        name: `Maker's Mark`,
        price: '$425',
        type: 'Kentucky straight Bourbon'
      },
      {
        id: 17,
        name: `Knob Creek`,
        price: '$475',
        type: 'Kentucky straight Bourbon'
      },
      {
        id: 18,
        name: `Suntory Toki`,
        price: '$550',
        type: 'Japanese Whiskey'
      }
    ]
  }
  const champagnes = {
    champagne: [
      {
        id: 1,
        name: 'Veuve Clicquot',
        price: '$200',
        type: 'Brut',
        origin: 'France'
      },
      {
        id: 2,
        name: 'Veuve Clicquot Rosé',
        price: '$225',
        type: 'Sparkling Cuvée',
        origin: 'France'
      },
      {
        id: 3,
        name: 'Perrier Jouët Belle Epoque',
        price: '$350',
        type: 'Brut',
        origin: 'France'
      },
      {
        id: 4,
        name: 'Dom Pérignon',
        price: '$450',
        type: 'Brut',
        origin: 'France'
      }
    ]
  }
  const extras = {
    extras: [
      {
        id: 1,
        name: 'Red Bull',
        price: '$25',
        type: '4-pack'
      },
      {
        id: 2,
        name: 'Liquid Death',
        price: '$20',
        type: '5-pack'
      }
    ]
  }
  const accompaniments = {
    accompaniments: [
      {
        id: 1,
        name: 'Q-Soda'
      },
      {
        id: 2,
        name: 'Q-Tonic'
      },
      {
        id: 3,
        name: 'Q-Kola'
      },
      {
        id: 4,
        name: 'Q-Gingerbeer'
      },
      {
        id: 5,
        name: 'Q-Grapefruit Soda'
      },
      {
        id: 6,
        name: 'Q-Margarita Mix',
        upcharge: '+10'
      },
      {
        id: 7,
        name: 'Sprite'
      },
      {
        id: 8,
        name: 'Gingerale'
      },
      {
        id: 9,
        name: 'Cranberry'
      },
      {
        id: 10,
        name: 'Cold-Pressed Pineapple',
        upcharge: '+10'
      },
      {
        id: 11,
        name: 'Cold-Pressed Lemon Juice',
        upcharge: '+10'
      },
      {
        id: 12,
        name: 'Cold-Pressed Lime Juice',
        upcharge: '+10'
      }
    ]
  }
  // happy hour
  const highball = {
    highballs: [
      {
        id: 1,
        name: 'Paradise Ginza',
        desc: 'frat boy highball',
        ingredients: 'Suntory Toki + very fizzy soda water, lemon oil',
        sub: ''
      },
      {
        id: 2,
        name: 'Frenchman Knob',
        desc: 'frat boy highball',
        ingredients: 'Jim Beam Black + very fizzy soda water'
      },
      {
        id: 3,
        name: 'San Marcos Ranch Water',
        desc: 'frat boy highball',
        ingredients:
          'Hornitos Reposado, ancho pepper, hibiscus, lime + very fizzy soda water'
      }
    ]
  }
  const martinis = {
    martinis: [
      {
        id: 1,
        name: 'Espresso',
        ingredients: 'Grey Goose Vodka, Mr.Black, Borghetti, Bueno Days Coffee'
      },
      {
        id: 2,
        name: 'Cosmopolitan',
        ingredients: 'Grey Goose Vodka, Cointreau, cranberry, lime'
      },
      {
        id: 3,
        name: 'Dirty',
        ingredients: 'Botanist Gin, dry vermouth, olive brine'
      },
      {
        id: 4,
        name: 'Vesper',
        ingredients: 'Haku Vodka, Roku Gin, Cocchi Americano, lemon'
      }
    ]
  }
  const MORE = {
    more: [
      {
        id: 1,
        name: 'Luna Bay Palo Santo Blueberry',
        desc: '6°',
        type: `Hard Kombucha`,
        price: '$5'
      },
      {
        id: 2,
        name: 'Luna Bay Raspberry Rose',
        desc: '6°',
        type: `Hard Kombucha`,
        price: '$5'
      },
      {
        id: 3,
        name: `Moor's Brewing Co. Session Ale`,
        desc: '5°',
        type: 'Session Ale',
        price: '$6'
      },
      {
        id: 4,
        name: `Moor's Brewing Co. IPA`,
        desc: '6.7°',
        type: 'IPA',
        price: '$6'
      },
      {
        id: 5,
        name: `No Fine Print Lil Fizz Sparkling`,
        desc: '12.5°',
        type: 'Lake County, California',
        price: '$7'
      },
      {
        id: 6,
        name: `No Fine Print Cabernet Sauvignon`,
        desc: '14.5°',
        type: 'Lake County, California',
        price: '$7'
      },
      {
        id: 7,
        name: `Amass Faerie Fizz`,
        desc: '5°',
        type: 'Hard Seltzer',
        price: '$8'
      },
      {
        id: 8,
        name: `Chandon Garden Spritz`,
        desc: '11°',
        type: 'Wine Spritzer',
        price: '$8'
      }
    ]
  }
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/bottles'
            element={
              <>
                <BottlesNav />
                <Bottles
                  bottles={bottles}
                  champagnes={champagnes}
                  extras={extras}
                  accompaniments={accompaniments}
                />
                <Footer />
              </>
            }
          />
          <Route
            path='/happy-hour'
            element={
              <>
                <HappyNav />
                <HappyHour
                  highball={highball}
                  martinis={martinis}
                  more={MORE}
                />
                <Footer />
              </>
            }
          />
          <Route
            path='/full-menu'
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
                <Footer />
              </>
            }
          />
          <Route path='*' element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
