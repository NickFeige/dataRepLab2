import { useState } from "react";

function Create() {
    //creating an add function and setting a array
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [url, setUrl] = useState('');
    //my forms to add info
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Title: "+title+"Author: "+author+"Url Cover: "+url);
    }
    return (
        <div>
            <h3>hello from create</h3>
           
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Add Book Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Add Book Aurthor: </label>
                    <input type="text"
                        className="form-control"
                        value={author}
                        onChange={(e) => { setAuthor(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Add front page url: </label>
                    <input type="text"
                        className="form-control"
                        value={url}
                        onChange={(e) => { setUrl(e.target.value) }}
                    />
                </div>
                <div>
                    <input type="submit" value="Add book"></input>
                </div>
            
            
            </form>
            
            
        </div>
    );
}
export default Create;