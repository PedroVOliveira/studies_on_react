import React from 'react';

const Card = ({width,height,children,background,radius}) => {
  return (
    <div style={{
      width: width,
      height: height,
      background:background,
      borderRadius:radius,
      display:'flex',
      justifyContent:'center',
      flexDirection:'column',
      alignItems:'center',
    }}>
      {children}
    </div>
  )
}

export default Card;
