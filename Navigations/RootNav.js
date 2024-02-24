import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTab from "./BottomTabs";
import { View,Text } from "react-native";



const Stack = createNativeStackNavigator();

export default function RootNav(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Main" component={BottomTab} options={{headerShown:false}}/>
            </Stack.Navigator>
            
        </NavigationContainer>
        

    )
}