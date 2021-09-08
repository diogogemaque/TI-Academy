import axios from 'axios';
import { Alert, Container, Table } from "reactstrap"
import { api } from "../../../config";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

//axios utiliza o endereço http://localhost:3000/ - todos os componentes fazem o uso desse endereço
//api utiliza o endereço http://localhost:3001/
//GET p/ obter os resultados/recuperar informações (pega)
//SET p/ alterar/incluir dados (mexe)

//retornar dados
export const VisualizarServico = () => {

    //onde os dados serão retornados - uma const que vai ser um array[de dados (data) que vai retornar e o dados que vai incluir (setData)] = useState do react
    //a função do array vazio useState([]) é p/ receber os dados que vamos trabalhar
    //será feita uma func GET e ela vai receber os dados p/ receber os os dados vai ter o useState([]) que podem ser manipulados pelo setData 
    const [data, setData] = useState([]);

    //erro = mostrar o erro na tela da aplicação e nao no console.log
    //criar uma const com um array que contém duas informações [status, setStatus] > no useState vão ser inseridos valores dentro do objeto{}, onde as propriedades do objeto são o tipo do erro(type) e messagem(message). O estado unicial é sem nenhuma informação (vazio ø)
    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    //uma funcao asyncrona é uma funcao que nao precisa necessariamente de um retorno para acontecer ou seja, a gente faz uma requisicao e nao precisa de uma resposta para ir para proxima acao ela é independente
    const getServicos = async () => {
        //await ñ precisa ficar esperando p/ resolver e vai utilizar o axios que pode ser usado o (get, post, delete, put e todos os outros que fizemos com o postman). Nesse caso sera utilizado o get que vai pegar as informacoes da API(http://localhost:3001) e vai concatenar(+) c/ /listaservicos do controller.js = http://localhost:3001/listaservicos se der certo ele vai responder (.then(response)) c/ console.log e setData que vai trazer um conj de dados que vao vir da tabela servicos (chamado no Controller.js). o catch vai fazer o tratamento desses dados com o retorno de uma mensagem 
        await axios.get(api + "/listaservicos")
            .then((response) => {
                console.log(response.data.servicos);
                setData(response.data.servicos);
            })
            //o catch vai tratar o erro -> o setStatus vai escrever qual erro ocorreu dentro do type e da message
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Erro: Não foi possível conectar a API'
                })
            });
    }
    //todo objeto precisa ser instanciado > instanciar a função através do useEffect (verificar se ele foi importado) dentro dele é criada uma funcao e dentro da funcao é chamado o getServicos é importante colocar um colchete que é onde o retornado os dados da funcao dentro de um array que nao fique em looping e executar uma vez só
    useEffect(() => {
        getServicos();
    }, []);

    return (
        <div className="p-2">
            <Container>
                {/* no reactstrap em componentes selecionar o aleta que deseja copiar e colar e dentro da mensagem colocar a message do status do erro. Importante: importar o Alert do reactstrap. Para que o alerta aparece somente quando der o erro é necessário usar a ação de que se o status.type for igual ao error se(?) o resultado for igual ao error exibir o alerta, caso contrário(:) não exibir nada, ou seja:*/}
                {status.type === 'error' ? <Alert color="warning">{status.message}</Alert> : ""}

                <Table hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Serviço</th>
                            <th>Descrição</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* o data para cada linha vai inserindo um novo dado e a funcao map que vai pegar cada item do array e colocar na tabela, ou seja, todos os dados que vem do array na resposta vai ser mapeado por itens */}
                        {data.map(item => (
                            // cada linha vai corresponder a uma chave/item único (key) cada item é um conjunto de dados das chaves {} do postman que serão exibidos como cada linha da tabela atraves do <tr> o id vai garantir que seja uma linha única e o td sáo as colunas
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.descricao}</td>
                                <td className="text-center">
                                    {/* link no padrão do react-router-dom e importar*/}
                                    <Link to={"/servico0/" + item.id}
                                        className="btn btn-outline-primary btn-sm">Consultar</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}