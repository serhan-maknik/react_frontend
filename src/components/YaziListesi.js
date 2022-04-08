import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const YaziListesi = (props) => {
    const [liste, setListe] = useState([])

    useEffect(() => {
        axios.get("https://react-yazi-yorum.herokuapp.com/posts").
            then(response => setListe(response.data)).
            catch(error => console.log("Error:", error))
    }, [])

    return (
        <div className="ui relaxed divided list">
            {liste.map((data, index) => (
                <div key={index} class="item">
                    <i className="large github middle aligned icon"></i>
                    <div className="content">
                        <Link to={`posts/${data.id}`} className="header">{data.title}</Link>
                        <div className="description">{data.created_at}</div>
                    </div>
                </div>
            ))}
        </div>
    )

}

export default YaziListesi;