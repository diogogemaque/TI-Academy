import {Container} from 'reactstrap';

export const Home = () =>{
    return(
        <div>
            <Container>
                <div className="d-flex"> {/*class=className / d-flex=alinhar os elementos da div por linha ou colunas */}
                    <div className="mr-auto p-2"> {/*mr-auto=alinhamento/padding=p-x*/} 
                        <h1>Página Inicial</h1>
                    </div>
                    <div className="p-2">
                        <a href="/visualizarcliente" className="btn btn-outline-success btn-sm">Cliente</a>
                    </div>
                    <div className="p-2">
                        <a href="/visualizarservico" className="btn btn-outline-success btn-md">Serviço</a>
                    </div>
                    <div className="p-2">
                        <a href="/visualizarpedido" className="btn btn-outline-success btn-lg">Pedido</a>
                    </div>


                </div>
                
            </Container>
             
        </div>
    )
}