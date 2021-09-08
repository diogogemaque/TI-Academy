import { Alert, Container, Table } from "reactstrap"
import { api } from "../../../config";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";


export const VisualizarPedido = () => {
    const [data, setData] = useState([]);
    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const getPedido = async () => {
        await axios.get(api + "/listapedidos")
            .then((response) => {
                console.log(response.data.pedidos);
                setData(response.data.pedidos);
            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Erro: Não conectado com a API'
                })
            });
    }
    useEffect(() => {
        getPedido();
    }, []);

    return (
        <div className="p-2">
            <Container>{status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}

                <Table hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Cliente ID</th>
                            <th>Serviço ID</th>
                            <th>Valor</th>
                            <th>Data</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.ClienteId}</td>
                                <td>{item.ServicoId}</td>
                                <td>{item.valor}</td>
                                <td>{item.data}</td>
                                <td className="text-center">
                                    <Link to={"/cliente0/" + item.id}
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