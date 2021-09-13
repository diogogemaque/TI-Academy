import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom"
import { Alert, Button, Container, Form, FormGroup, Input, Label, Spinner } from "reactstrap"
import { api } from "../../../config";

export const CadastrarServico = () => {
    //o VIEW(Pages), CONTROLLER E MODEL os 3 estão dentro da aplicação o Model da aplicação vai conversar com algo externo que é o Banco de Dados (BD). Os dados do BD (referente as migrations) sobem no modelo do Model (cliente.js, servico.js e pedido.js da api). O Controller vai trabalhar com os serviços (Funcionalidades) e pegar os dados que estão no Views(pages) e trabalhar como objeto de dados (DTO - data transfer object). DTO é igual ao Model quando os serviços são transformados em DTO e mandado para o Model e o model manda pra o BD. o Controller se relaciona com o Servico e o DTO isso garante segurança quando os dados forem pro BD.   
    //Vamos pegar os dados da Page e transformar em DTO. 
    //nessa funcao a const vai receber os dados servico(GET que vai obter) e setServico(set vai inserir) vai ser usado a funcao useState que vai criar algo exatamente igual ao objeto     
    const [servico, setServico] = useState({
        nome: '',
        descricao: ''
    });

    const [status, setStatus] = useState({
        formSave: false,
        type: '',
        message: ''
    });
    //com objeto criado, vai ser criada uma funcao de entrada (valorInput que vai ser o evento clique no botão [e - p/ representar q é um evento] ). o setServico é uma funcao que vai cadastrar o objeto que vai passar todas as informações do servico, o servico retorna um obejto (os ... representa todo o objeto do servico(nome e descricao) nome do atributo e valor do atributo o target.name vai pegar o nome e a descricao que estão no objeto e o target.value vai atribuir os valores que são inseridos pelo no valorInput lá do formulário. Os(:)representa atribuição).  
    const valorInput = e => setServico({ ...servico, [e.target.name]: e.target.value })

    //o evento "e" (que poderia ser qualquer letra) vai fazer com que a página não recarregue após clicar no cadastrar. o evento vai utilizar a função preventDefault(). A partir do uso dessa função a tela não vai carregar após o clique no botão
    const cadServico = async e => {
        console.log(servico)
        e.preventDefault();

        setStatus({
            formSave: true
        });

        //a const headers vai receber um conteúdo q vai ser no formato json que vai ser encaminhado pela propria aplicacao. 
        const headers = {
            'Content-Type': 'application/json'
        };

        //inserção - o que será passado de inf? duas inf. o objeto servico e a os headers (conj de argumentos que estão no valorInput) 
        await axios.post(api + "/servicos", servico, { headers })
            .then((response) => {
                if (response.data.error) {
                    setStatus({
                        formSave: false,
                        type: 'error',
                        message: response.data.message
                    })
                } else {
                    setStatus({
                        formSave: false,
                        type: 'success',
                        message: response.data.message
                    });
                }
            })
            //o catch vai tratar o erro -> o setStatus vai escrever qual erro ocorreu dentro do type e da message
            .catch(() => {
                setStatus({
                    formSave: false,
                    type: 'error',
                    message: 'Erro: não conect ao API'
                });
            });
    };

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="m-auto p-2">
                        <h1>Cadastrar Serviço</h1>
                    </div>
                    <div className="p-2">
                        <Link to="/visualizarservico" className="btn btn-outline-success btn-sm">Voltar para a lista de Serviços</Link>
                    </div>
                </div>
                <hr className="m-1" />

                {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}

                {status.type === 'success' ? <Alert color="success">{status.message}</Alert> : ""}

                <Form className="p-2" onSubmit={cadServico}>
                    <FormGroup className="p-2">
                        <Label>Nome</Label>
                        <Input type="text" name="nome" placeholder="Insira o nome do serviço" onChange={valorInput} />
                    </FormGroup>

                    <FormGroup className="p-2">
                        <Label>Descrição</Label>
                        <Input type="text" name="descricao" placeholder="Insira a descrição do serviço" onChange={valorInput} />
                    </FormGroup>

                    {status.formSave ?
                        <Button type="submit" outline color="success" disabled>Cadastrando...<Spinner type="grow" color="success" /></Button> :
                        <Button type="submit" outline color="success">Cadastrar
                        </Button>}
                </Form>
            </Container>
        </div >
    );
};