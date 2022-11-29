import React from 'react';


// Faça um fetch (POST) para a API abaixo
// Para a criação ser aceita é necessário enviar dodos de:
// nome, email, senha, cep, rua, numero, bairro, cidade e estado

// Essa é a função utilizado para realizar o POST
//fetch('https://ranekapi.origamid.dev/json/api/usuario', {
    //method: 'POST',
    //headers: {
    //    'Content-Type': 'application/json',
    //},
    // form é o objeto com os dados do formulário
   // body: JSON.stringify(form),
//});

// Mostre uma mensagem na tela, caso a resposta da API seja positiva


const App = () => {
    const [form, setForm] = React.useState({
        nome: '',
        email: '',
        senha:'',
        cep:'',
        rua:'',
        numero: '',
        bairro:'',
        cidade:'',
        estado:''
    })
    const [response, setResponse] = React.useState(null)

    function handleSubmit(event) {
        event.preventDefault()
        fetch('https://ranekapi.origamid.dev/json/api/usuario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(form)
        }).then(response =>{
            setResponse(response)
        })
    }
    function handleChange({target}){
        const {id, value} = target
        setForm({ ...form, [id]: value})
    }

    return <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome</label>
        <input id='nome' type="text" value={form.nome}
               onChange={handleChange}/>
        <label htmlFor="email">Email</label>
        <input id='email' type="email" value={form.email}
               onChange={handleChange}/>
        <label htmlFor="senha">Senha</label>
        <input id='senha' type="password" value={form.senha}
               onChange={handleChange}/>
        <label htmlFor="cep">cep</label>
        <input id='cep' type="text" value={form.cep}
               onChange={handleChange}/>
        <label htmlFor="rua">rua</label>
        <input id='rua' type="text" value={form.rua}
               onChange={handleChange}/>
        <label htmlFor="numero">numero</label>
        <input id='numero' type="text" value={form.numero}
               onChange={handleChange}/>
        <label htmlFor="bairro">bairro</label>
        <input id='bairro' type="text" value={form.bairro}
               onChange={handleChange}/>
        <label htmlFor="cidade">cidade</label>
        <input id='cidade' type="text" value={form.cidade}
               onChange={handleChange}/>
        <label htmlFor="estado">estado</label>
        <input id='estado' type="text" value={form.estado}
               onChange={handleChange}/>
        {response && response.ok && <p>formulário Enviado com sucesso!</p> }
        <button>Enviar</button>
    </form>

};

export default App;
