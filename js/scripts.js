//Definindo valores as variáveis

let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p")
let secondPlayer = false;

// Definindo contadores de jogadas:

let player1 = 0;
let player2 = 0;

// adicionando evendo de click aos boxes:
for(let i = 0; i < boxes.length; i++)
{
    // quando alguem clicar no box, faça:
    boxes[i].addEventListener("click", function() {
        
        let addElement = setPlayer(player1, player2);

        if(this.childNodes.length == 0)
        {
            // cria clones do elemento, para poder adicionar mais de um elemento do mesmo.
            let addElementClone = addElement.cloneNode(true);
            // insere o X ou O ao box da vez.
            this.appendChild(addElementClone);
                //Validação para alternar a vez de cada jogador
                if(player1 == player2)
                {
                    player1++;

                    if(secondPlayer == "ia-player"){
                        computerPlay();

                        player2++;
                    }

                } else
                {
                    player2++;
                }
            checkWinCondition();    
        }    
    });
}

// Evento de seleção de jogadores::
for(let i = 0; i < buttons.length; i++)
{
    buttons[i].addEventListener("click", function() {

        secondPlayer = this.getAttribute("id");

        for(let c = 0; c < buttons.length; c++)
        {
            buttons[c].style.display = 'none';
        }

        setTimeout(function() {
            let container = document.querySelector("#container");
            container.classList.remove("hide");
        }, 500);

    });
}

// Função que Selciona o jogador da vez.
function setPlayer(player1, player2)
{
    if(player1 == player2) 
    {
        // recebe o alemento X
        addElement = x;
    } else 
    {
        // recebe o elemento O (bola)
        addElement = o;
    }
    return addElement;
}

// Função selecionar quem venceu

function checkWinCondition()
{
    let b1 = document.querySelector("#block-1");
    let b2 = document.querySelector("#block-2");
    let b3 = document.querySelector("#block-3");
    let b4 = document.querySelector("#block-4");
    let b5 = document.querySelector("#block-5");
    let b6 = document.querySelector("#block-6");
    let b7 = document.querySelector("#block-7");
    let b8 = document.querySelector("#block-8");
    let b9 = document.querySelector("#block-9");

    // LINHAS HORIZONTAIS ::
    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0)
    {
        let b1Element = b1.childNodes[0].className;
        let b2Element = b2.childNodes[0].className;
        let b3Element = b3.childNodes[0].className;

            if(b1Element == "x" && b2Element == "x" && b3Element == "x")
            {
                // x venceu
                declareWinner("x");

            }else if(b1Element == "o" && b2Element == "o" && b3Element == "o")
            {
                // o venceu
                declareWinner("o");
            }
    }

    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0)
    {
        let b4Element = b4.childNodes[0].className;
        let b5Element = b5.childNodes[0].className;
        let b6Element = b6.childNodes[0].className;

            if(b4Element == "x" && b5Element == "x" && b6Element == "x")
            {
                // x venceu
                declareWinner("x");
                
            }else if(b4Element == "o" && b5Element == "o" && b6Element == "o")
            {
                // o venceu
                declareWinner("o");
            }
    }

    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0)
    {
        let b7Element = b7.childNodes[0].className;
        let b8Element = b8.childNodes[0].className;
        let b9Element = b9.childNodes[0].className;

            if(b7Element == "x" && b8Element == "x" && b9Element == "x")
            {
                // x venceu
                declareWinner("x");
                
            }else if(b7Element == "o" && b8Element == "o" && b9Element == "o")
            {
                // o venceu
                declareWinner("o");
            }
    }

    // LINHAS VERTICAIS ::

    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0)
    {
        let b1Element = b1.childNodes[0].className;
        let b4Element = b4.childNodes[0].className;
        let b7Element = b7.childNodes[0].className;

            if(b1Element == "x" && b4Element == "x" && b7Element == "x")
            {
                // x venceu
                declareWinner("x");

            }else if(b1Element == "o" && b4Element == "o" && b7Element == "o")
            {
                // o venceu
                declareWinner("o");
            }
    }

    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0)
    {
        let b2Element = b2.childNodes[0].className;
        let b5Element = b5.childNodes[0].className;
        let b8Element = b8.childNodes[0].className;

            if(b2Element == "x" && b5Element == "x" && b8Element == "x")
            {
                // x venceu
                declareWinner("x");
                
            }else if(b2Element == "o" && b5Element == "o" && b8Element == "o")
            {
                // o venceu
                declareWinner("o");
            }
    }

    if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0)
    {
        let b3Element = b3.childNodes[0].className;
        let b6Element = b6.childNodes[0].className;
        let b9Element = b9.childNodes[0].className;

            if(b3Element == "x" && b6Element == "x" && b9Element == "x")
            {
                // x venceu
                declareWinner("x");
                
            }else if(b3Element == "o" && b6Element == "o" && b9Element == "o")
            {
                // o venceu
                declareWinner("o");
            }
    }

    // LINHAS DIAGONAIS::

    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0)
    {
        let b1Element = b1.childNodes[0].className;
        let b5Element = b5.childNodes[0].className;
        let b9Element = b9.childNodes[0].className;

            if(b1Element == "x" && b5Element == "x" && b9Element == "x")
            {
                // x venceu
                declareWinner("x");
                
            }else if(b1Element == "o" && b5Element == "o" && b9Element == "o")
            {
                // o venceu
                declareWinner("o");
            }
    }

    if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0)
    {
        let b3Element = b3.childNodes[0].className;
        let b5Element = b5.childNodes[0].className;
        let b7Element = b7.childNodes[0].className;

            if(b3Element == "x" && b5Element == "x" && b7Element == "x")
            {
                // x venceu
                declareWinner("x");
                
            }else if(b3Element == "o" && b5Element == "o" && b7Element == "o")
            {
                // o venceu
                declareWinner("o");
            }
    }

    // VERIFICA EMPATE:

    let count = 0;

    for(let i = 0; i < boxes.length; i++)
    {
        if(boxes[i].childNodes[0] != undefined)
        {
            count++;
        }

        if(count == 9)
        {
            declareWinner("Deu Velha!");
        }
    }
}

function declareWinner(winner)
{
    let scoreBoxX = document.querySelector("#scorebox-1");
    let scoreBoxY = document.querySelector("#scorebox-2");
    let msg = "";

        if(winner == "x"){
            scoreBoxX.textContent = parseInt(scoreBoxX.textContent) + 1;
            msg = "O jogador 1 venceu!";
        } else if ( winner == "o")
        {
            scoreBoxY.textContent = parseInt(scoreBoxY.textContent) + 1;
            msg = "O jogador 2 venceu!";
        } else
        {
            msg = "Deu velha!";
        }
    
    // Exibe mensagem de vencedor ::
        messageText.innerHTML = msg
        messageContainer.classList.remove("hide");

    // Esconde a mensagem ::
    
    setTimeout(function(){
        messageContainer.classList.add("hide");
    }, 1500);

    // Zera as jogadas ::
    player1 = 0;
    player2 = 0;

    // Reseta o campo removendo as boxes (x e O)

    let boxesToRemove = document.querySelectorAll(".box div");

    for(let i = 0; i < boxesToRemove.length; i++)
    {
        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
    }
}

function computerPlay() {
 
    let cloneO = o.cloneNode(true);
    counter = 0;
    filled = 0;
            
    for(let i = 0; i < boxes.length; i++) {
   
      let randomNumber = Math.floor(Math.random() * 5);
   
      // só se não tiver marcado anteriormente
      if(boxes[i].childNodes[0] == undefined) {  
        if(randomNumber <= 1) {
          boxes[i].appendChild(cloneO);
          counter++;
          break;
        }
      // checar quantas estão preenchidas        
      } else {
        filled++;
      }
   
    }
   
    if(counter == 0 && filled < 9) {
      computerPlay();
    }
   
  }