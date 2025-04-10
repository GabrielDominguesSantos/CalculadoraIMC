import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Result = ({ imc }) => {

    let mensagem = '';
    if (imc < 18.5) {
        mensagem = 'Você está abaixo do peso recomendado.';
    } else if (imc < 25) {
        mensagem = 'Você está com o peso adequado.';
    } else if (imc < 30) {
        mensagem = 'Você está com sobrepeso.';
    } else if (imc < 35) {
        mensagem = 'Você está com obesidade grau I.';
    } else if (imc < 40) {
        mensagem = 'Você está com obesidade grau II.';
    } else {
        mensagem = 'Você está com obesidade grau III.';
    }
    return(
        <View style={styles.result}>
            <Text style={styles.result}>Seu IMC é: {imc}. {mensagem}{"\n"}{"\n"}
            Tabela de IMC:{"\n"}
            Menor que 18,5 - Baixo peso{"\n"}
            Entre 18,5 e 24,9 - Peso adequado{"\n"}
            Entre 25 e 29,9 - Sobrepeso{"\n"}
            Entre 30 e 34,9 - Obesidade grau I{"\n"}
            Entre 35 e 39,9 - Obesidade grau II{"\n"}
            Maior que 40 - Obesidade grau III</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    result: {
        marginTop: 10,
        fontSize: 24,
        textAlign: 'center',
        color: '#333',
        lineHeight: 35,
    },
});

export default Result;