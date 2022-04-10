import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import YaziYorumları from './YaziYorumları';
import YorumFormu from './YorumFormu';




const YaziDetayi = (props) => {

    const list = [
        { id: 1, comment: "naber" },
        { id: 2, comment: "iyidir" },
    ]


    const [comments, setComment] = useState([])
    const [yasiDetayi, setYaziDetayi] = useState([])
    const { id } = useParams();

    const handleComment = (comment) => {
        axios.post(`https://react-yazi-yorum.herokuapp.com/posts/${id}/comments`, comment)
            .then(response => {
                console.log(response)
                setComment([response.data, ...comments]);

            })
    }
    useEffect(() => {

        axios.all([
            axios.get(`https://react-yazi-yorum.herokuapp.com/posts/${id}`),
            axios.get(`https://react-yazi-yorum.herokuapp.com/posts/latest-comments`)
        ]).then(responses => {
            setYaziDetayi(responses[0].data)
            setComment(responses[1].data)
        })

        // axios.get(`https://react-yazi-yorum.herokuapp.com/posts/${id}`).
        //     then(response => setYaziDetayi(response.data)).
        //     catch(error => console.log(error))

        // axios.get(`https://react-yazi-yorum.herokuapp.com/posts/latest-comments`)
        //     .then(response => setComment(response.data))
        //     .catch(error => console.log(error))
    }, [])
    return (
        <React.Fragment>
            <h2 className='ui header'>{yasiDetayi.title}</h2>
            <p>{yasiDetayi.created_at}</p>
            <p>{yasiDetayi.content}</p>

            <YaziYorumları yorumlar={comments} handleSubmit={handleComment} />


        </React.Fragment>
    )
}

export default YaziDetayi