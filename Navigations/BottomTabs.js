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
        <Tabs.Navigator screenOptions={{
            tabBarStyle:{
                backgroundColor:"rbg(0,0,0,0.5)",
                position:'absolute',
                bottom:0,
                left:0,
                right:0,
                shadowOpacity:4,
                shadowRadius:4,
                elevation:4,
                shadowOffset:{
                    width:0,
                    height:-4
                },
                borderTopWidth:0
            }
        }}>
            <Tabs.Screen name="Home" component={Home} 

            options={{tabBarLabel:'Home', headerShown:false, tabBarLabelStyle: {color:'white'},
            tabBarIcon:({focused}) => focused ? (
                <Entypo name="home" size={24} color="white" />
            ) : (
                <AntDesign name="home" size={24} color="white" />
            )
            }}/>

        <Tabs.Screen name="Profile" component={ProfileScreen} 

                options={{tabBarLabel:'Profile', headerShown:false, tabBarLabelStyle: {color:'white'},
                tabBarIcon:({focused}) => focused ? (
                    <Ionicons name="person-sharp" size={24} color="white" />
                ) : (
                    <MaterialIcons name="person-outline" size={24} color="white" />
                )
            }}/>
        </Tabs.Navigator>
    )
}