const content = {
  nav: {
    logo: process.env.PUBLIC_URL + '/assets/BBlogo.png',
    logoWhite: process.env.PUBLIC_URL + '/assets/BBlogowhite.png',
    favicon: process.env.PUBLIC_URL + '/assets/BBlogoCrop.png',
    faviconWhite: process.env.PUBLIC_URL + '/assets/BBlogowhitecrop.png',
    workLink: ['Cocktails', 'Wine', 'Beer', 'Zeros & Snacks', 'Spirits'],
    bottlesLink: ['Bottles', 'Champagne', 'Extras'],
    happyLink: ['Highballs', 'Martinis', 'More']
  },
  header: {
    img: process.env.PUBLIC_URL + '/assets/developer.png',

    imgPlaceholder: 'https://wallpaperaccess.com/full/1129018.jpg',
    text: ['Blind Barber'],
    subText: ['Page 1', 'Wine', 'Beer'],
    btnText: `but wait, there's more!`
  },

  specialtyCocktails: {
    shaken: [
      {
        name: 'Strawberry Fields',
        desc: 'ripe strawberry with a punch',
        ingredients: `Tito's Vodka, Cocchi Rosa, chartreuse, strawberry, lemon`
      },
      {
        name: 'Hot Heather',
        desc: 'taste of the tropics with zippy, gingery heat',
        ingredients: `Don Julio Blanco Tequila, Mango Brandy, grapefruit, ginger, lime`
      }
    ],
    stirred: [
      {
        name: 'Strawberry Fields',
        desc: 'ripe strawberry with a punch',
        ingredients: `Tito's Vodka, Cocchi Rosa, chartreuse, strawberry, lemon`
      },
      {
        name: 'Hot Heather',
        desc: 'taste of the tropics with zippy, gingery heat',
        ingredients: `Don Julio Blanco Tequila, Mango Brandy, grapefruit, ginger, lime`
      }
      
    ],
    spritz: [
      {
        name: 'Strawberry Fields',
        desc: 'ripe strawberry with a punch',
        ingredients: `Tito's Vodka, Cocchi Rosa, chartreuse, strawberry, lemon`
      },
      {
        name: 'Hot Heather',
        desc: 'taste of the tropics with zippy, gingery heat',
        ingredients: `Don Julio Blanco Tequila, Mango Brandy, grapefruit, ginger, lime`
      }
    ]
  },
  
 
}
export default content;
