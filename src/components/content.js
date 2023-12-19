import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Content() {
  const [shopItems, setShopItems] = useState([]);

  useEffect(() => {
    // Fetch shop items from the server when the component mounts
    axios.get('http://localhost:4000/api/book')
      .then(response => setShopItems(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      
      <h1 style={{ color: 'white' }}>It is {new Date().toLocaleTimeString()}.</h1>
      <h1 style={{ color: 'white' }}>Shop Items:</h1>
      <ul>
        {shopItems.map(item => (
          <li key={item._id} style={{ color: 'white' }}>
            <h3 style={{ color: 'white' }}>{item.shopItem}</h3>
            <h3 style={{ color: 'white' }}>Price: {item.price}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Content;