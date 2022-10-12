import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RootNavigator from './src/navigator/rootNavigator';

import { Provider } from 'react-redux';
import { store } from './src/redux/store';
const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="rootNavigator"
                    screenOptions={{ headerShown: false }}>
                    <Stack.Screen
                        name="rootNavigator"
                        component={RootNavigator}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
