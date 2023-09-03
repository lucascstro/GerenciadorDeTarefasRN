import React, { useContext, useState } from 'react';
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    StatusBar,
    SafeAreaView,
    Platform,
    ScrollView
} from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome5';
import Ionic from '@expo/vector-icons/Ionicons';
import CardTarefa from '../../Components/CardTarefa/index';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { AuthContext } from '../../contexts/auth';
import CardStatus from '../../Components/CardStatus';

export default function Main() {
    const statusBarColor = '#38a69d';
    const { dataLogin } = useContext(AuthContext);
    const [MenuSelecionado, setMenuSelecionadoValue] = useState(1);

    return (
        <SafeAreaView style={[styles.safeContainer, { backgroundColor: statusBarColor }]}>
            <StatusBar
                backgroundColor={statusBarColor}
                barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'} // Defina o estilo do texto da StatusBar baseado na plataforma
            />
            <View style={styles.Container}>
                <View style={styles.ContainerHeader}>
                    <View style={styles.ContainerButtons}>
                        <TouchableOpacity >
                            <Ionic name="menu" size={23} color={'white'} style={styles.IconBars}></Ionic>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.IconUser}>
                            <Icon name="user" size={18} color={statusBarColor} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.ContainerMenuText}>
                        <Text style={styles.ContainerMenuTextWelcome}>
                            Olá,  {dataLogin.nomeUsuario}
                        </Text>
                    </View>
                    <CardStatus />
                </View>
                <ScrollView style={styles.ContainerDados}>
                    <View style={styles.ContainerTarefasDoDia}>
                        <View style={styles.ContainerTarefasDoDiaDescricao}>
                            <Text style={styles.ContainerTarefasDoDiaTitulo}>
                                Hoje
                            </Text>
                            <Text style={styles.ContainerTarefasDoDiaSubTitulo}>
                                , 30/08/2023
                            </Text>
                        </View>
                        <CardTarefa />
                    </View>
                    <View style={styles.ContainerTarefasDoDia}>
                        <View style={styles.ContainerTarefasDoDiaDescricao}>
                            <Text style={styles.ContainerTarefasDoDiaTitulo}>
                                Amanhã
                            </Text>
                            <Text style={styles.ContainerTarefasDoDiaSubTitulo}>
                                , 31/08/2023
                            </Text>
                        </View>
                        <CardTarefa />
                    </View>
                    <View style={styles.ContainerTarefasDoDia}>
                        <View style={styles.ContainerTarefasDoDiaDescricao}>
                            <Text style={styles.ContainerTarefasDoDiaTituloUltimo}>
                                Próximos dias...
                            </Text>
                        </View>
                        <CardTarefa />
                    </View>
                </ScrollView>
                <View style={styles.ContainerFooter}>
                    <TouchableOpacity style={MenuSelecionado == 1 ? styles.IconsMenuSelecionado : styles.IconsMenu} onPress={() => setMenuSelecionadoValue(1)}>
                        <Ionic name="home" size={18} color={MenuSelecionado == 1 ? statusBarColor : 'white'} />
                        <Text style={MenuSelecionado == 1 ? styles.IconsMenuTituloSelecionado : styles.IconsMenuTitulo}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={MenuSelecionado == 2 ? styles.IconsMenuSelecionado : styles.IconsMenu} onPress={() => setMenuSelecionadoValue(2)}>
                        <Ionic name="list-outline" size={18} color={MenuSelecionado == 2 ? statusBarColor : 'white'} />
                        <Text style={MenuSelecionado == 2 ? styles.IconsMenuTituloSelecionado : styles.IconsMenuTitulo}>Pendentes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={MenuSelecionado == 3 ? styles.IconsMenuSelecionado : styles.IconsMenu} onPress={() => setMenuSelecionadoValue(3)} >
                        <Ionic name="flash-outline" size={18} color={MenuSelecionado == 3 ? statusBarColor : 'white'} />
                        <Text style={MenuSelecionado == 3 ? styles.IconsMenuTituloSelecionado : styles.IconsMenuTitulo}>Fazendo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={MenuSelecionado == 4 ? styles.IconsMenuSelecionado : styles.IconsMenu} onPress={() => setMenuSelecionadoValue(4)}>
                        <Ionic name="checkmark-done-outline" size={18} color={MenuSelecionado == 4 ? statusBarColor : 'white'} />
                        <Text style={MenuSelecionado == 4 ? styles.IconsMenuTituloSelecionado : styles.IconsMenuTitulo}>Feitas</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#f6f8fa',
        flex: 1,
    },
    safeContainer: {
        flex: 1,
        paddingTop: getStatusBarHeight(true),
    },
    ContainerHeader: {
        height: 200,
        backgroundColor: '#38a69d',
        borderBottomRightRadius: 999,
    },
    ContainerButtons: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    IconUser: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 40,
        backgroundColor: 'white',
        borderRadius: 20,
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0
        },
    },
    IconBars: {
        shadowOpacity: 0.3,
    },
    ContainerMenuText: {
        marginLeft: 20,
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0
        },
    },
    ContainerMenuTextWelcome: {
        color: 'white',
        fontSize: 21,
        fontWeight: 'bold',
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0
        },
    },
    ContainerDados: {
        height: '100%',
        margin: 20,
    },
    ContainerTarefasDoDia: {
        marginHorizontal: 20,
        height: 'auto',
        marginBottom: 15
    },
    ContainerTarefasDoDiaDescricao: {
        flexDirection: 'row',
    },
    ContainerTarefasDoDiaTitulo: {
        fontSize: 27,
        fontWeight: 'bold'
    },
    ContainerTarefasDoDiaSubTitulo: {
        fontSize: 14,
        marginTop: 15,
        marginLeft: 2
    },
    ContainerTarefasDoDiaTituloUltimo: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    ContainerFooter: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#38a69d',
        height: 80,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'space-between',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 1900,
        paddingHorizontal: 20,
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0
        },
    },
    IconsMenu: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 70,
        borderRadius: 10,
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0
        },
        marginHorizontal: 5
    },
    IconsMenuSelecionado: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 70,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0
        },
        marginHorizontal: 5
    },
    IconsMenuTitulo: {
        fontSize: 10,
        fontWeight: 'bold',
        color: 'white'
    },
    IconsMenuTituloSelecionado: {
        fontSize: 10,
        fontWeight: 'bold',
        color:'#38a69d'
    }
});