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
      <h2>Hello World</h2>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
      <h3>Shop Items:</h3>
      <ul>
        {shopItems.map(item => (
          <li key={item._id}>
            <p>{item.shopItem}</p>
            <p>Price: {item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Content;