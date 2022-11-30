import React from 'react';
import styles from './Produto.module.css'
import foto from "../img/evangelion_1.jpg"

const Produto = () => {
    return(
        <div>
            <h1 className={styles.titulo}>Notebook</h1>
            <p className={styles.preco}>Preço 2000</p>
            <img src={foto} alt=""/>
            <button>Comprar</button>
        </div>
    )
}

export default Produto
