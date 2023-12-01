import BookItem from "./bookItem";

function Books(props){
    //adding the array to map it out  
    return props.myBooks.map(
        //arrow method pushing it to book items
        (book)=>{
            //pushes and deletes
            return<BookItem myBook={book} key={book._id} reload={()=>{props.reload();}}></BookItem>
        }
    )
        
}
export default Books;