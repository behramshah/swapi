import './searchbar.styles.scss';
import { useState, useEffect } from 'react';

const SearchBar = () => {

    const [searchOption, setSearchOption] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [response, setResponse] = useState([]);


    const chooseSearchOption = (e) => {
        setSearchOption(e.target.value);
    };

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value)
    };    

    useEffect(()=>{  
        setResponse([]);       
    },[searchOption])

    useEffect(()=>{
        fetch(`https://swapi.dev/api/${searchOption}/?search=${searchValue}`)
            .then(res => res.json())
            .then(res => {
            setResponse(res.results)        
            })
        .catch(error => console.log('error', error));
    },[searchValue])

    return (
        <div className='search-bar-container'>
            <input type='search' className='searchBox' placeholder='search' onChange={handleSearchChange}/>
            <div className='search-category'>
                    <label className='category-label'>Films
                        <input type='radio' name='searchoptions' value='films/' onClick={chooseSearchOption}/>
                    </label> 
                    <label className='category-label'>People
                        <input type='radio' name='searchoptions' value='people/' onClick={chooseSearchOption}/>
                    </label> 
                    <label className='category-label'>Planets
                        <input type='radio' name='searchoptions' value='planets/' onClick={chooseSearchOption}/>
                    </label> 
                    <label className='category-label'>Species
                        <input type='radio' name='searchoptions' value='species/' onClick={chooseSearchOption}/>
                    </label> 
                    <label className='category-label'>Starships
                        <input type='radio' name='searchoptions' value='starships/' onClick={chooseSearchOption}/>  
                    </label>
                    <label className='category-label'> Vehicles
                        <input type='radio' name='searchoptions' value='vehicles/' onClick={chooseSearchOption}/>                  
                    </label>                 
            </div>
            <div className='search-results'>
                {
                    response ? 
                    response.map( (res) => (
                        <div key={res.id}>{res.name ? res.name : res.title}</div>
                    )
                    ) 
                    : null
                }

            </div>
        </div>
    );
};

export default SearchBar;