const texto = `
LUCAS TRINDADE DA SILVA
27 anos, Masculino, Natural de Caruaru - Pernambuco, Brasil
Contato: lucasdevjava@gmail.com | (81) 98123-2279
GitHub: https://github.com/lucastrindade222
LinkedIn: https://www.linkedin.com/in/lucas-trindade-da-silva-3438981a0/

Resumo:
Desenvolvedor Back-end | DEVDUO (Ago/2020 - Ago/2022)
Desenvolvedor Full Stack | TECH SOLUTIO (Out/2022 - Presente)

Objetivo Profissional:
Busco oportunidades para expandir meu conhecimento e adquirir novas experiências...

Habilidades e Ferramentas:
- Back-end: Java, Spring Boot, Node.js
- Front-end: Angular, Vue.js, Ionic
- DevOps & Banco de Dados: Docker, MariaDB
- Ferramentas: Git, Trello, Scrum
`;

let index = 0;
function digitarTexto() {
    if (index < texto.length) {
        document.getElementById("terminal-output").textContent += texto.charAt(index);
        index++;
        setTimeout(digitarTexto, 50); // Ajuste o tempo para controlar a velocidade da digitação
    }
}

document.addEventListener("DOMContentLoaded", digitarTexto);
