import React, { useState } from 'react'

const YORUM_BASLANGIC = {
    display_name: "",
    body: ""
}

const YorumFormu = (props) => {
    const [comment, setCommentBody] = useState(YORUM_BASLANGIC)
    const onHandleChange = event => {
        setCommentBody({
            ...comment, [event.target.name]: event.target.value
        })
    }
    return (<>
        <h3>Yorum Yap</h3>

        <form className="ui form" onSubmit={(e) => {
            e.preventDefault();
            props.handleSubmit(comment)
            setCommentBody(YORUM_BASLANGIC)
        }
        }>
            <div className="ui mini icon input">
                <input
                    name="display_name"
                    type="text"
                    placeholder="Adınız"
                    value={comment.display_name}
                    onChange={onHandleChange} />

            </div>
            <textarea
                name="body"
                placeholder="söyle cigerim" rows="3" value={comment.body} onChange={onHandleChange}></textarea>
        </form>
        <button className="ui primary button" onClick={() => props.handleSubmit(comment)}>
            Gönder
        </button>
    </>
    )
}

export default YorumFormu