import BookItem from "./bookItem";

function Books(props){
    //adding the array to map it out  
    return props.myBooks.map(
        //arrow method pushing it to book items
        (book)=>{
            return<BookItem myBook={book}></BookItem>
        }
    )
        
}
export default Books;