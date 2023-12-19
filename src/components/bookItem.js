
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import Button  from 'react-bootstrap/Button';
import axios from 'axios';
function BookItem(props){
    //pulling data from the list array 
    return(
        //using cards to to display the info
        <div>       
            <Card>
            <Card.Header style={{ backgroundColor: '#fbd4dc', color: 'white',borderColor: 'white' }}>{props.myBook.shopItem}</Card.Header>    
            <Card.Body style={{ backgroundColor: '#fbd4dc', color: 'white',borderColor: 'white' }}><blockquote>
                
                <footer>{props.myBook.price}</footer>
                </blockquote>
            </Card.Body>
            <Link to ={"/edit/"+props.myBook._id}className='btn btn-primary'  style={{ backgroundColor: '#f3a2b3', color: 'white',borderColor: 'white' }}>edit</Link>
            <Button style={{ backgroundColor: '#ea5075' , color: 'white',borderColor: 'white'}} onClick={(e)=>{
                axios.delete('http://localhost:4000/api/book/'+props.myBook._id)
                .then((res)=>{
                    let reload=props.reload();
                })
                .catch();
            }}>Delete</Button>
            </Card>
            
        </div>    
    );
}
export default BookItem;




