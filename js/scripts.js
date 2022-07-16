//Definindo valores as variáveis

let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container buttons");
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
                } else{
                    player2++;
                }
        }    
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