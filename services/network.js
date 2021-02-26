import {config} from "../config/index";


export const fetchMoviesFromApi = async (queryBody, page) => {

    try {
        const body = queryBody && queryBody.length ? "'" + queryBody + "'" : null;
        const response = await fetch(`${config.tmdb_url}&query=${body}&page=${page}`);
        return await response.json();
    } catch (e) {
        console.error(e);
    }
/*
    fetch(config.tmdb_url)
        .then((response) => response.json())
        .then((json) => json)
        .catch((error) => console.error(error))*/
}
