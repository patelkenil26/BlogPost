import React, { useState } from 'react'
import SearchDataPost from './SearchDataPost';

const Search = ({data}) => {
    const[searchPost,setSearchPost] = useState("");

    const handleSearchBar = () =>{
    //   const filterdata =   filter(searchPost)
    }

  return (
    <div className='search-bar'>
        <input type="text" placeholder='Search post' value = {searchPost} onChange={setSearchPost((e)=>e.target.value)} />
        <button onClick={handleSearchBar}>Search</button>

        {/* <SearchDataPost data={filterdata} /> */}
    </div>
  )
}

export default Search;