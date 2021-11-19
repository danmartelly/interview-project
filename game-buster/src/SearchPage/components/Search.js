import { useState } from 'react';

function Search({
    onSearchHandler,
    placeholder
})
{
    const [searchQuery, setSearchQuery] = useState("");
    return (
        <div>
            <label>Search: </label>
            <input
                type="text"
                value={searchQuery}
                onInput={e => setSearchQuery(e.target.value)}
                placeholder={placeholder}/>
            <button 
                type="submit"
                onClick={() => onSearchHandler(searchQuery)}
            >Search</button>
        </div>
    );
}

export default Search;