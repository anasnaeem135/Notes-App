import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CreateNote from '../screens/createNote/index';
import Note from '../screens/note/index';
import ViewCard from '../screens/viewCard/index';
import Login from '../screens/login/index';
import Signup from '../screens/signup/index';

const Stack = createNativeStackNavigator();
const RootNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Note"
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Note" component={Note}></Stack.Screen>
            <Stack.Screen
                name="CreateNote"
                component={CreateNote}></Stack.Screen>
            <Stack.Screen name="ViewCard" component={ViewCard}></Stack.Screen>
            <Stack.Screen name="Login" component={Login}></Stack.Screen>
            <Stack.Screen name="Signup" component={Signup}></Stack.Screen>
        </Stack.Navigator>
    );
};

export default RootNavigator;
