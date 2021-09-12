<!-- NLW React -->

Aula #01:

<!-- Estruturar e criar o prjeto -->
    -> Criamos as pasta de local onde vamos trazer o react;
    -> Dentro da pasta trazemos o react e sua estrutura junto ao typescript;
    -> Apagamos tudo que é desnecessario, deixando a estrutura basica;
    -> E estartamos o projeto;

    -> Estrutura do React:
        -> Componentes = Estruturas separadas isoladas ou não, juntas formam a aplicação e um componente é uma
        "função";
        -> Propriedade = Para cada componente que criamos, onde vamos incluir propriedades unicas para uma coisa apenas ou para todos, usamos o type do typescript, onde vamos criar as props daquele componente, onde vamos passar sua estrutura, assim todo componente recebe props dentro do parametro da função do componente, então apenas tipamos essa props com tipagem q criamos e entao ele sabe q vai receber tal propriedade ou usamos "?" para nao seja obrigatorio tal propriedade;
        -> Dentro das propriedades podemos mandar de tudo, numeros(numbers), texto(string), um bolean(0,1), um array(string[]) e ate um componente;
        -> A unica propriedade que todos tem acesso e é padrao do react é o'children', e a opção de colocar algo entre a abertura e o fechamento da tag do componente;
        -> Estado = Basicamente podemos dar vida aos componentes, criamos um exemplo bem simples onde criamos uma variavel que vai receber um valor zero, e dentro do nosso proprio componente criamos uma nova função que muito normal, essa função sera de incremento onde vamos adicionar e manter o valor da variavel, e vai incrementando, e damos um console.log, e retornamos usando o onClick{} passando a função como parametro e exibimos na tag o valor variavel, e console vemos a mudança de estado da variavel mas no componente visual mesmo não. No react para esta mudança se faz diferente, aquilo que era uma variavel mudamos para uma constante que vai receber uma função nativa do react que o useStates() que agora passaremos um estado padrao para ele, então usamos um [] pq o retorno do useStates é um vetor, que contem um valor e uma função, então colocamos dentro desse vetor uma função que vai altera o estado atual;
        Dentro da nossa função de incremento trazemos nossa fução que seta o novo valor de counter, e passamos a variavel counter + 1, e temos a mudança acontecer na parte visual
            ->Conceito de imutabilidade: Onde não mudamos o valor real de algo apenas passamos um novo valor se baseando no valor atual, então mudamos o valor de algo, e sim criamos um valor novo;
        Assim no estado do react e mudança de estados atual, para contruir algo novo;

<!-- Integrando o fribase com aplicação -->
    -> Vamos no site do firebase e seguimos o passo, para registro, criar projeto e configurar os servicos de autenticação e database;
    -> No terminal adicionamos o firebase ao projeto;
    -> Pós isso criamos uma pasta de service com arquivo que vai ter a configuração do firebase contendo seu sdk, a importação das funcionalidade do firebase e depois criamos constantes que vao ter tais funcionalidades e exportamos pra ser usado futuramente;

Aula #02:
<!-- Estruturando a page de home -->

<!-- Estruturando o css da page home -->

<!-- Criar componente (botão) -->

<!-- Criar componente NewRoom -->

<!-- Navegação des pagina -->

<!-- Criar navegação entre paginas -->

<!-- Criar autenticação com firebase -->

<!-- Compartilhar um Contexto no react -->
*
<!-- Criando o contexto na App -->
*
<!-- Recuperar o estado de Autenticação -->
*
<!-- Refatorar os contextos -->
*
<!-- Criar Hooks -->

Aula #03:
    <!-- Trandando carregamento da pagina de criar uma sala -->
    *
    <!-- Começo de usar o databes do firebase e criando suas regras no firebase -->
    *
    <!-- Fluxo de entrar numa sala -->
    *
    <!-- Criando a pagina da sala e estilizando -->
    *
    <!-- Criadno componente RoomCode e estilização -->
    *
    <!-- Criando função de copy RoomCode -->
    -> "navigator.clipboard.writeText()" - Usamos uma api do proprio navegador;
    *
    <!-- Pegando o codigo da url atravez de parametros -->
    *
    <!-- Criando função de nova questão -->
    *
    <!-- Modificando o Room e o css do Room -->
    -> Dentro do html do react para usar o if, usando o operador ternario { '' ? () '' : ()} 
    <!-- Fazendo a page Room consumir os dados das perguntas do firebase -->
    *

Aula #04:
    <!-- Criando componente de questões que vem do banco -->
    -> "& + .questions" => Usamos isso no scss, ja que o & siguinifica o elemento principal, então dizemo que "elemento principal", que for seguido do mesmo elemento inclua e estilização colocada neste bloco css;
    -> Dentro do React toda vez que é percorrido um array atravez do 'map', ele apresenta um erro, onde devemos informar quando sua 'key', então de vemos atribuir a essa chave o tipo de valor que sera unico qual informação que sera um valor unico aqui no nosso caso sera o id;
    Esta necessidade se da pela questão de performace do react, sendo ele o 'algoritimo de reconciliação' estando com mais detalhes na doc do react;
    <!-- Criando um hook -->
    -> No react criamos um componente para algo visual que se repete na aplicação, quando temos um funcionalidade que se repete pela aplicação criamos um hook;
     <!-- Criando Pagina de Sala -->
     *
     <!-- Funcionalidade de Like -->
     *
     <!-- Exclusão de perguntas -->
     *
     <!-- Encerrar a sala e não permitir encerrar mais -->

Aula #05:
    <!-- Adicionar novos botoes e afastalos -->
    *
    <!-- Criar as funções de check e hilighted -->
    *
    <!-- Refatorar o QuestionProps e Quetion -->
    *
    <!-- Refatorar o return do QuetionProps -->
    *
    <!-- Baixar biblioteca de classes refatorar return de props -->
    *
    <!-- Criando estilzação para as ações e alterações no firebase dos botoes check e hilighted -->
    *
    <!-- Conceito de fragment do react e teste para ocultar os botoes-->
    *
    <!-- Hospedagem do projeto no Firebase -->
    -> Vamos fazer a hospedagem no hosting, mas dentro dele so conseguimos hospedar paginas esatticas, sendo html,css e javascript, não conseguimos hospedar algo backend;
    -> Vamos hosting começar a hospedagem;



comandos:
->npm create react-app letmeask --template typescript;
->yarn start
->yarn firebase;
->yarn node-sass@^5.0.0;
->yarn add react-router-dom;
->yarn add classname;
->yarn add global -g firebase-tools
->npm install -g firebase-tools
->firebase login
->firebase init

tecnologias:
-> nodejs
-> yarn
-> reactjs
-> node-sass
-> react-router-dom
-> react-toast ou react-hot-toast

ferramentas:
firebaise
firebase - hosting
