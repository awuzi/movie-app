import React, {useState, useEffect} from 'react';
import {ActivityIndicator, SafeAreaView, StatusBar, View} from 'react-native';
import ListResult from './src/components/ListResult';
import Search from "./src/components/Search";
import {fetchMoviesFromApi} from './services/network'

export default function App() {
    const [searchText, setSearchText] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [movies, setMovies] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const getSearchedMovies = (searchedText) => {
        searchedText.length >= 3
            ? fetchMovies()
            : null;
    }


    const displayEvent = () => {
        const arr = [];

    }

    const onReachedEnd = () => {
        if (currentPage <= totalPages) {
            setCurrentPage(currentPage + 1);
            fetchMovies();
        }
    }

    const fetchMovies = () => {
        setIsLoading(true)
        fetchMoviesFromApi(searchText, currentPage)
            .then(r => {
                if (currentPage <= r.total_pages) {
                    setMovies([...movies, ...r.results]);
                }
                setTotalPages(r.total_pages)
                setIsLoading(false)
            })
            .catch((e) => console.error('une erreur est survenu :', e))
    }

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <>
            <StatusBar barstyle={'light-content'}/>
            <Search searchText={searchText} onSearch={(searchedText) => getSearchedMovies(searchedText)}/>
            {isLoading ? <ActivityIndicator/> : null}
            <ListResult isLoading={isLoading} movies={movies} searchedText={searchText} onReachedEnd={onReachedEnd}/>
        </>
    );
}
