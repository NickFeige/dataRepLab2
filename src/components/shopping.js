import ShoppingItem from "./shoppingItem";

function Shopping(props){
    //adding the array to map it out  
    return props.myBooks.map(
        //arrow method pushing it to book items
        (book)=>{
            //pushes and deletes
            return<ShoppingItem myBook={book} key={book._id} reload={()=>{props.reload();}}></ShoppingItem>
        }
    )
        
}
export default Shopping;

