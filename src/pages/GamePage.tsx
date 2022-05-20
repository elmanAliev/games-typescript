import {useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import {BASE_URL, KEY} from '../config';

export const GamePage = () => {

    const { id } = useParams();
    const [game, setGame] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(BASE_URL+'/'+id+KEY)
            .then(({ data }) => {
                setGame(data)
                
            })
    }, []);

    const goBack = () => navigate('/');
    
    console.log(game)
    return (
        <>
        <div>{id}</div>
        <div onClick={goBack}>На главную</div>
        </>
    )
}