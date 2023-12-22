import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
export default function Edit(props) {
    // The useParams hook returns an object of key/value pairs of
    // the dynamic params from the current URL that were matched by
    //the <Route path>.
    let { id } = useParams();
    // update arrays using the React useState()
    // and without the Array objects push() method
    const [shopItem, setshopItem] = useState("");    
    const [price, setprice] = useState("");
    // useNavigate return a function that we can use to navigate
    const navigate = useNavigate();
    //useEffect Hook is similar componentDidMount
    useEffect(() => {
        //axios is a promised based web client
        //make a HTTP Request with GET method and pass as part of the
        //url.
        axios.get('http://localhost:4000/api/book/' + id)
            .then((response) => {
                // Assign Response data to the arrays using useState.
                setshopItem(response.data.shopItem);                
                setprice(response.data.price);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);
    const handleSubmit = (event) => {
        event.preventDefault();
        const newBook = {
            id: id,
            shopItem: shopItem,          
            price: price
        };
        axios.put('http://localhost:4000/api/book/' + id, newBook)
            .then((res) => {
                console.log(res.data);
                navigate('/read');
            });
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label style={{ color: 'white' }}>Change shopItem: </label>
                    <input type="text"
                        className="form-control"
                        value={shopItem}
                        onChange={(e) => setshopItem(e.target.value)}
                        style={{ backgroundColor: '#f3a2b3', color: 'white',borderColor: 'white' }}
                    />
                </div>
                
                <div className="form-group">
                    <label style={{ color: 'white' }}>change price: </label>
                    <input type="text"
                        className="form-control"
                        value={price}
                        onChange={(e) => setprice(e.target.value)}
                        style={{ backgroundColor: '#f3a2b3', color: 'white',borderColor: 'white' }}
                    />
                </div>
                <div className="form-group">
                    <input type="submit" value="Edit "style={{ backgroundColor: '#ea5075' , color: 'white',borderColor: 'white'}} className="btn btn-primary" />
                </div>
            </form>
        </div>
    );
}