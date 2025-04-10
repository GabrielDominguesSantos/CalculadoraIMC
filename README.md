CalculadoraIMC

Como iniciar o projeto: 
1 - Instale o Node.js;
2 - Instale o Expo Go no seu dispositivo móvel;
3 - Instale o Expo CLI. Coloque o comando "npm install -g expo-cli" no terminal, e a instalação será feita;
4 - Baixe os arquivos no seu computador, dentro de uma pasta chamada "CalculadoraIMC", e abra o terminal dentro desta pasta;
5 - Para iniciar o projeto, digite o comando "npx expo start --tunnel" no terminal, e escaneie o QR CODE gerado, lembrando que é necessário escanear o QR CODE dentro do aplicativo Expo Go.
Pronto! Seguindo esses passos o projeto deve iniciar sem problemas!


Objetivo do projeto e explicação das funcionalidades:
Este projeto tem o intuito de calcular o IMC de uma pessoa e informar em que estágio da tabela de peso ela se encontra. 
As funcionalidades adicionadas além do modelo pronto do projeto que foi disponibilizado, foram a tabela de IMC abaixo do resultado, e o estágio da tabela que o usuário se encontra juntamente ao cálculo do IMC.

Explicação da tabela:
A implementação da tabela foi bem simples, somente usei quebras de linha ({\n}) para organizar o texto e copiei as informações da tabela pelo Google.

Explicação da classificação do usuário:
Para adicionar a funcionalidade de informar o usuário em que classificação da tabela ele se encontra, criei uma variável do tipo let chamada mensagem, e defini ela como um espaço em branco. Após isso, criei diversos condicionais, dentro de cada condicional, estava a redefinição da variável mensagem correspondente à classificação do usuário na tabela de IMC. Os parâmetros analizavam o valor da variável imc, onde era armazenado o valor do cálculo final do imc do usuário, e a partir do resultado, era acionado a condicional correspondente.


Link do vídeo da calculadora em funcionamento: https://youtube.com/shorts/cQ6MoWy_hSs?si=ikT0Z1z1rBRbeF0l
