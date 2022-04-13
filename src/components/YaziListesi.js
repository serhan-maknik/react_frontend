import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../api'
const YaziListesi = (props) => {
    const [liste, setListe] = useState([])

    useEffect(() => {
        axios.get(`${BASE_URL}/posts`).
            then(response => setListe(response.data)).
            catch(error => console.log("Error:", error))
    }, [])

    return (
        <div>
            <Link to="/yaziekle" className='ui primary button' >Yazi ekle</Link>
            <div className="ui relaxed divided list">
                {liste.map((data, index) => (
                    <div key={index} className="item">
                        <i className="large github middle aligned icon"></i>
                        <div className="content">
                            <Link to={`posts/${data.id}`} className="header">{data.title}</Link>
                            <div className="description">{data.created_at}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

}

export default YaziListesi;