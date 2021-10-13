import React, { useState } from 'react';
import Sresult from './Sresult';
const Search = () => {

    const [img, setImg] = useState("");
    const inputChange = (event) => {
        const data = event.target.value;
        setImg(data);
    }
    return (
        <div className="searchbar">
            <input type = "text"
             placeholder = "Enter your search value" 
             onChange = {inputChange} 
             value = {img}
             />
             {(img === "")?null : <Sresult name = {img} />}
        </div>
    )
}

export default Search;