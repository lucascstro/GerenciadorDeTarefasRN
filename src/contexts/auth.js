import { Alert } from 'react-native'
import React, { createContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';

export const AuthContext = createContext({})

function AuthProvider({ children }) {
    const [dataLogin, setDataLogin] = useState([]);
    const navigation = useNavigation();

    function singIn(user, password) {
        const data =
        {
            "user": user.toString(),
            "password": password.toString()
        }

        // Faz a requisição HTTP utilizando o Axios
        axios.post('http://localhost:5500/users/login', data)
            .then(response => {
                setDataLogin(response.data); // Atualiza o estado com os dados da API
                console.log(response.data);
                return navigation.navigate('Main');
            })
            .catch(error => {
                Alert.alert('Aviso', 'Usuário ou senha inválido.')
                if (error.response) {
                    const { data } = error.response;

                    if (data && data.errorCode && data.errorMessage) {
                        console.log(`Error Code: ${data.errorCode}`);
                        console.log(`Error Message: ${data.errorMessage}`);
                    } else {
                        console.log('An unexpected error occurred:', error.response.status);
                    }
                } else {
                    console.log('Network error or request timeout:', error.message);
                }
            });
    }
    return (
        <AuthContext.Provider value={{ singIn, dataLogin }}>
            {children}
        </AuthContext.Provider>
    )

}
export default AuthProvider;