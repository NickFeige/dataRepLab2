import { useEffect, useState } from "react";
import Books from "./books";
//imported axious
import axios from "axios";

function Read(){
//assingning data to a empty array
const [data,setData]= useState([]);
   
//acess to the api method
useEffect(
    ()=>{
        
        axios.get('http://localhost:4000/api/book')
        .then(
            (response)=>{
                setData(response.data);
            }
        )
        .catch(
            (error)=>{
                console.log(error);
            }
        )            
    },[]
);

    return(
        <div>
            <h3>hello from read</h3>
            <Books myBooks={data}></Books>
        </div>
    )
}
export default Read;