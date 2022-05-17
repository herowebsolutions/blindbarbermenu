const content = {
  nav: {
    logo: process.env.PUBLIC_URL + '/assets/BBlogo.png',
    favicon: process.env.PUBLIC_URL + '/assets/BBlogoCrop.png',
    workLink: ['Specialty', 'Wine', 'Beer', 'Zero Proof']
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
  projects: [
    {
      title: 'Web Design',
      desc:
        'I value simple content structure, clean design patterns, and thoughtful interactions.',
      langs: 'WORDPRESS, SQUARESPACE, SHOPIFY',
      href: '#',
      tools: 'SEO',
      icon: 'https://cdn-icons-png.flaticon.com/512/711/711284.png',
      placeholder: ''
    },
    {
      title: 'Back End',
      desc:
        'I like to code things from scratch, and enjoy bringing ideas to life in the browser using:',
      href: '#',
      langs: 'PWAS, MERN, CRUD',
      tools: 'Node, Git, Firebase, AWS',
      icon: 'https://cdn-icons-png.flaticon.com/512/984/984196.png'
    },
    {
      title: 'Front End',
      desc:
        'I value simple content structure, clean design patterns, and thoughtful interactions using:',
      langs: 'UI, UX, WEB',
      href: '#',
      tools:
        'Html, Css, Js, React, Tailwind, Bootstrap, Bulma, Material UI, Hosting',
      icon: 'https://cdn-icons-png.flaticon.com/512/711/711284.png'
    }
  ],
  collabs: [
    {
      title: 'Company 1',
      size: 'Website',
      source: 'https://picsum.photos/id/1059/440/467?grayscale'
    },
    {
      title: 'Company 2',
      size: 'Website',
      source: 'https://picsum.photos/id/326/440/467?grayscale'
    },
    {
      title: 'Company 3',
      size: 'Website',
      source: 'https://picsum.photos/id/1060/440/467?grayscale'
    },
    {
      title: 'Company 4',
      size: 'Website',
      source: 'https://picsum.photos/id/341/440/467?grayscale'
    }
  ],
  links: [
    {
      title: 'Github',
      link: 'https://github.com/rodriguezh21',
      img:
        'https://joshuapenalba.files.wordpress.com/2014/12/github-icon.png?w=640'
    },
    {
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/in/herson-rodriguez/',
      img:
        'https://www.freeiconspng.com/uploads/displaying-19-gallery-images-for-linkedin-logo-png-25.png'
    },
    {
      title: 'Email',
      link: 'mailto:rodriguezh21@gmail.com?subject=',
      img:
        'https://4vector.com/i/free-vector-mail-icon-clip-art_116904_Mail_Icon_clip_art_hight.png'
    }
  ]
}
export default content;
