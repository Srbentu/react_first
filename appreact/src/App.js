import React from 'react'


const App = () => {
    const [comentarios, setComentarios] = React.useState(['banana','maca','uva'])
    const [input, setInput] = React.useState('')
    const inputElement = React.useRef()

    function handleClick(){
        setComentarios([...comentarios, input])
        setInput('')
        inputElement.current.focus()
    }

    return (
        <div>
            <ul>
                {comentarios.map(comentario => <li key={comentario}>{comentario}</li>)}
            </ul>
            <input ref={inputElement} type="text" value={input} onChange={({target}) => setInput(target.value)}/>
            <button onClick={handleClick}>Enviar</button>
        </div>
    )
}
export default App;
