let global;


if(window.innerWidth <= 738) {
  global = {
    container: {
      maxWidth:'90vw',
      margin:"0 auto"
    },
    title: {
      color:'red',
      fontFamily:'Arial,sans-serif'
    },
    image: {
      width:'50%',
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
      fontFamily:'Arial,sans-serif'
    },
    image: {
      width:'50%',
    }
  }
}


export default global;
