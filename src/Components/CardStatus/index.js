import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import axios from "axios";
import Icon from '@expo/vector-icons/FontAwesome5';
import Ionic from '@expo/vector-icons/Ionicons';

const CardStatus = () => {

    const { dataLogin } = useContext(AuthContext);

    const [data2, setData2] = useState([]);
    const config = {
        headers: {
            authorization: 'Bearer ' + dataLogin.token
        }
    };

    useEffect(() => {
        // Faz a requisição HTTP utilizando o Axios
        axios.post('http://localhost:5500/tasks/obterTasks', null, config)
            .then(response => {
                setData2(response.data); // Atualiza o estado com os dados da API
            })
            .catch(error => {
                console.error('Erro na requisição:', error);
            });
    }, []); // O segundo argumento vazio [] faz com que o useEffect seja executado apenas uma vez, ao montar o componente

    let qtdCadastrada = data2.filter(task => parseInt(task.status) == 1).length     // Cadastrada: 1
    let qtdEmExecucao = data2.filter(task => parseInt(task.status) == 2).length     // EmExecucao: 2
    let qtdFinalizadas = data2.filter(task => parseInt(task.status) == 3).length    // Finalizada: 3
    let qtdAtrasadas  = data2.filter(task => parseInt(task.status) == 4).length     // Atrasada:   4
    let qtdCanceladas = data2.filter(task => parseInt(task.status) == 5).length     // Cancelada:  5

    return (
        <ScrollView style={styles.ContainerCardsStatus} horizontal={true} showsHorizontalScrollIndicator={false} >
            <View style={styles.ContainerCard}>
                <View style={styles.ContainerCardIconValor}>
                    <Icon name="clipboard-list" size={23} color={'white'} style={styles.ContainerCardIcon}>
                    </Icon>
                    <Text style={styles.ContainerCardValor}>
                        {data2.length}
                    </Text>
                </View>
                <Text style={styles.ContainerCardTitulo}>
                    Cadastrada
                </Text>
                <View style={styles.ContainerCardTituloCadastrada} />
            </View>
            <View style={styles.ContainerCard}>
                <View style={styles.ContainerCardIconValor}>
                    <Icon name="clock" size={23} color={'white'} style={styles.ContainerCardIcon}>
                    </Icon>
                    <Text style={styles.ContainerCardValor}>
                        {qtdCadastrada}
                    </Text>
                </View>
                <Text style={styles.ContainerCardTitulo}>
                    Pendente
                </Text>
            </View>
            <View style={styles.ContainerCard}>
                <View style={styles.ContainerCardIconValor}>
                    <Icon name="play" size={23} color={'white'} style={styles.ContainerCardIcon}>
                    </Icon>
                    <Text style={styles.ContainerCardValor}>
                        {qtdEmExecucao}
                    </Text>
                </View>
                <Text style={styles.ContainerCardTitulo}>
                    Fazendo
                </Text>
            </View>
            <View style={styles.ContainerCard}>
                <View style={styles.ContainerCardIconValor}>
                    <Icon name="check" size={23} color={'white'} style={styles.ContainerCardIcon}>
                    </Icon>
                    <Text style={styles.ContainerCardValor}>
                        {qtdFinalizadas}
                    </Text>
                </View>
                <Text style={styles.ContainerCardTitulo}>
                    Feita
                </Text>
            </View>
            <View style={styles.ContainerCard}>
                <View style={styles.ContainerCardIconValor}>
                    <Icon name="exclamation" size={23} color={'white'} style={styles.ContainerCardIcon}>
                    </Icon>
                    <Text style={styles.ContainerCardValor}>
                        {qtdAtrasadas}
                    </Text>
                </View>
                <Text style={styles.ContainerCardTitulo}>
                    Atrasada
                </Text>
            </View>
            <View style={styles.ContainerCard}>
                <View style={styles.ContainerCardIconValor}>
                    <Icon name="ban" size={23} color={'white'} style={styles.ContainerCardIcon}>
                    </Icon>
                    <Text style={styles.ContainerCardValor}>
                        {qtdCanceladas}
                    </Text>
                </View>
                <Text style={styles.ContainerCardTitulo}>
                    Cancelada
                </Text>
            </View>
        </ScrollView >


    );
};

const styles = StyleSheet.create({
    ContainerCardsStatus: {
        marginTop: 10,
        padding: 10,
        paddingHorizontal: 2,
        borderRadius: 4,
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0
        },
    },
    ContainerCardsStatusLinha: {
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    ContainerCard: {
        backgroundColor: '#38a69d',
        marginHorizontal: 4,
        height: 80,
        width: 100,
        borderRadius: 20,
        borderColor: '#FFFAFA',
        borderWidth: 2,
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0
        },
    },
    ContainerCardTitulo: {
        fontSize: 15,
        paddingTop: 4,
        fontWeight: 'bold',
        marginHorizontal: 5,
        color: '#FFFAFA',
        alignSelf: 'center'
    },
    ContainerCardValor: {
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: 5,
        color: '#FFFAFA'
    },
    ContainerCardIconValor: {
        backgroundColor: '#76D7C4',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 40,
        width: 60,
        borderTopLeftRadius: 18,
        borderBottomRightRadius: 20,
        paddingHorizontal: 5,
    },
});

export default CardStatus;