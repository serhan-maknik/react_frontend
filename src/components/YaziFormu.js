import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { BASE_URL } from '../api'

const INITIAL_STATE = {
    title: "",
    content: ""
}

const YaziFormu = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [yazi, setYazi] = useState(INITIAL_STATE)
    const onInputChange = event => {
        setYazi({ ...yazi, [event.target.name]: event.target.value })
    }
    const [hata, setHata] = useState("");
    const onFormSubmit = event => {
        if (props.yazi) {

            axios.put(`${BASE_URL}/posts/${id}`, yazi)
                .then(response => {
                    console.log(response)
                    navigate(`/posts/${id}`)
                }).catch(error => setHata("yanlış oldu aslanım"))

        } else {
            axios.post('https://react-yazi-yorum.herokuapp.com/posts', yazi)
                .then(response => {
                    console.log(response)
                    setYazi(INITIAL_STATE)
                    navigate("/")
                }).catch(error => {
                    setHata("yanlış oldu aslanım")
                    console.log("hata", hata)
                })
        }

    }
    useEffect(() => {
        if (props.yazi) setYazi(props.yazi.data)
        console.log("serhan", props.yazi)
    }, [props.yazi])

    return (
        <>
            {hata &&
                <div className="ui error message">
                    <div className="header">Action Forbidden</div>
                    <p>You can only sign up for an account once with a given e-mail address.</p>
                </div>
            }
            <div className="ui form">
                <div className="field">
                    <label>Yazi Başlığı</label>
                    <input name="title" value={yazi.title} type="text" onChange={onInputChange} />
                </div>

                <div className="field">
                    <label>Yazi içeri</label>
                    <textarea name="content" value={yazi.content} rows="3" onChange={onInputChange}></textarea>
                </div>
                <button className="ui primary button" onClick={onFormSubmit}>
                    Gönder
                </button>
                <button className="ui button" >
                    İptal et
                </button>

                <Link Link to={'/'} className="header">Ana sayfaya dön</Link>
            </div>
        </>
    )
}

export default YaziFormu