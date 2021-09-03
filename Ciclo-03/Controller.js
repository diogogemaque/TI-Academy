const express=require('express'); //a const=express vai requerer os módulo express do node
const cors=require('cors'); //linha necessária p/ as requisições (cors -instalados nos package)  entre cliente servidor 

//p/ fazer as inserções dos objetos que se relacionam com o banco de dados:
const models=require('./models'); //models requer a pasta models no diretório onde estão os clientes, pedidos e serviços

const app=express(); //app vai utilizar o express p/ passar os endereços
app.use(cors()); //app ta usando o cors
app.use(express.json()); //app utiliza a passagem das rotas(express) utilizando arquivos do tipo json


let cliente=models.Cliente;//a variável cliente vai na pasta Models buscar a classe cliente
let servico=models.Servico;//a variável servico vai na pasta Models buscar a classe servico
let pedido=models.Pedido;//a variável pedido vai na pasta Models buscar a classe pedido

//diretório raiz - 
app.get('/', function(req,res){
    res.send('Olá Mundo');    
});

/*
//exercícios 27/08
app.get('/servicos', function(req,res){
    res.send('Lista de Cursos');    
});
app.get('/clientes', function(req,res){
    res.send('Lista de Clientes');    
});
app.get('/pedidos', function(req,res){
    res.send('Lista de pedidos');    
});
*/


//o app.get vai inserir na base de dados ("/servicos"), através do comando create  o "servico" com as seu (`id`,`nome`,`descricao`,`createdAt`,`updatedAt`)
app.get('/servicos', async(req, res)=>{ //func async ñ precisa de um return
    
    let create=await servico.create({ //comando create pega o servico que foi criado la no começo do Controller.js (let servico=models.Servico) que tem relação com a variável Servico que esta sendo mapeada no banco de dados e insere o servico através da url (localhost:3000/servicos) no navegador 
       nome: "HTML / CSS",
       descricao: "Criação de páginas estáticas",
    });
    res.send('Serviço foi inserido');
});

//exercicio inseridos através do navegador
app.get('/clientes', async(req, res)=>{
    let create=await cliente.create({
        nome: "Diogo Gemaque",
        endereco: "R. S Jão",
        cidade: "Macapá",
        uf: "AP",
        nascimento: "1986-03-31"
    });
    res.send('Cliente Cadastrado')
});

app.get('/pedidos', async(req, res)=>{
    let create=await pedido.create({
        ClienteId: '4',
        ServicoId: '3',
        valor: '997.00',
        data: "2021-08-31"
    });
    res.send('Pedido Cadastrado')
});

//POSTAMAN: server para passar uma requisição externa
//métodos p/ cadastrar o tipo de requisição no postman: POST(p/ inserir); GET(p/ recuperar); PUT; DELETE
//collection>new_collection:p/cadastrar_a_pasta>alterar_o_método_de_inserção(POST/GET...)>colocar_a_rota(url)>colocar_as_informações_no_body>raw>alterar_o_formato_p/_json(que_é_um_formato_de_uma_lista)
//POST (INSERIR) é usado para inserção, feita geralmente na página da inserção ex.: formulário de cadastro do gmail - PEGA O QUE O USUÁRIO CADASTROU E MANDA PRA BASE
//GET (MOSTRAR) é usado na linha de comando, não passa pelo formulário ex.: passar as informações de cadastro dentro do próprio código - PEGA DA BASE E MOSTRA PRO USUÁRIO

//add>app.use(express.json()) - para executar a partir do navegador -
app.post('/servicos', async(req,res)=>{
    let create=await servico.create(
        req.body //requisição a partir do corpo da página (formulário do navegador/app etc) 
); 
    res.send("Serviço foi inserido através do formulário postman");  
});

app.post('/clientes', async(req,res)=>{
    let create=await cliente.create(
        req.body
    );
    res.send('Cliente foi inserido através do formulário postman');
});

app.post('/pedidos', async(req,res)=>{
    let create=await pedido.create(
        req.body
    );
    res.send('Pedido foi inserido através do formulário postman');
});


// aula4-30/08
/*app.get('/listaservicos', async(req, res)=>{
    await servico.findAll({
        raw:true 
    }).then(function(servicos){
        res.json({servicos})
    });
});*/
app.get('/listaservicos', async(req, res)=>{
    await servico.findAll({ //findAll retorna todos os valores
        order:[['nome', 'DESC']] //listar em ordem alfabética
    }).then(function(servicos){
        res.json({servicos})
    });
});

//recurso de agrupamentp
app.get('/ofertas', async(req, res)=>{
    await servico.count('id') //count vai contar e retornar a quantidade de um det objeto que são ofertados
    .then(function(servicos){
        res.json(servicos);
    });
});

// Pk (Primary Key)
app.get('/servico/:id', async(req, res)=>{ //get vai retornar um servico específico com base no id informado
    servico.findByPk(req.params.id) //findByPk retorna um valor específico baseado em uma chave primária (PrimaryKey) - através de uma req(solicitando do servidor uma informação) um parâmetro params: id(nº q o usuário colocou) 
    .then(servico=>{ //2 situações: 1ª é o servico esta la (respondido com .then)
        return res.json({ //retorna uma resposta em formato json
            error:false, //informa que nao teve erro
            servico //retorna pro usuário o servico
        });
    }).catch(function(erro){ //2ª é se o id não existir .catch vai tratar o erro atraves da function
        return res.status(400).json({ //retorna uma resposta no formato json dizendo o qual foi o erro que deu (status(400))
            error:true,
            message: "Código não está cadastrado!"
        });
    });
});

//exercício aula 04
//visulize todos os clientes:
app.get('/listaclientes', async(req, res)=>{
    await cliente.findAll({
        raw:true
    }).then(function(clientes){
        res.json({clientes})
    });
});
//visualize tds os clientes em ordem de antiguidade quem cadastrou 1º:
app.get('/listaclientes-antiguidade', async(req, res)=>{
    await cliente.findAll({ //findAll retorna todos os valores
        order:[['createdAt']] //listar em ordem alfabética
    }).then(function(clientes){
        res.json({clientes})
    });
});
//Visualize tds os pedidos:
app.get('/listapedidos', async(req, res)=>{
    await pedido.findAll({
        raw:true
    }).then(function(pedidos){
        res.json({pedidos})
    });
});
//Visualize o pedido por ordem a partir do maior valor:
app.get('/pedidosmaiorvalor', async(req, res)=>{
    await pedido.findAll({ 
        order:[['valor','DESC']] 
    }).then(function(pedidos){
        res.json({pedidos})
    });
});
//Informe quantos clientes estão na nossa base de dados:
app.get('/quantidadeclientes', async(req, res)=>{
    await cliente.count('id') 
    .then(function(clientes){
        res.json(clientes);
    });
});
//Informe a quantidade de pedidos solicitados:
app.get('/quantidadepedidos', async(req, res)=>{
    await pedido.count('id') 
    .then(function(pedidos){
        res.json(pedidos);
    });
});

/*  D e s a f i o"
    Olhar no manual: p/ fazer um agrupamento que soma os valores de um determinado cliente, colocar o cliente no pedido e retornar a somatória dos valores.
    No manual max,min and e sum > na soma ele vai somar tudo com uma condição (where) + um campo {age}
    No nosso exercício é o valor pedido.: "await User.sum('valor.pedido', {where:{id.cliente=da url}}"/Somar todos os pedidos relacionados a um cliente o id da url (rota do pedido '/cliente/:id') vai usado na clausula where 
*/

app.get('/pedidosrealizados', async(req, res)=>{
    await pedido.sum('valor') 
    .then(function(pedidos){
        res.json(pedidos);
    });
});

app.get('/pedidosrealizados/:id', async(req, res)=>{
    await pedido.sum('valor', { where: { ClienteId: req.params.id} } ) 
    .then(function(pedidos){
        res.json(pedidos);
    });
});

/*
POST serve para fazer o CREATE que é uma inserção;
GET serve para fazer um consulta;
PUT serve para fazer o update/atualização 
DESTROYER serve para fazer um exclusão
*/


//aula5-31/08
// atualizar atraves da url do navegador 
app.get('/atualizaservico', async(req,res)=>{
    await servico.findByPk(1) 
    .then(servico=>{
        servico.nome='HTML/CSS/JS';
        servico.descricao='Páginas estáticas e dinâmicas estilizadas';
        servico.save();
        return res.json({servico});
    });
});
//nova rota usando o postman para atualizar
app.put('/editarservico', (req,res)=>{ //funcao nao é async pq precisa de um retorno, precisa responder a passagem de informacao
    servico.update(req.body,{ //vamos pegar o objeto(servico) fazer uma atualizacao (update) que vai ser solicitado(req) atraves do corpo da aplicacao(body),
        where:{id:req.body.id} //condicao (where) 
    }).then(function(){ //funcao que retorna um json
        return res.json({ //json retorna 2 informacoes:
            error:false, //nao teve erro e conseguiu acessar
            message:"Serviço foi alterado com sucesso."
        });
    }).catch(function(erro){ //catch é a outra informacao de que nao tenha conseguido acessar - a function vai retornar que deu erro 
        return res.status(400).json({ //vai retornar o erro em json com o status do erro 400
            error:true, //ocorreu o erro
            message:"Erro na alteração do serviço"
        });
    })
});

//busuca no postiman quantos pedidos estao relacionadoas a esse servico com base no id do servico
app.get('/servicospedidos', async(req,res)=>{
    await servico.findByPk(1, {
        include:[{all:true}]
    }).then(servico=>{
        return res.json({servico});
    });
});

//alterar o servico anterior criando uma nova consulta
app.put('/editarpedido', (req,res)=>{
    pedido.update(req.body,{
        where: {ServicoId:req.body.ServicoId}
    }).then(function(){
        return res.json({
            error:false,
            message:"Pedido modificado com sucesso."
        })
    }).catch(function(erro){
        return res.status(400).json({
            error:true,
            message:"Não foi possível modificar o pedido."
        });
    });
});

//Exercicio aula 05






//porta p/ o ambiente de execução 
let port=process.env.PORT || 3000;

//função que vai ficar esperando a requisição que vai passar pela porta
app.listen(port,(req,res)=>{
    console.log('Servidor ativo');
});