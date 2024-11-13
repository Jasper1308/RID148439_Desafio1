# RID148439_Desafio1

link: https://dncweatherrr.netlify.app/

Este projeto é um site para consulta de CEP e previsão do tempo em tempo real. Utilizando duas APIs públicas (ViaCEP e OpenMeteo), o site permite ao usuário buscar informações sobre o seu endereço a partir do CEP e obter a previsão do tempo com base na latitude e longitude informadas. A interface foi criada com foco na simplicidade e funcionalidade, proporcionando uma experiência intuitiva ao usuário.

Funcionalidades
Pesquisa de CEP: O usuário pode inserir um CEP para buscar o endereço correspondente. A consulta é feita via API pública ViaCEP, que retorna dados como logradouro, bairro e localidade/UF.

Previsão do Tempo: O usuário pode inserir a latitude e longitude de uma localidade para obter a previsão do tempo atual. A consulta é realizada através da API pública OpenMeteo, que fornece dados meteorológicos como a temperatura atual.

Tecnologias Utilizadas:
  HTML: Estrutura básica da página.
  CSS: Estilo e design da interface, utilizando propriedades como flexbox e grid para layout responsivo.
  JavaScript: Implementação das funcionalidades principais, como consumo de APIs via fetch e manipulação do DOM.
  Bootstrap: Framework CSS para garantir um layout responsivo e interativo.
APIs:
  ViaCEP: Para consultar dados de endereço a partir do CEP.
  OpenMeteo: Para obter dados de previsão do tempo com base na latitude e longitude fornecidas pelo usuário.

Funcionalidades Técnicas
  Consumo de APIs com fetch: A página usa fetch para fazer requisições assíncronas às APIs, recuperando dados em formato JSON.
  Funções Assíncronas com async/await: As requisições às APIs são feitas de maneira assíncrona, o que melhora a performance da aplicação e garante que o conteúdo da página seja atualizado de forma dinâmica.
  Manipulação de DOM: Utilização de JavaScript para atualizar dinamicamente a interface com as informações obtidas das APIs.
