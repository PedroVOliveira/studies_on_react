let global;


if(window.innerWidth <= 738) {
  global = {
    container: {
      maxWidth:'90vw',
      margin:"0 auto",
    },
    title: {
      color:'black',
      fontFamily:'Roboto,sans-serif'
    },
    image: {
      width:'50%',
    },
    cards: {
      display:'grid',
      gridTemplateColumns:'0.5fr 0.5fr',
      gridTemplateRows: '0.5fr',
    },
    card: {
      // margin:'0 15px',
    }
  }
}

if(window.innerWidth >= 1024) {
  global = {
    container: {
      maxWidth:'1100px',
      margin:"0 auto"
    },
    title: {
      color:'black',
      fontFamily:'Roboto,sans-serif'
    },
    image: {
      width:'50%',
    }
  }
}


export default global;
