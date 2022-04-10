import React from 'react'
import YorumFormu from './YorumFormu'
import YorumListesi from './YorumListesi'

const YaziYorumları = (props) => {


    return (<React.Fragment>
        <YorumListesi yorumlar={props.yorumlar} />
        <YorumFormu handleSubmit={props.handleSubmit} />
    </React.Fragment>
    )
}

export default YaziYorumları