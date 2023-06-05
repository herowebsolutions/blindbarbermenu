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
import Events from './components/Events'

function App () {
  // temp menu
  const temp = {
    temp: [
      {
        id: 1,
        name: `Sebby's Wings`,
        ingredients: 'Your choice of either 5 whole lemon pepper "Chicago Style" wings with Mild Sauce or 10 "Party Style" buffalo wings with pickled Thai Chilis and Pink Salt Ranch',
        price: '$16'
      },
      {
        id: 2,
        name: `Deli Burger`,
        desc: '',
        ingredients: 'Double Patty, American Cheese, Shredded Lettuce, Red Onion, Tomato, Banana Peppers, and Salami on a hoagie. served with Jalapeno chips',
        price: '$17'
      },

    ]
  }
  // temp menu
  const signature = {
    signature: [
      
      {
        id: 1,
        name: 'Strawberry Fields',
        desc: 'ripe strawberry with a punch',
        ingredients: `Ketel One Vodka, Cochi Rosa, Merlet Creme Fraise, lemongrass, lemon`
      },
      {
        id: 2,
        name: 'Hot Heather',
        desc: 'taste of the tropics with zippy, gingery heat',
        ingredients: `Don Julio Blanco Tequila, Combier Pamplemousse, koval ginger, St. George Green Chile, lime`
      },
      {
        id: 3,
        name: 'White Ferrari',
        desc: 'taste of the tropics with zippy, gingery heat',
        ingredients: `Casamigos Reposado, Pineau de Charentes, spiced pear, lime`
      },
      {
        id: 4,
        name: 'Young Forever',
        desc: 'taste of the tropics with zippy, gingery heat',
        ingredients: `La Luna Mezcal, blanc vermouth, grapefruit, lime, salt + Topo Chico`
      },
      {
        id: 5,
        name: 'Batman',
        desc: 'taste of the tropics with zippy, gingery heat',
        ingredients: `Hendrick's Neptunia, Cocchi Americano, St. Germain, lemon, cava, absinthe`
      },
      {
        id: 6,
        name: 'Better Guess',
        desc: 'taste of the tropics with zippy, gingery heat',
        ingredients: `Rosaluna, Bols Genever, blanc vermouth, Bechervovka, Avezé`
      },
      {
        id: 7,
        name: 'Southern Charm',
        desc: 'taste of the tropics with zippy, gingery heat',
        ingredients: `Jack Daniel Bonded, Chinola Passion Fruit, Koval Ginger, Lemon`
      }
    ]
  }
  const classic = {
    classic: [
      {
        id: 1,
        name: 'Cosmopolitan',
        desc: 'ripe strawberry with a punch',
        ingredients: `Belvedere, Combier, cranberry, lime`
      },
      {
        id: 2,
        name: 'Permanent Vacation',
        desc: 'ripe strawberry with a punch',
        ingredients: `Ron Zacapa, Monkey Shoulder, Braulio, Creme de Banana, Pineapple, Lime, Chinese 5 spice`
      },

      {
        id: 3,
        name: 'Espresso Martini',
        desc: 'ripe strawberry with a punch',
        ingredients: `Ketel One Vodka, Borghetti, Mr Black, Kyoto Black Coffee`
      },
      {
        id: 4,
        name: 'Gin Martini',
        desc: 'ripe strawberry with a punch',
        ingredients: `Bombay Sapphire & dry vermouth, dirty or with a lemon twist`
      },

    ]
  }
  const fancy = {
    fancy: [
      {
        id: 1,
        name: 'Fancy Old Fashioned',
        desc: 'ripe strawberry with a punch',
        ingredients: `Legent Bourbon, Demerara, Angostura, orange`,
        price: '$20'
      },
      {
        id: 2,
        name: 'Fancy French 75',
        desc: 'ripe strawberry with a punch',
        ingredients: `Tanqueray 10 or Hennessy VS, Lemon, Moet Split`,
        price: '$30'
      },
      {
        id: 3,
        name: 'Fancy Margarita',
        desc: 'ripe strawberry with a punch',
        ingredients: `Volcán Cristalino, Combier, Lime`,
        price: '$24'
      },
      
      
    ]
  }
  const nightCaps = {
    nightCaps: [
      {
        id: 1,
        name: 'Fernet Branca',
        desc: '39%',
        origin: `Milan, Italy`,
        price: '$10'
      },
      {
        id: 2,
        name: 'Malort',
        desc: '35%',
        origin: `Chicago, Illinois`,
        price: '$8'
      },
      {
        id: 3,
        name: 'Montenegro',
        desc: '46%',
        origin: `Bologna, Italy`,
        price: '$11'
      },
      {
        id: 4,
        name: 'Skrewball',
        desc: '35%',
        origin: `San Diego, California`,
        price: '$10'
      }
    ]
  }
  const highballs = {
    highballs: [
      {
        id: 1,
        name: `Rollin’ Rye`,
        desc: 'classic Japanese highball',
        ingredients:
          'Dickel Rye, Aperol, Very Bubbly Water, lemon Swath',
        price: '$14'
      },
      {
        id: 2,
        name: `Southside Ricky`,
        desc: 'classic Japanese highball',
        ingredients:
          'Roku Gin, Lemon, Mint + Very Bubbly water',
        price: '$14'
      },
      {
        id: 3,
        name: 'Paradise Ginza',
        desc: 'frat boy highball',
        ingredients: 'Suntory Toki + very fizzy soda water, lemon oil',
        price: '$11'
      },
      {
        id: 4,
        name: 'Bright Lights',
        desc: 'frat boy highball',
        ingredients:
          'Haku Vodka, Aperol, Red Bull Red Edition (Watermelon), Topo Chico',
        price: '$13'
      },
      {
        id: 5,
        name: 'San Marcos Ranch Water',
        desc: 'frat boy highball',
        ingredients:
          'Tequila Arette Reposado, Ancho Pepper, Hibiscus, Lime + Very Bubbly Water',
        price: '$13'
      },
      {
        id: 6,
        name: 'Getaway',
        desc: 'frat boy highball',
        ingredients:
          'Jose Cuervo Traditional, orange juice, lime, Red Bull Yellow Edition (Tropical)',
        price: '$13'
      }
    ]
  }
  const wine = {
    wine: [
      {
        id: 1,
        name: `Pra 2021 'Otto' Soave Classico`,
        price: '$14/$62',
        origin: 'Veneto, Italy',
        vol: '13%'
      },
      {
        id: 2,
        name: 'Grapesmith & Crusher 2020 Pinot Noir',
        price: '$14/$64',
        origin: 'Willamette, CA',
        vol: '13%'
      },

      {
        id: 3,
        name: 'No Fine Print Cabernet Sauvignon',
        price: '$12/$54',
        origin: 'Lake County, CA',
        vol: '14.5%'
      },
      {
        id: 4,
        name: `Le Fraghe 2021 Chiaretto Di Bardolino Rosé`,
        price: '$14/$62',
        origin: 'Veneto, Italy',
        vol: '12.5%'
      },
      {
        id: 5,
        name: `Altos Del Plata 2021 Malbec`,
        price: '$14/$62',
        origin: 'Mendoza, Argentina',
        vol: '13.5%'
      },
    ]
  }

  const rose = {
    rosé: [
      {
        id: 1,
        name: 'Jeio Cuvee Sparkling Rosé',
        price: '$14/$62',
        origin: 'Veneto, Italy',
        vol: '11.5%'
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
        vol: '11.5%'
      },
      {
        id: 2,
        name: 'Campa Viejo Cava',
        price: '$14/$62',
        origin: 'Logrono, Spain',
        vol: '11.5%'
      },
      
      
    ]
  }
  const champagne = {
    champagne: [
      {
        id: 1,
        name: 'Moët Split',
        price: '$25',
        origin: 'Champagne, France',
        vol: '12.2%'
      },
      {
        id: 2,
        name: 'Veuve Clicquot Brut',
        price: '$250',
        origin: 'Champagne, France',
        vol: '12%'
      },
      {
        id: 3,
        name: 'Veuve Clicquot Rosé',
        price: '$300',
        origin: 'Champagne, France',
        vol: '12.5%'
      },
      {
        id: 4,
        name: 'Dom Pérignon',
        price: '$450',
        origin: 'Champagne, France',
        vol: '12.5%'
      }
    ]
  }
  const draft = {
    draft: [
      
      {
        id: 1,
        name: 'High Life',
        price: '$7',
        desc: 'American Style Lager',
        vol: '4.6%'
      },
      {
        id: 2,
        name: 'Cruz Blanca Mexico Calling',
        price: '$9',
        desc: 'Lager',
        vol: '4.7%'
      },

      {
        id: 3,
        name: 'Blue Moon',
        price: '$9',
        desc: 'Belgian Wheat Ale',
        vol: '5.4%'
      },
      {
        id: 4,
        name: `Leinenkugel’s Summer Shandy`,
        price: '$8',
        desc: 'Weiss',
        vol: '4.2%'
      },
      {
        id: 5,
        name: 'Moors Beer Co',
        price: '$10',
        desc: 'Porter',
        vol: '6%'
      },

    ]
  }
  const canned = {
    canned: [
      {
        id: 1,
        name: 'Peroni',
        price: '$9',
        desc: 'Italian Lager',
        vol: '5.1%'
      },
      {
        id: 2,
        name: 'Coors Light',
        price: '$6',
        desc: 'Light Lager',
        vol: '4.2%'
      },
      {
        id: 3,
        name: 'Coors Banquet',
        price: '$6',
        desc: 'American Pale Lager',
        vol: '5%'
      },
      {
        id: 4,
        name: 'Modelo',
        price: '$8',
        desc: 'Mexican Lager',
        vol: '4.4%'
      },
      
      {
        id: 5,
        name: 'Spiteful Alley Time',
        price: '$7',
        desc: 'Pale Ale',
        vol: '6%'
      },
      {
        id: 6,
        name: 'Lagunitas Lil Sumpin Sumpin',
        price: '$10',
        desc: 'Wheat IPA',
        vol: '7.5%'
      },
      {
        id: 7,
        name: 'Hop Valley Bubble Stash',
        price: '$8',
        desc: 'IPA',
        vol: '6.2%'
      },
      {
        id: 8,
        name: `Moor's Brewing Co. Session Ale`,
        vol: '5%',
        desc: 'Session Ale',
        price: '$10'
      },
      {
        id: 9,
        name: `Moor's Brewing Co. IPA`,
        vol: '6.7%',
        desc: 'IPA',
        price: '$10'
      },
      {
        id: 10,
        name: 'High Noon',
        price: '$11',
        desc: 'Hard Seltzer',
        vol: '4.5%'
      },
      {
        id: 11,
        name: 'Amass Seltzer',
        price: '$12',
        desc: 'Hard Seltzer',
        vol: '5%'
      },
      {
        id: 12,
        name: 'System Seltzer Mango',
        price: '$10',
        desc: 'Hard Seltzer',
        vol: '5%'
      },
      {
        id: 13,
        name: 'SKRT',
        price: '$10',
        desc: 'Hard Seltzer',
        vol: '5%'
      },
      {
        id: 14,
        name: 'Visitor Lager',
        price: '$8',
        desc: 'Gluten-Reduced, non-alcoholic beer',
        vol: '0.5%'
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
        desc: 'Energy Drink | Sugarfree | Watermelon | Tropical'
      },
      {
        id: 3,
        name: 'Spring Water',
        price: '$5',
        desc: 'Liquid Death Still | Topo Chico Mineral Water'
      }
    ]
  }
  const snacks = {
    snacks: [
      
      {
        id: 1,
        name: 'French Fries',
        desc: 'Add J.P. Graziano Giardiniera +$2',
        ingredients: 'House cut kennebec potatoes, seasoned salt, fancy ketchup',
        price: '$8'
      },
      {
        id: 2,
        name: 'Crab Rangoon',
        desc: '',
        ingredients: 'Fried wonton rapper, cream cheese, crab, thai chili sauce',
        price: '$9'
      },
      {
        id: 3,
        name: `Seb's Secret Nuggets`,
        ingredients: `Big nugs, franks, truff ranch`,
        price: '$15'
      },
      {
        id: 4,
        name: `Seb's berbere Nashville hot nuggets`,
        desc: '',
        ingredients: 'Big nugs, berbere Nashville hot, fermented garlic honey, truff ranch',
        price: '$17'
      },
      {
        id: 5,
        name: `Lemon Pepper hot buffalo wings`,
        ingredients: `Lemon pepper buffalo, truff ranch`,
        price: '$13'
      },
      
      {
        id: 6,
        name: 'Marinated Olives',
        desc: '',
        ingredients: 'House Marinated Olives',
        price: '$8'
      },
      {
        id: 7,
        name: 'Bar nuts',
        desc: '*Contains fish and Allium',
        ingredients: 'Fried peanuts, lime leaves, chilis',
        price: '$9'
      },
      
    ]
  }
  const sandwiches = {
    sandwiches: [
      
      
      
      {
        id: 1,
        name: 'BB Burger',
        desc: '',
        ingredients: 'Two 4oz beef patties, crispy shallots, pickled smoked, American cheese, roasted onion dijonaise',
        desc: 'Served with garlic chips',
        price: '$20'
      },
      {
        id: 2,
        name: `Traditional Grilled Cheese`,
        ingredients: `American cheese, smoked mozzarella, sharp cheddar, creamy tomato soup`,
        price: '$15'
      },
      {
        id: 3,
        name: `Fancy Grilled Cheese`,
        ingredients: `American cheese, Manchego, chorizo, fig preserve, pickled onions`,
        price: '$15'
      },
      
      
      
    ]
  }
  const spirits = {
    spirits: [
      {
        id: 82,
        name: 'Belvedere',
        price: '$16',
        vol: '',
        title: 'Vodka'
      },
      {
        id: 1,
        name: 'Deep Eddy',
        price: '$12',
        vol: '',
        title: ''
      },
      {
        id: 2,
        name: 'Grey Goose',
        price: '$16',
        vol: ''
      },
      {
        id: 3,
        name: 'Haku',
        price: '$15',
        vol: ''
      },
      {
        id: 4,
        name: 'Ketel One',
        price: '$16',
        vol: ''
      },
      {
        id: 5,
        name: 'Titos',
        price: '$14',
        vol: ''
      },
      
      {
        id: 6,
        name: 'Botanist',
        price: '$14',
        vol: '',
        title: 'Gin'
      },
      {
        id: 7,
        name: 'Bombay',
        price: '$14',
        vol: ''
      },
      {
        id: 8,
        name: 'Bombay Bramble',
        price: '$14',
        vol: ''
      },
      {
        id: 9,
        name: 'Hendricks',
        price: '$15',
        vol: ''
      },
      {
        id: 10,
        name: 'Roku',
        price: '$14',
        vol: ''
      },
      
      {
        id: 11,
        name: 'Tanqueray 10',
        price: '$14',
        vol: ''
      },
      {
        id: 12,
        name: 'Bacardi White',
        price: '$13',
        vol: '',
        title: 'Rum'
      },
      {
        id: 13,
        name: 'Bacardi 8',
        price: '$16',
        vol: ''
      },
      {
        id: 14,
        name: 'Leblon',
        price: '$13',
        vol: ''
      },
      {
        id: 15,
        name: 'Mount Gay Black Barrel',
        price: '$14',
        vol: ''
      },
      {
        id: 16,
        name: 'Rhum JM Agricole',
        price: '$14',
        vol: ''
      },
      {
        id: 82,
        name: 'Ron Zacapa 23',
        price: '$15',
        vol: ''
      },
      
      {
        id: 17,
        name: 'Casamigos Blanco',
        price: '$16',
        vol: '',
        title: 'Tequila'
      },
      {
        id: 18,
        name: 'Casamigos Reposado',
        price: '$18',
        vol: ''
      },
      {
        id: 19,
        name: 'Casamigos Añejo',
        price: '$20',
        vol: ''
      },
      
      {
        id: 20,
        name: 'Cincoro Blanco',
        price: '$25',
        vol: ''
      },
      {
        id: 21,
        name: 'Cincoro Reposado',
        price: '$27',
        vol: ''
      },
      {
        id: 22,
        name: 'Cincoro Añejo',
        price: '$29',
        vol: ''
      },
      {
        id: 23,
        name: 'Clase Azul Reposado',
        price: '$42',
        vol: ''
      },
      {
        id: 24,
        name: 'Clase Azul Plata',
        price: '$30',
        vol: ''
      },
      {
        id: 25,
        name: 'Clase Azul Gold',
        price: '$78',
        vol: ''
      },
      {
        id: 26,
        name: 'Clase Azul Añejo',
        price: '$120',
        vol: ''
      },
      {
        id: 27,
        name: 'Don Julio Blanco',
        price: '$16',
        vol: ''
      },
      {
        id: 28,
        name: 'Don Julio Reposado',
        price: '$18',
        vol: ''
      },
      {
        id: 29,
        name: 'Don Julio Añejo',
        price: '$20',
        vol: ''
      },
      {
        id: 30,
        name: 'Don Julio Primavera',
        price: '$33',
        vol: ''
      },
      {
        id: 31,
        name: 'Don Julio 1942',
        price: '$42',
        vol: ''
      },
      {
        id: 32,
        name: 'Don Julio Ultima Reserva',
        price: '$115',
        vol: ''
      },
      {
        id: 33,
        name: 'Fortaleza Blanco',
        price: '$17',
        vol: ''
      },
      {
        id: 34,
        name: 'Fortaleza Reposado',
        price: '$19',
        vol: ''
      },
      {
        id: 35,
        name: 'Fortaleza Añejo',
        price: '$23',
        vol: ''
      },
      {
        id: 36,
        name: 'Hornitos Reposado',
        price: '$15',
        vol: ''
      },
      {
        id: 37,
        name: 'John Basil Blanco',
        price: '$17',
        vol: ''
      },
      {
        id: 38,
        name: 'John Basil Reposado',
        price: '$19',
        vol: ''
      },
      
      {
        id: 39,
        name: 'Lunazul',
        price: '$12',
        vol: ''
      },
      {
        id: 40,
        name: 'Patrón Silver',
        price: '$15',
        vol: ''
      },
      {
        id: 41,
        name: 'Patrón Reposado',
        price: '$17',
        vol: ''
      },
      {
        id: 42,
        name: 'Patrón Añejo',
        price: '$18',
        vol: ''
      },
      {
        id: 43,
        name: 'Mijenta Reposado',
        price: '$18',
        vol: ''
      },
      {
        id: 44,
        name: 'Herradura Silver',
        price: '$16',
        vol: ''
      },
      {
        id: 45,
        name: 'Herradura Reposado',
        price: '$18',
        vol: ''
      },
      {
        id: 73,
        name: 'Volcán Blanco',
        price: '$16',
        vol: ''
      },
      {
        id: 74,
        name: 'Volcán Reposado',
        price: '$18',
        vol: ''
      },
      {
        id: 75,
        name: 'Volcán Crystalino',
        price: '$20',
        vol: ''
      },
      {
        id: 76,
        name: 'Volcán XA',
        price: '$36',
        vol: ''
      },
      {
        id: 77,
        name: 'Reserva De Familia',
        price: '$20',
        vol: ''
      },
      {
        id: 78,
        name: '1800 Crystalino',
        price: '$20',
        vol: ''
      },
      
      {
        id: 46,
        name: 'Amaras Cupreata',
        price: '$16',
        vol: '',
        title: 'Mezcal'
      },
      {
        id: 47,
        name: 'La Luna X Blind Barber Private Batch',
        price: '$20',
        vol: ''
      },
      {
        id: 48,
        name: 'Fidencio',
        price: '$14',
        vol: ''
      },
      {
        id: 49,
        name: 'La Luna Cupreata',
        price: '$12',
        vol: ''
      },
      {
        id: 50,
        name: 'Del Maguey Vida',
        price: '$14',
        vol: ''
      },
      {
        id: 51,
        name: 'Rosaluna',
        price: '$14',
        vol: ''
      },
      {
        id: 52,
        name: 'George Dickel',
        price: '$14',
        vol: '',
        title: 'Rye'
      },
      {
        id: 53,
        name: 'High West Double',
        price: '$17',
        vol: ''
      },
      {
        id: 54,
        name: 'Old Overholt',
        price: '$14',
        vol: ''
      },
      {
        id: 55,
        name: 'Angels Envy',
        price: '$18',
        vol: '',
        title: 'Bourbon'
      },
      
      {
        id: 56,
        name: 'Jack Daniels',
        price: '$14',
        vol: ''
      },
      
      {
        id: 57,
        name: 'Knob Creek',
        price: '$14',
        vol: ''
      },
      {
        id: 58,
        name: `Maker's Mark`,
        price: '$15',
        vol: ''
      },
      {
        id: 59,
        name: 'Benchmark',
        price: '$12',
        vol: ''
      },
      {
        id: 60,
        name: 'Dewars White Label',
        price: '$14',
        vol: '',
        title: 'Scotch'
      },
      {
        id: 61,
        name: 'Dewars Japanese Smooth',
        price: '$14',
        vol: ''
      },
      {
        id: 62,
        name: 'Glenlivet 12 Year',
        price: '$14',
        vol: ''
      },
      {
        id: 63,
        name: 'Johnnie Walker Black',
        price: '$16',
        vol: ''
      },
      {
        id: 64,
        name: 'Johnnie Walker High Rye',
        price: '$16',
        vol: ''
      },
      {
        id: 79,
        name: 'Glenmorangie 10 years',
        price: '$15',
        vol: ''
      },
      {
        id: 65,
        name: 'Jameson',
        price: '$14',
        vol: '',
        title: 'Whiskey'
      },
      {
        id: 66,
        name: 'Roe & Co',
        price: '$12',
        vol: ''
      },
      {
        id: 67,
        name: 'Suntory Toki',
        price: '$15',
        vol: ''
      },
      {
        id: 68,
        name: `Jack Daniel's Bonded`,
        price: '$16',
        vol: ''
      },
      
      {
        id: 70,
        name: 'Hennessy VS',
        price: '$15',
        vol: '',
        title: 'Cognac'
      },
      {
        id: 80,
        name: 'Hennessy VSOP',
        price: '$22',
        vol: ''
      },
      {
        id: 81,
        name: 'Hennessy XO',
        price: '$70',
        vol: ''
      },
      {
        id: 71,
        name: 'Remy Martin 1738',
        price: '$19',
        vol: ''
      },
      {
        id: 72,
        name: 'Remy Martin VSOP',
        price: '$16',
        vol: ''
      },
      
    ]
  }
  const top = {
    top: [
      {
        id: 1,
        name: 'Old rip van winkle 10 year',
        price: '$100'
      },
      {
        id: 2,
        name: 'Van winkle 12 year',
        price: '$150'
      },
      {
        id: 3,
        name: 'Pappy van winkle 15 year',
        price: '$250'
      },
      {
        id: 4,
        name: 'Thomas Handy Sazerac',
        price: '$125'
      },
      {
        id: 5,
        name: 'Clasa Azul Gold',
        price: '$78'
      },
      {
        id: 6,
        name: 'Clasa Azul Añejo',
        price: '$120'
      },
      {
        id: 7,
        name: 'Don Julio 1942 Ultima Reserva',
        price: '$115'
      },
      {
        id: 8,
        name: 'Remy Martin XO',
        price: '$45'
      },
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
        name: `Belvedere`,
        price: '$425',
        type: 'Vodka'
      },
      {
        id: 3,
        name: `Ketel One`,
        price: '$425',
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
        name: `Clase Azul Reposado`,
        price: '$900',
        type: 'Tequila'
      },
      {
        id: 6,
        name: `Casamigos Blanco`,
        price: '$450',
        type: 'Tequila'
      },
      {
        id: 7,
        name: `Casamigos Reposado`,
        price: '$475',
        type: 'Tequila'
      },
      {
        id: 8,
        name: `Casamigos Añejo`,
        price: '$500',
        type: 'Tequila'
      },
      {
        id: 9,
        name: `Volcán Blanco`,
        price: '$475',
        type: 'Tequila'
      },
      {
        id: 13,
        name: `Volcán XA`,
        price: '$750',
        type: 'Tequila'
      },

      {
        id: 10,
        name: `La Luna`,
        price: '$400',
        type: 'Mezcal'
      },
      {
        id: 11,
        name: `Bombay Sapphire`,
        price: '$375',
        type: 'Gin'
      },
      {
        id: 12,
        name: `Hendrick's`,
        price: '$450',
        type: 'Gin'
      },
      
      {
        id: 14,
        name: `Hennessy`,
        price: '$475',
        type: 'Cognac'
      },
      {
        id: 15,
        name: `Johnnie Walker Black`,
        price: '$450',
        type: 'Scotch'
      },
      {
        id: 16,
        name: `Jameson`,
        price: '$425',
        type: 'Irish Whiskey'
      },
      {
        id: 17,
        name: `Maker's Mark`,
        price: '$425',
        type: 'Kentucky straight Bourbon'
      },
      {
        id: 18,
        name: `Knob Creek`,
        price: '$475',
        type: 'Kentucky straight Bourbon'
      },
      {
        id: 19,
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
        price: '$250',
        type: 'Brut',
        origin: 'France'
      },
      {
        id: 2,
        name: 'Veuve Clicquot Rosé',
        price: '$300',
        type: 'Sparkling Cuvée',
        origin: 'France'
      },
      {
        id: 3,
        name: 'Moët & Chandon',
        price: '$300',
        type: 'Brut',
        origin: 'France'
      },
      {
        id: 4,
        name: 'Moët & Chandon Rosé',
        price: '$325',
        type: 'Brut',
        origin: 'France'
      },
      {
        id: 5,
        name: 'Dom Pérignon',
        price: '$450',
        type: 'Brut',
        origin: 'France'
      },
      {
        id: 6,
        name: 'Ace Of Spade Brut',
        price: '$700',
        type: 'Brut',
        origin: 'France'
      },
      {
        id: 7,
        name: 'Ace Of Spade Rosé',
        price: '$1,100',
        type: 'Brut',
        origin: 'France'
      },
    ]
  }
  const extras = {
    extras: [
      {
        id: 1,
        name: 'Red Bull',
        price: '$20',
        type: '4-pack'
      },
      {
        id: 2,
        name: 'Acqua Panna',
        price: '$25',
        type: '5-pack'
      }
    ]
  }
  const accompaniments = {
    accompaniments: [
      
      {
        id: 1,
        name: 'Topo Chico'
      },
      {
        id: 2,
        name: 'Q-Tonic'
      },
      {
        id: 3,
        name: 'Q-Gingerbeer'
      },
      {
        id: 4,
        name: 'Q-Grapefruit Soda'
      },
      {
        id: 5,
        name: 'Q-Margarita Mix',
        upcharge: '+10'
      },
      {
        id: 6,
        name: 'Coca-Cola'
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
        name: 'San Marcos Ranch Water',
        desc: 'frat boy highball',
        ingredients:
          'Tequila Arette Reposado, Ancho Pepper, Hibiscus, Lime + Very Bubbly Water'
      },
      {
        id: 3,
        name: 'Bright Lights',
        desc: 'frat boy highball',
        ingredients: 'Haku Vodka, Aperol, Watermelon Red Bull, Topo Chico'
      },
      {
        id: 4,
        name: 'Southside Ricky',
        ingredients: 'Roku Gin, Lemon, Mint + Very Bubbly water'
      },
    ]
  }
  const martinis = {
    martinis: [
      {
        id: 1,
        name: 'Espresso',
        ingredients: 'Ketel One Vodka, Bourgetti, Mr Black, Kyoto Black Coffee'
      },
      {
        id: 2,
        name: 'Cosmopolitan',
        ingredients: 'Belvedere Vodka, Combier, cranberry, Lime',
        
      },
      
      
    ]
  }
  const MORE = {
    more: [
      
      {
        id: 1,
        name: `Moor's Brewing Co. Session Ale`,
        desc: '5%',
        type: 'Session Ale',
        price: '$6'
      },
      {
        id: 2,
        name: `Moor's Brewing Co. IPA`,
        desc: '6.7%',
        type: 'IPA',
        price: '$6'
      },
      {
        id: 3,
        name: `No Fine Print Lil Fizz Sparkling`,
        desc: '12.5%',
        type: 'Lake County, California',
        price: '$7'
      },
      {
        id: 4,
        name: `No Fine Print Cabernet Sauvignon`,
        desc: '14.5%',
        type: 'Lake County, California',
        price: '$7'
      },
      {
        id: 5,
        name: `Amass Faerie Fizz`,
        desc: '5%',
        type: 'Hard Seltzer',
        price: '$8'
      },
      
    ]
  }

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/events'
            element={
              <>
                <Events 
                signature={signature}
                />
                
                <Footer />
              </>
            }
          />
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
                  temp={temp}
                />
                <Wine
                  wine={wine}
                  rose={rose}
                  bubbles={bubbles}
                  champagne={champagne}
                />
                <Beer draft={draft} canned={canned} />
                <Other other={other} snacks={snacks} sandwiches={sandwiches} temp={temp}/>
                <Spirits spirits={spirits} top={top} />
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
