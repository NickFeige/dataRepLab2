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
    const [url, setUrl] = useState("");
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
                setUrl(response.data.url);
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
            url: url,
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
                    <label>Add Book shopItem: </label>
                    <input type="text"
                        className="form-control"
                        value={shopItem}
                        onChange={(e) => setshopItem(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Add book cover: </label>
                    <input type="text"
                        className="form-control"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Add book price: </label>
                    <input type="text"
                        className="form-control"
                        value={price}
                        onChange={(e) => setprice(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input type="submit" value="Edit Book" className="btn btn-primary" />
                </div>
            </form>
        </div>
    );
}