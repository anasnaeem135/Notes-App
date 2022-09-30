import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Provider } from "react-redux";
import { store } from "./src/redux/store";

import CreateNote from "./src/screens/createNote/CreateNote";
import Note from "./src/screens/note/Note";
import ViewCard from "./src/screens/viewCard/ViewCard";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Note"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Note" component={Note}></Stack.Screen>
          <Stack.Screen name="CreateNote" component={CreateNote}></Stack.Screen>
          <Stack.Screen name="ViewCard" component={ViewCard}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
