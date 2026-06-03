function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
// Variáveis para controlar o estado das perguntas (falso = fechado, verdadeiro = aberto)
let perguntas = [
  {
    titulo: "1. Como produzir mais sem desmatar?",
    resposta: "Através da tecnologia e agricultura de precisão. O uso de drones, análise de solo e rotação de culturas (como a integração Lavoura-Pecuária-Floresta) permite duplicar a produção reaproveitando áreas já abertas.",
    aberta: false
  },
  {
    titulo: "2. O que é o manejo sustentável da água?",
    resposta: "É o uso de sistemas como a irrigação por gotejamento, captação de água da chuva e monitoramento da umidade do solo em tempo real, evitando o desperdício de recursos hídricos.",
    aberta: false
  },
  {
    titulo: "3. Qual o papel da tecnologia no futuro do Agro?",
    resposta: "A tecnologia traz eficiência. Tratores autônomos diminuem a compactação do solo, sensores reduzem o uso de defensivos agrícolas ao aplicá-los apenas onde é necessário, e a IA prevê safras com precisão.",
    aberta: false
  }
];

// Configuração dos cards de "fotos" (Simuladas com desenhos em p5.js)
let fotos = [
  { cor: '#2E7D32', texto: "Tecnologia no Campo" }, // Verde Escuro
  { cor: '#81C784', texto: "Preservação Ambiental" }, // Verde Claro
  { cor: '#FFB74D', texto: "Energia Renovável" }   // Laranja/Sol
];

function setup() {
  createCanvas(800, 900);
}

function draw() {
  background('#F4F6F4'); // Fundo cinza-esverdeado bem claro e limpo
  
  // --- 1. CABEÇALHO ---
  desenharCabecalho();
  
  // --- 2. SEÇÃO DE FOTOS (ILUSTRAÇÕES) ---
  desenharSecaoFotos();
  
  // --- 3. SEÇÃO DE PERGUNTAS E RESPOSTAS ---
  desenharSecaoPerguntas();
}

function desenharCabecalho() {
  fill('#1B5E20'); // Verde escuro sustentável
  noStroke();
  rect(0, 0, width, 160);
  
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(28);
  textStyle(BOLD);
  text("AGRO FORTE & FUTURO SUSTENTÁVEL", width / 2, 60);
  
  textSize(16);
  textStyle(NORMAL);
  fill('#E8F5E9');
  text("O equilíbrio perfeito entre a alta produção e a preservação do meio ambiente", width / 2, 110);
}

function desenharSecaoFotos() {
  fill('#333333');
  textSize(20);
  textStyle(BOLD);
  textAlign(LEFT, TOP);
  text("Pilares do Futuro:", 50, 200);
  
  // Desenha os 3 blocos de "fotos" side-by-side
  let largCard = 210;
  let altCard = 140;
  let espaco = 35;
  
  for(let i = 0; i < fotos.length; i++) {
    let x = 50 + i * (largCard + espaco);
    let y = 240;
    
    // Card (Foto)
    fill(fotos[i].cor);
    noStroke();
    rect(x, y, largCard, altCard, 10); // Borda arredondada
    
    // Detalhe visual simulando uma foto/gráfico geométrico simples
    fill(255, 50);
    ellipse(x + largCard/2, y + altCard/2, 80, 80);
    
    // Legenda da Foto
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(14);
    textStyle(BOLD);
    text(fotos[i].texto, x + largCard/2, y + altCard/2);
  }
}

function desenharSecaoPerguntas() {
  fill('#333333');
  textSize(20);
  textStyle(BOLD);
  textAlign(LEFT, TOP);
  text("Perguntas Frequentes (Clique para Expandir):", 50, 440);
  
  let posY = 490;
  
  for(let i = 0; i < perguntas.length; i++) {
    // Caixa da pergunta
    fill(perguntas[i].aberta ? '#E8F5E9' : 255);
    stroke('#1B5E20');
    strokeWeight(1);
    rect(50, posY, 700, 45, 5);
    
    // Texto da pergunta
    fill('#1B5E20');
    noStroke();
    textStyle(BOLD);
    textSize(15);
    textAlign(LEFT, CENTER);
    text(perguntas[i].titulo, 70, posY + 22);
    
    // Seta indicativa (+ ou -)
    textAlign(RIGHT, CENTER);
    text(perguntas[i].aberta ? "−" : "+", 730, posY + 22);
    
    // Se estiver aberta, mostra a resposta embaixo
    if(perguntas[i].aberta) {
      fill('#555555');
      textStyle(NORMAL);
      textSize(14);
      textAlign(LEFT, TOP);
      // textWrap permite que o texto quebre a linha automaticamente dentro do limite do canvas
      textWrap(WORD);
      text(perguntas[i].resposta, 70, posY + 60, 660);
      
      // Aumenta o espaço para a próxima pergunta se a resposta estiver visível
      posY += 130; 
    } else {
      posY += 65; // Espaço normal se estiver fechada
    }
  }
}

// Detecta os cliques do mouse para abrir e fechar as perguntas
function mousePressed() {
  let posY = 490;
  
  for(let i = 0; i < perguntas.length; i++) {
    // Verifica se o clique do mouse foi dentro da barra da pergunta correspondente
    if(mouseX > 50 && mouseX < 750 && mouseY > posY && mouseY < posY + 45) {
      // Inverte o estado (se estava aberto, fecha; se estava fechado, abre)
      perguntas[i].aberta = !perguntas[i].aberta;
    }
    
    // Atualiza a posição da checagem dinamicamente com base no estado aberto/fechado
    if(perguntas[i].aberta) {
      posY += 130;
    } else {
      posY += 65;
    }
  }
}