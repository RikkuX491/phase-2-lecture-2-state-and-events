function Search({setSearchText}){
    /* Updating State - setSearchText is invoked inside of the callback function in onChange (the change event listener) */
    return (
        <div className="searchbar">
            <label htmlFor="search">Search Pets:</label>
            <input
                type="text"
                id="search"
                placeholder="Type a name to search..."
                onChange={(event) => setSearchText(event.target.value)}
            />
        </div>
    )
}

export default Search;