import { useEffect, useState } from "react";
import Shopping from "./shopping";
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
const ReloadData=(e)=>{
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
}
//reloads after delete
    return(
        <div style={{ backgroundColor: '#fbd4dc',color: 'white'   }}>
            <h3 style={{ color: 'white' }} >EDIT SHOPPING LIST </h3>
            
            <Shopping myBooks={data} reload={ReloadData}></Shopping>
        </div>


    )
}
export default Read;