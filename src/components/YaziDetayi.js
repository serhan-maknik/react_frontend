import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
const YaziDetayi = (props) => {

    const [yasiDetayi, setYaziDetayi] = useState([])
    const { id } = useParams();
    useEffect(() => {
        axios.get(`https://react-yazi-yorum.herokuapp.com/posts/${id}`).
            then(response => setYaziDetayi(response.data))
    }, [])
    return (
        <>
            <h2 className='ui header'>{yasiDetayi.title}</h2>
            <p>{yasiDetayi.created_at}</p>
            <p>{yasiDetayi.content}</p>
        </>
    )
}

export default YaziDetayi