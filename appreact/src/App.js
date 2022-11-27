import React from 'react';
import useLocalStorage from "./useLocalStorage"

const App = () => {
    const [produto, setProduto] = useLocalStorage('produto', '')

    function handleProdutoClick({target}){
        setProduto(target.innerText)
    }

    return (
        <div>
            <p>Produto preferido {produto}</p>
            <button onClick={handleProdutoClick}>notebook</button>
            <button onClick={handleProdutoClick}>iphone</button>
        </div>
    );
};

export default App;
