<h1>CalculadoraIMC<h1>
[Clique aqui para ver meu projeto funcionando!](https://youtube.com/shorts/cQ6MoWy_hSs?si=ikT0Z1z1rBRbeF0l)
Como iniciar o projeto: <br>
<ul>
<li>Instale o Node.js;<br></li>
<li>Instale o Expo Go no seu dispositivo móvel;<br></li>
<li>Instale o Expo CLI. Coloque o comando "npm install -g expo-cli" no terminal, e a instalação será feita;<br></li>
<li>Baixe os arquivos no seu computador, dentro de uma pasta chamada "CalculadoraIMC", e abra o terminal dentro desta pasta;<br></li>
Para iniciar o projeto, digite o comando "npx expo start --tunnel" no terminal, e escaneie o QR CODE gerado, lembrando que é necessário escanear o QR CODE dentro do aplicativo Expo Go.<br></li>
</ul>
Pronto! Seguindo esses passos o projeto deve iniciar sem problemas!<br>
<br>

Objetivo do projeto e explicação das funcionalidades:<br>
Este projeto tem o intuito de calcular o IMC de uma pessoa e informar em que estágio da tabela de peso ela se encontra. <br>
As funcionalidades adicionadas além do modelo pronto do projeto que foi disponibilizado, foram a tabela de IMC abaixo do resultado, e o estágio da tabela que o usuário se encontra juntamente ao cálculo do IMC.<br>

Explicação da tabela:<br>
A implementação da tabela foi bem simples, somente usei quebras de linha ({\n}) para organizar o texto e copiei as informações da tabela pelo Google.<br>

Explicação da classificação do usuário:<br>
Para adicionar a funcionalidade de informar o usuário em que classificação da tabela ele se encontra, criei uma variável do tipo let chamada mensagem, e defini ela como um espaço em branco. Após isso, criei diversos condicionais, dentro de cada condicional, estava a redefinição da variável mensagem correspondente à classificação do usuário na tabela de IMC. Os parâmetros analizavam o valor da variável imc, onde era armazenado o valor do cálculo final do imc do usuário, e a partir do resultado, era acionado a condicional correspondente.<br>
<br>

