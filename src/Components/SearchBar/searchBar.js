import { faDna, faGlobe, faHashtag, faMagnifyingGlass, faT } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import './search.css'
import { Button, Dropdown, Menu, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import fetchMovie from '../../APIs/fetchMovie';
import MovieCard from './MovieCard/MovieCard';

const SearchBar = () => {
    const [text, setText] = useState("");
    const [selectedOption, setSelectedOption] = useState('Search Type');
    const [data, setData] = useState([])

    const handleMenuClick = (e) => {
        setSelectedOption(e.key);
    };

    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="Title">
                <FontAwesomeIcon icon={faHashtag} />&nbsp; Title
            </Menu.Item>
            <Menu.Item key="Genre">
                <FontAwesomeIcon icon={faDna} />&nbsp;  Genre
            </Menu.Item>
        </Menu>
    );

    const handleSearch = async () => {
        if (selectedOption && text) {
            const response = await fetchMovie({ selectedOption, text });
            setData(response)
            console.log("response", response)
        }
        else {
            alert("Invalid input")
        }
    };



    return (
        <div className='p-2'>
            <div className='flex py-10 pt-5 justify-center'>
                <div className='search'>
                    <Dropdown className='h-[100%] rounded-none border-2 border-r-0 hover:border-r-2 border-gray-300 ' overlay={menu}>
                        <Button>
                            <Space>
                                {selectedOption}
                                <DownOutlined />
                            </Space>
                        </Button>
                    </Dropdown>
                </div>
                <input
                    className='search py-2 px-4 border-2 border-l-gray-200 w-[40%] border-r-gray-200 focus:outline-none transition-all border-gray-300 hover:border-blue-500  '
                    placeholder='SEARCH'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button onClick={handleSearch} className='search border-2 border-l-0 border-gray-300 hover:border-blue-500 hover:border-l-2 text-gray-300 transition-all hover:text-blue-500  p-2'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
            <div className='content flex gap-8 justify-center mt-10 flex-wrap'>
                {data.length > 0 ? (
                    data.map((movie) => (
                        <MovieCard key={movie.imdbID}
                            title={movie.Title}
                            year={movie.Year}
                            poster={movie.Poster}
                            actors={movie.Actors}
                            awards={movie.Awards}
                            suited={movie.Rating}
                            plot={movie.Plot}
                            country={movie.Country}
                            rating={movie.imdbRating} />
                    ))
                ) : (
                    <h1>NOTHING TO DISPLAY</h1>
                )}
            </div>


        </div>
    );
}

export default SearchBar;
