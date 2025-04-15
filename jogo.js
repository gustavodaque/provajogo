const canvas = document.getElementById("JogoCanvas");
const ctx = canvas.getContext ("2d");


class Entidade{
    constructor(x,y,largura,altura,cor){
        this.x = x,
        this.y = y,
        this.largura = largura,
        this.altura = altura,
        this.cor = cor
    }
    desenhar(){
        ctx.fillStyle = this.cor
        ctx.fillRect(this.x, this.y, this.largura, this.altura)
    }
}
document.addEventListener('keypress'), (evento) => 
      (evento.code == 'Space' && !gameover)()
      if (pulosRestantes > 0) {
        // Primeiro pulo é 12, segundo pulo é 10
        let alturaPulo = (pulosRestantes === 2) ? 12 : 10;
        personagem.velocidade_y = alturaPulo;
        personagem.pulando = true;
        pulosRestantes--; // Decrementa os pulos restantes
      }
    
    const personagem = {
        x: 100,
        y: canvas.height - 50,
        largura: 50,
        altura: 50,
        velocidade_y: 0,
        pulando: false
      };


const objeto_na_tela = new Entidade(50,50,50,50,'red')


function loop(){
    ctx.clearRect(0,0,canvas.width, canvas.height)
    objeto_na_tela.desenhar()
    //inserir as funções de desenhar, atualizar, colisão aqui
    requestAnimationFrame(loop)}
