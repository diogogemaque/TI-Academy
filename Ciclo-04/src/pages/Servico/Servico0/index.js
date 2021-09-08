//ir na aplicação Controller.js alguma aplicação que tenha servico, que seja um GET e q seja passado por um id. Testar no postman, substituir o id pelo numero do servico desejado para trazer as informações somente do servico escolhido.
//p/ realizar essa operação precisamos criar outro componente (Nova pasta - Servico0) dentro da pasta Servico e dentro da pasta Servico0 criar o index.js - sempre que for criar um componente novo criar uma pasta e um index pq esse componente será renderizado de uma forma diferente do componente anterior
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Container } from "reactstrap";
import { api } from "../../../config";

//confirmar se a aplicação esta recebendo o numero id como parâmetro na url. o parâmetro dessa func vai ser (props) para isso precisamos saber qual é essa propriedade do props (console.log(props.match.params.id))- nao esquecer de informar na rota o parâmetro :id
export const Servico0 = (props) => {
    //console.log(props.match.params.id); o match vai fazer uma relação do parâmetro da propriedade (props) com o parâmetro do id 

    //const que vai retornar um conjunto de dados e setData o useState que vai retornar uma lista/array vazio - A const vai receber um array de informações, onde o data é o valor e setData é o valor que eu vou atribuir. o useState vai dizer qual é o estado inicial desse array um vai ta vazio o outro vai iniciar com o id, ou seja, o dado inicial é o id passado pelo parâmetro.
    const [data, setData] = useState([]);
    //trabalhar tb com a const do id e setID com um useState que vai informar o parâmetro do console.log ou seja vou receber um conjunto de dados e vou precisar do dados que foi passado como parâmetro na minha rota. 
    const [id, setID] = useState(props.match.params.id);
    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    //useEffect é uma função que nao recebe parâmetros e tem uma função get p/ obter o Servico (const getServico) é uma func async e vai receber o axios get por conta do get que foi usado no postman, portanto o api concatena com a pagina url do postman que foi feita no controller.js e concatena tb o id que vai ser escolhido pelo navegador isso forma a rota da execução. Se isso for possivel vai ter uma resposta (response)
    useEffect(() => {
        const getServico = async () => {
            await axios.get(api + "/servico/" + id)
                .then((response) => {
                    //console.log(response.data.servico)
                    //setData que vai pegar os dados do servico no controller e mostrar na pagina
                    setData(response.data.servico)
                })
                //caso de errado o catch vai tratar dessa parada
                .catch(() => {
                    setStatus({
                        type: 'error',
                        message: 'Erro: Não foi possível conectar a API.'
                    })
                })
        }
        //a func getServio vai retornar um conj de dados com base no id que precisa ser inserido dentro do array [] entre a virgula e o parenteses para instanciar a função
        getServico();
    }, [id]);

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="mr-auto p-2">
                        <h1>Informações do Serviço</h1>
                    </div>
                    <div className="p-2">
                        <Link to="/visualizarservico" className="btn btn-outline-success btn-sm">Voltar para a lista de Serviços</Link>
                    </div>
                </div>

                {/* tratamento do erro */}
                <hr className="m1" />{status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}
                
                {/* dl vai fluncionar como uma tabela o className row vai exibir as informacoes em linha, cada linha vai ter um conjunto de informacões dt */}
                <dl className="row">
                    {/* dt vai pegar as informacoes do servico col-sm-3 definicao de tamanho. como o ID ta sendo recebido nao vai ser preciso exibir */}
                    <dt className="col-sm-3">Nome</dt>
                    {/* dd=dados de onde vem o nome? vem da base de dados data do campo nome */}
                    <dd className="col-sm-9">{data.nome}</dd>
                </dl>
                <dl className="row">
                    <dt className="col-sm-3">Descrição</dt>
                    <dd className="col-sm-9">{data.descricao}</dd>
                </dl>
            </Container>
        </div>

    )
}