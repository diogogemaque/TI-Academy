import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { Alert, Container } from "reactstrap";
import { api } from "../../../config";

export const Pedido0 = (props) => {
    const [data, setData] = useState([]);
    const [id, setID] = useState(props.match.params.id);
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
                {/* <dl className="row">
                    <dt className="col-sm-3">Data de Nascimento</dt>
                    <dd className="col-sm-9">{data.nascimento}</dd>
                </dl>
                <dl className="row">
                    <dt className="col-sm-3">Endereço</dt>
                    <dd className="col-sm-9">{data.endereco}</dd>
                </dl>
                <dl className="row">
                    <dt className="col-sm-3">Cidade</dt>
                    <dd className="col-sm-9">{data.cidade}</dd>
                </dl> */}
            </Container>
        </div>
    )
}