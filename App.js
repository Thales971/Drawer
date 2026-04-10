import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

function HomeScreen() {
    return (
        <View style={styles.screen}>
            <Text style={styles.text}>Início</Text>
        </View>
    );
}

function ProfileScreen() {
    return (
        <View style={styles.screen}>
            <Text style={styles.text}>Perfil</Text>
        </View>
    );
}

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName='Home'>
                <Drawer.Screen
                    name='Home'
                    component={HomeScreen}
                    options={{ title: 'Página Inicial' }}
                />
                <Drawer.Screen
                    name='Profile'
                    component={ProfileScreen}
                    options={{ title: 'Meu Perfil' }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f4f8', // Fundo mais suave e moderno
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#334155', // Cor de texto mais elegante que o preto puro
        letterSpacing: 0.5,
    },
});
