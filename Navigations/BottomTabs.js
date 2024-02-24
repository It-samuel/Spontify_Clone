import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Sreens/Home";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import ProfileScreen from "../Sreens/ProfileScreen";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Tabs = createBottomTabNavigator()

export default function BottomTab() {
    return(
        <Tabs.Navigator>
            <Tabs.Screen name="Home" component={Home} 
            options={{tabBarLabel:'Home', headerShown:false, tabBarLabelStyle: {color:'white'},
            tabBarIcon:({focused}) => focused ? (
                <Entypo name="home" size={24} color="black" />
            ) : (
                <AntDesign name="home" size={24} color="black" />
            )
            }}/>

<Tabs.Screen name="Profile" component={ProfileScreen} 
            options={{tabBarLabel:'Profile', headerShown:false, tabBarLabelStyle: {color:'white'},
            tabBarIcon:({focused}) => focused ? (
                <Ionicons name="person-sharp" size={24} color="black" />
            ) : (
                <MaterialIcons name="person-outline" size={24} color="black" />
            )
            }}/>
        </Tabs.Navigator>
    )
}