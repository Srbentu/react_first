import React from 'react';
import useLocalStorage from "./useLocalStorage"
import useFetch from "./useFetch";

const App = () => {
    const [produto, setProduto] = useLocalStorage('produto', '')
    const {request, data, loading, error} = useFetch()
    function handleProdutoClick({target}){
        setProduto(target.innerText)
    }
    React.useEffect(() => {
        async function fetchData(){
            const {response, json} = await request('https://ranekapi.origamid.dev/json/api/produto/')
        }
        fetchData()
    }, [request])
    if (error) return <p>{error}</p>
    if(loading) return <p>Caregando</p>
    if(data)
        return (
            <div>
                <p>Produto preferido {produto}</p>
                <button onClick={handleProdutoClick}>notebook</button>
                <button onClick={handleProdutoClick}>iphone</button>

                {data.map((produto) => <div key={produto.id}><h1>{produto.nome}</h1></div>)}
            </div>
        );
    else {
        return null
    }
};

export default App;
