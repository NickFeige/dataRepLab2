
import Card from 'react-bootstrap/Card';

function BookItem(props){
    //pulling data from the list array 
    return(
        //using cards to to display the info
        <div>       
            <Card>
            <Card.Header>{props.myBook.title}</Card.Header>    
            <Card.Body><blockquote>
                <img src={props.myBook.url}></img>
                <footer>{props.myBook.author}</footer>
                </blockquote>
            </Card.Body>
    
            </Card>
            
        </div>    
    );
}
export default BookItem;