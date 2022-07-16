# Jogo da Velha JavaScript + HTML + CSS

Desenvolvi este simples jogo da velha com opção de multplayer, e VS.IA, utilizando HTML + CSS para construir o layout do jogo, e JavaScript para executar a lógica de jogadas, e resultado do jogo. Com o JavaScript também foi desenvolvida uma lógica simples para simular uma inteligência artificial, que executa jogadas quando identifica que determinado box (div), ainda não contém nenhum nó filho (childNodes). Toda a manipulação do HTML + CSS foi feito utilizando o DOM do JavaScript.
<img src="/images/jogodaVelha.PNG" align="center">

## HTML

O código HTML é super simples, consiste apenas em algumas divs, que formam a estrutura do jogo (tabuleiro), e algumas tags de texto.
Alguns elementos contém a classe **"hide"**, que é utilizada para manipular alguns eventos no jogo. Como por exemplo: **definir o que será exibido na tela inicial do jogo, exibir e esconder as mensagens de vencedor ou empate, etc..**

<img src="/images/semHide.PNG" align="center" width="400px" height="400px"><img src="/images/comHide.PNG" align="center" width="400px" height="400px">

O **CSS** também é muito simples, contando apenas com algumas modificações básicas de estilo. A intenção não era trabalhar muito o desgin da aplicação, mas sim os fundamentos da lógica com JavaScript, e praticar o DOM.


## JavaScript

Este repositório foi criado para praticar os conhecimentos adquiridos no curso: "JavaScript do básico ao avançado (com Node.Js + projetos), do Matheus Battist. Até este momento vimos JavaScript puro, com async functions e DOM. E foi basicamente isto que foi utilizado para desenvolver a lógica deste jogo.
No arquivo js/scripts.js é possivel verificar o funcionamento do DOM, realizando todas as alterações necessárias para tornar o HTML responsivo, de acordo com os **eventos de click** que acontecem na tela.
