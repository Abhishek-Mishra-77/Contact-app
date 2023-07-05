import React from 'react';

const Header = () => {

   const myStyle = {
      padding: "10px 20px 10px 16px",
     backgroundColor : '#042743',
     color:'white',
     fontWeight: 'bold'
   }

   return (
      <div className='ui fixed menu' style={myStyle}>
         <div className='ui container center'>
            <h2>Contect Manager</h2>
         </div>
      </div>
   )
}
export default Header;