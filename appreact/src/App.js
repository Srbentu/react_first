import React from 'react'
import Produto from "./Produto";


const App = () => {
    const [dados,setDados] = React.useState(null)
    const [carregando, setCarregando] = React.useState(null)

    async function handleClick(event) {
        setCarregando(true)
        let name = event.target.innerText.toLowerCase().replace(" ", '-')
        let nameFULL = `https://staging.vitat.com.br/wp-json/vitat/especialistas/posts?specialist=` + name
        const response = await fetch(nameFULL)
        const json = await response.json()
        setDados(json)
        setCarregando(false)
    }

    return (
        <div>
            <button style={{margin:'.5rem'}} onClick={handleClick}>Monike Rodrigues</button>
            <button style={{margin:'.5rem'}} onClick={handleClick}>Vanessa Losano</button>
            <button style={{margin:'.5rem'}} onClick={handleClick}>Mayara Pastori</button>
            {carregando && <p>Carregando...</p> }
            {!carregando && dados && <Produto dados={dados}/>}
        </div>
    )

}


export default App;
