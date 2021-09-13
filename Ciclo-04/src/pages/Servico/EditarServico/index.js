import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Button, Container, Form, FormGroup, Input, Label, Spinner } from 'reactstrap';
import { api } from '../../../config';

export const EditarServico = (props) => {

    const [id] = useState(props.match.params.id);
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');

    const [status, setStatus] = useState({
        formSave: false,
        type: '',
        message: ''
    });

    const edtServico = async e => {
        e.preventDefault();
        console.log("Editar")

        setStatus({
            formSave: true
        });

        const headers = {
            'Content-Type': 'application/json'
        }

        await axios.put(api + "/editarservico", { id, nome, descricao }, { headers })
            .then((response) => {
                console.log(response.data.error);
                console.log(response.data.message);
                setStatus({
                    formSave: false
                });
            })
            .catch(() => {
                setStatus({
                    formSave: false,
                    type: 'error',
                    message: 'Error: Not possible to connect API'
                });
            });
    };

    useEffect(() => {
        const getServico = async () => {
            await axios.get(api+"/servico/"+ id)
                .then((response) => {
                    setNome(response.data.servico.nome);
                    setDescricao(response.data.servico.descricao);
                })
                .catch(() => {
                    console.log("Erro: Not possible to connect API")
                });
        }
        getServico();
    }, [id])

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="m-auto p-2">
                        <h1>Editar um Serviço</h1>
                    </div>
                    <div>
                        <Link to={"/visualizarservico/"}
                            className="btn btn-outline-primary btn-sm m-1">Voltar para Lista de Serviços</Link>
                        <Link to={"/servico0/" + id}
                            className="btn btn-outline-primary btn-sm">Consultar</Link>
                    </div>
                </div>

                <hr className="m-1" />
                {status.type === 'error' ? <Alert color="warning">{status.message}</Alert> : ""}
                {status.type === 'success' ? <Alert color="success">{status.message}</Alert> : ""}

                <Form className="p-2" onSubmit={edtServico}>
                    <FormGroup className="p-2">
                        <Label>Nome</Label>
                        <Input type="text" name="nome" placeholder="Nome do serviço" value={nome}
                            onChange={e => setNome(e.target.value)} />
                    </FormGroup>
                </Form>

                <Form className="p-2">
                    <FormGroup className="p-2">
                        <Label>Descrição</Label>
                        <Input type="text" name="descricao" placeholder="Descrição do serviço" value={descricao}
                            onChange={e => setDescricao(e.target.value)} />
                    </FormGroup>

                    {status.formSave ?
                        <Button type="submit" outline color="warning" disabled>Cadastrando...
                            <Spinner size="sm" color="waring" /></Button> :
                        <Button type="submit" outline color="warning m-1">Cadastrar</Button>}

                    <Button type="reset" outline color="warning">Limpar</Button>
                </Form>

            </Container>
        </div>
    )
}
