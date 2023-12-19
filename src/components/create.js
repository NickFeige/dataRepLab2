import { useState } from "react";
import axios from "axios";

function Create() {
    //creating an add function and setting a array
    const [shopItem, setshopItem] = useState('');
    const [price, setprice] = useState('');
    const [url, setUrl] = useState('');
    //my forms to add info
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("shopItem: "+shopItem+"price: "+price+"Url Cover: "+url);
        const book=({
            shopItem:shopItem,
            price:price,
            url:url,
        })
        axios.post('http://localhost:4000/api/book',book)
        .then()
        .catch();
    }
    return (
        //all my in put boxes 
        <div>
            <h3 style={{ color: 'white' }}>YOUR SHOPPING LIST </h3>
           
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label style={{ color: 'white' }}>What is the shopping item </label>
                    <input type="text"
                        className="form-control"
                        value={shopItem}
                        onChange={(e) => { setshopItem(e.target.value) }}
                        style={{ backgroundColor: '#f3a2b3', color: 'white',borderColor: 'white' }}
                    />
                </div>
                <div className="form-group">
                    <label style={{ color: 'white' }}>Add front page url: </label>
                    <input type="text"
                        className="form-control"
                        value={url}
                        onChange={(e) => { setUrl(e.target.value) }}
                        style={{ backgroundColor: '#f3a2b3', color: 'white'}}
                    />
                </div>
                <div className="form-group">
                    <label style={{ color: 'white' }}>What is the price: </label>
                    <input type="text"
                        className="form-control"
                        value={price}
                        onChange={(e) => { setprice(e.target.value) }}
                        style={{ backgroundColor: '#f3a2b3' , color: 'white'}}
                    />
                </div>
                <div>
                    <input type="submit" value="Add Item"style={{ backgroundColor: '#ea5075' , color: 'white',borderColor: 'white'}}></input>
                </div>
            
            
            </form>
            
            
        </div>
    );
}
export default Create;