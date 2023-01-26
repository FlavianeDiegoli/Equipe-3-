
// loading imagens
var stubo , ntubo;
var stuboImg, ntuboImg;
var cons = 460;


var fundo, fundoImg;
var fimdejogo, fimdejogoImg;

var passarinho, passarinhoImg;
var debora, deboraImg, groudchao;
var deboraInvisivel;

var groudTubo1 , groudTubo2;
var taJogando = "play";


//função serve pra carregar arquivos pra dentro da variável
function preload()
{   
    //debora
    deboraImg = loadImage("img/DEBORA 1.png");

    //fidel
    ntuboImg = loadImage("img/FIDEL1.png");
    stuboImg = loadImage("img/FIDEL2.png");   

    // flaviane
    fundoImg = loadImage("img/FLAVIANE.png");
    fimdejogoImg = loadImage("img/FLAVIANE FIM DE JOGO.png");

    //carlos
    passarinhoImg = loadAnimation(
        "img/CARLOS 1.png",
        "img/CARLOS 2.png",
        "img/CARLOS 3.png"
      );


    
}

//função de criação
function setup()
{
    //o tamanho da tela (largura,altura)
    createCanvas(400,700);


    //flaviane " fundo"
   fundo = createSprite(30,500,10,10); 
   fundo.addImage(fundoImg);

   //flaviane - "GAME OVER "
   fimdejogo = createSprite(220,300,20,20);
   fimdejogo.addImage(fimdejogoImg);
   fimdejogo.scale = 0.4;
   fimdejogo.visible = false;


    //Carlos
   passarinho = createSprite(40, 280, 0, 0);
   passarinho.addAnimation("passarinho", passarinhoImg);
   passarinho.scale = 0.2;
 
   //Debora
   debora = createSprite(0, 750);
   debora.addImage("debora", deboraImg);
  

   deboraInvisivel = createSprite(90,550, 800, 10);
   deboraInvisivel.visible = false;  
    
   groudTubo1 = new Group();
   groudTubo2 = new Group();
   groudchao = new Group();

   

} 

//função de execução-desenho
function draw()
{
    
    //mostra o tamanho da tela
    background("#82D0E8");
    
    
    if(taJogando === "play")
    {
        
        debora.velocityX = -2; 
        if(debora.x < 0){
           debora.x = debora.width/ 2; 

           
        }
        
        
        
        groudchao.add(deboraInvisivel);

        if (keyDown("space")) 
        {
            passarinho.velocityY = -7;
        }
    
        passarinho.velocityY = passarinho.velocityY + 0.8;
        
    

        criaTubo(); 


        if(groudTubo1.isTouching(passarinho)||groudTubo2.isTouching(passarinho)||groudchao.isTouching(passarinho))
        {
            taJogando = "end";
        }

    }
    else if(taJogando === "end")
    {
        //parar a velocidade e grupo
        passarinho.velocityY = 0;

        groudTubo1.setVelocityXEach(0);
        groudTubo2.setVelocityXEach(0); 
        groudchao.setVelocityXEach(0);


        //exibe novamente a imagem de fim de jogo
        fimdejogo.visible = true;

        if(keyDown("enter"))
        {
            taJogando = "play";
            groudTubo1.destroyEach();
            groudTubo2.destroyEach();
            
        

            passarinho.y = 300;  

            fimdejogo.visible = false
        }
    }

    drawSprites(); 
}

// função de criação dos tubo
//Nome Fidel
function criaTubo()
{
    
    //
    if(frameCount % 150 == 0)
    {
        ntubo = createSprite(460,0,10,10);
        stubo = createSprite(460,ntubo.x+cons,10,10);
        stubo.addImage(stuboImg);          
        ntubo.addImage(ntuboImg);     

        stubo.velocityX = -2;
        ntubo.velocityX = -2;
       
        
        var num = Math.random();
        if((num > 0.155)){
            ntubo.y = Math.floor(num*ntubo.x)-ntubo.x
            stubo.y = Math.floor(num*stubo.x)+stubo.x
        }

        groudTubo1.add(ntubo);
        groudTubo2.add(stubo);

    }
    


}