import React from 'react'

const Produto = ({dados}) => {
    let info = dados[0]
    return <div>
        <h1>{info.name}</h1>
        <p>{info.professional}</p>
        <img src={info.photo} alt={info.name}/>
    </div>
}
export default Produto
