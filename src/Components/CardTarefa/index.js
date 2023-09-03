import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import axios from "axios";

const CardTarefa = () => {

    const { dataLogin } = useContext(AuthContext);

    const [data, setData] = useState([]);
    const config = {
        headers: {
            authorization: 'Bearer ' + dataLogin.token
        }
    };

    useEffect(() => {
        // Faz a requisição HTTP utilizando o Axios
        axios.post('http://localhost:5500/tasks/obterTasks', null, config)
            .then(response => {
                setData(response.data); // Atualiza o estado com os dados da API
                // console.log(data)
            })
            .catch(error => {
                console.error('Erro na requisição:', error);
            });
    }, []); // O segundo argumento vazio [] faz com que o useEffect seja executado apenas uma vez, ao montar o componente

    return (
        <View style={{ flex: 1 }}>
            {data.map(item => (
                <TouchableOpacity key={item.id}>
                    <View style={styles.card}>
                        <View style={styles.cardContent}>
                            <Text style={styles.cardTitle}>{item.titulo}</Text>
                            <Text style={styles.cardSubtitle}>{item.descricao}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        padding: 10,
        paddingLeft: 6
    },
    cardImage: {
        width: 10,
        height: 80,
        borderRadius: 40,
    },
    cardContent: {
        // marginLeft: 6,
    },
    cardTitle: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    cardSubtitle: {
        fontSize: 13,
        color: '#666',
    },
});

export default CardTarefa;