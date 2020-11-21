import React from 'react';
import global from '../../Global/';
import Card from '../../Components/Card/Card';
import {Link} from 'react-router-dom';
import logo from '../../assets/react.svg';
const Home = () => {
  return (
    <div style={global.container}>
      <h1 style={global.title}>Aqui você visualiza todos os Exércicios :)</h1>
      <Link to="/">
        <Card width={150} height={150} background="#f0f0f0" radius={3}>
          <img src={logo} alt="logo" style={global.image}/>
          <h3 style={global.title}>Filtros</h3>
        </Card>
      </Link>
    </div>
  );
};

export default Home;
