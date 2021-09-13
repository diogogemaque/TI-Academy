import { Container } from 'reactstrap';

export const Home = () => {
    return (
        <div>
            <Container>
                <div >  {/*class=className / d-flex=alinhar os elementos da div por linha ou colunas */}
                    <div className="m-auto p-2"><h1>Página Inicial</h1></div>{/*mr-auto=alinhamento/padding=p-x*/}

                    <div className="d-flex">
                        <div className="p-2">
                            <a href="/visualizarcliente" className="btn btn-outline-success btn-sm">Cliente</a>
                        </div>
                        <div className="p-2">
                            <a href="/visualizarservico" className="btn btn-outline-success btn-sm">Serviço</a>
                        </div>
                        <div className="p-2">
                            <a href="/visualizarpedido" className="btn btn-outline-success btn-sm">Pedido</a>
                        </div>
                    </div>

                </div>

            </Container>

        </div>
    )
}