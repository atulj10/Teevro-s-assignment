import axios from 'axios';

const fetchMovie = async ({ selectedOption, text }) => {
    try {
        let response;
        if (selectedOption === "Title") {
            response = await axios.get(`${process.env.REACT_APP_OMDB_API}t=${text}`);
            return response.data ? [response.data] : [];
        } else if (selectedOption === "Genre") {
            response = await axios.get(`${process.env.REACT_APP_OMDB_API}s=${text}&type=movie`);
            return response.data.Search ? response.data.Search : [];
        }
    } catch (error) {
        console.error("An error occurred while fetching movie data:", error);
        return [];
    }
};

export default fetchMovie;
