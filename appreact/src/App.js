import React from 'react'


const App = () => {
    const [contar, setContar] = React.useState(0)
    const valor = React.useMemo(() =>{
        const localItem = window.localStorage.getItem('produto')
        console.log('aconteceu memo')
        return localItem
    }, [])

    console.log(valor)
    return (
        <div>
            <button onClick={() => setContar(contar + 1)}>{contar}</button>
        </div>
    )
}
export default App;
