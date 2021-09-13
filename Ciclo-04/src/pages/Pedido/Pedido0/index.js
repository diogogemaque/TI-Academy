import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { Alert, Container } from "reactstrap";
import { api } from "../../../config";

export const Pedido0 = (props) => {
    const [data, setData] = useState([]);
    const [id] = useState(props.match.params.id);
    const [status, setStatus] = useState([]);

    useEffect(() => {
        const getPedido = async () => {
            await axios.get(api + "/pedido/" + id)
                .then((response) => {
                    console.log(response.data.pedido)
                    setData(response.data.pedido)
                })
                .catch(() => {
                    setStatus({
                        type: 'error',
                        message: 'Erro: Impossível conectar a API'
                    })
                })
        }
        getPedido();
    }, [id]);

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="mr-auto p-2">
                        <h1>Informação do Pedido</h1>
                    </div>
                    <div className="p-2">
                        <Link to="/visualizarpedido" className="btn btn-outline-success btn-sm">Voltar para a lista de Pedidos</Link>
                    </div>
                </div>
                <hr className="m1" />
                {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}

                <dl className="row">
                    <dt className="col-sm-3">Cliente ID</dt>
                    <dd className="col-sm-9">{data.ClienteId}</dd>
                </dl>                
                <dl className="row">
                    <dt className="col-sm-3">Nome do Cliente</dt>
                    <dd className="col-sm-9">{data.nome}</dd>
                </dl>
                <dl className="row">
                    <dt className="col-sm-3">Serviço ID</dt>
                    <dd className="col-sm-9">{data.ServicoId}</dd>
                </dl>
                <dl className="row">
                    <dt className="col-sm-3">Nome do serviço</dt>
                    <dd className="col-sm-9">{data.nome}</dd>
                </dl>
                <dl className="row">
                    <dt className="col-sm-3">Valor</dt>
                    <dd className="col-sm-9">{data.valor}</dd>                    
                </dl>
                <dl className="row">
                    <dt className="col-sm-3">data</dt>
                    <dd className="col-sm-9">{data.data}</dd>
                </dl>
            </Container>
        </div>
    )
}