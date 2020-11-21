import React from 'react';
import global from '../../Global/';
import Card from '../../Components/Card/Card';
import {Link} from 'react-router-dom';
import logo from '../../assets/react.svg';
import data from '../../services/';
const Home = () => {
  const [exercices,setExercicies] = React.useState(null);

  React.useEffect(()=> {
    setExercicies(data());
  },[])

  return (
    <div style={global.container}>
      <h1 style={global.title}>Aqui você visualiza todos os Exércicios :)</h1>
      <div style={global.cards}>
        {exercices && exercices.map(({title,id}) => (
          <Link to ="/" key={id} style={global.card}>
            <Card width={150} height={150} background="#f0f0f0" radius={3}>
              <img src={logo} alt="logo" style={global.image}/>
              <h3 style={global.title}>{title}</h3>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
