import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Game{
    id: number;
    name: string;
}

interface FetchGameResponse {
    count: number;
    results: Game[];
}


const useGames = () => {

    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');
    useEffect(() =>{
        const controller = new AbortController();

        apiClient.get<FetchGameResponse>('/games', {signal: controller.signal})
            .then(res => setGames(res.data.results))
            .catch(err => setError(err.message));
            
    }, []);
    return {games, error};
}


export default useGames;