
const titulo = <h1>Esse é o título</h1>

function App() {
    const nome = 'Breno';
    const ramdom = Math.random();
    const ativo = false;
    function mostraNome(nome){
         return nome;
     }
    const carro = {
         marca: 'Ferrrari',
         rodas: 4,
    }
    const estiloB = {
         color: 'blue',
        backgroundColor:'grey',
    }

    // Mostre os dados da aplicação, como aprensetado no vídeo
    // Não utilize CSS externo, use o style para mudar as cores
    // Se a situação estiver ativa pinte de verde, inativa vermelho
    // Se o gasto for maior que 10000 mostre uma mensagem
    return (
    <>
        {titulo}
        {mostraNome('Julia')}
        <p style={estiloB}>{nome}</p>
        <p>{ramdom}</p>
        <p>{new Date().getFullYear()}</p>
        <p>{ramdom * 100}</p>
        <p>{carro.marca}</p>
        <p className={ativo ? 'ativo' : 'false'}></p>


    </>
    );
}

export default App;
