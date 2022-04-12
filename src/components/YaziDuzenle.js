import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../api';
import YaziFormu from './YaziFormu'


const YaziDuzenle = () => {

    const { id } = useParams();
    const [yazi, setYazi] = useState({});
    useEffect(() => {
        axios.get(`${BASE_URL}/posts/${id}`)
            .then(response => {
                setYazi(response)
            })
    }, [])
    return (
        <div>
            <h2>Yazı Ekleme Formu</h2>
            <YaziFormu yazi={yazi} />
        </div>
    )
}

export default YaziDuzenle