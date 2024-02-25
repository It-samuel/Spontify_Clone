import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTab from "./BottomTabs";
import { View,Text } from "react-native";
import LoginScreen from "../Sreens/LoginScreen";



const Stack = createNativeStackNavigator();

export default function RootNav(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
                <Stack.Screen name="Main" component={BottomTab} options={{headerShown:false}}/>
            </Stack.Navigator>
            
        </NavigationContainer>
        

    )
}