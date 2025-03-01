import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'react-native-paper';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import { screenHeight } from '../utils/sizeHelper';
import Icon from '../svg/svg';

const Tab = createBottomTabNavigator();

export default function HomeBottomBar() {
    const theme = useTheme();

    return (
        <View style={{ flex: 1}}>
            <Tab.Navigator
                id={undefined}
                initialRouteName="Home"
                screenOptions={({ route }) => ({
                    tabBarStyle: {
                        backgroundColor: 'white',
                        height: screenHeight * 0.1, 
                        borderTopWidth: 0,
                        elevation: 0,
                    },
                    headerShown: false,
                    tabBarShowLabel: true,
                    tabBarHideOnKeyboard: true,
                    tabBarLabelStyle: {
                        fontSize: 12, 
                        marginBottom: 4, 
                    },
                    tabBarIcon: ({ focused, color }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home';
                        } else if (route.name === 'Diagnose') {
                            iconName = focused ? 'health' : 'health';
                        } else if (route.name === 'MyGarden') {
                            iconName = focused ? 'garden' : 'garden';
                        } else if (route.name === 'Profile') {
                            iconName = focused ? 'profile' : 'profile';
                        }

                        return <Icon iconName={iconName} size={screenHeight * 0.03} color={color} />;
                    },
                    tabBarInactiveTintColor: theme.colors.placeholder,
                    tabBarActiveTintColor: theme.colors.primary,
                })}
            >
                <Tab.Screen 
                    name="Home" 
                    component={HomeScreen} 
                    options={{ tabBarLabel: 'Home' }} // İkonun altındaki metin
                />
                <Tab.Screen 
                    name="Diagnose" 
                    component={HomeScreen} 
                    options={{ tabBarLabel: 'Diagnose' }} // İkonun altındaki metin
                />
                <Tab.Screen
                    name="CenterButton"
                    component={HomeScreen}
                    options={{
                        tabBarLabel: '', // Merkez butonun altında metin olmasın
                        tabBarButton: (props) => (
                            <TouchableOpacity
                                {...props}
                                activeOpacity={0.8}
                                style={{
                                    top: -30,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: 64,
                                    height: 64,
                                    borderRadius: 35,
                                    backgroundColor: "rgba(44, 204, 128, 1)",
                                    elevation: 5,
                                    padding: 10,
                                }}
                            >
                                <View style={{ backgroundColor: "rgba(40, 175, 110, 1)", borderRadius: 35, width: 56, height: 56, justifyContent: 'center', alignItems: 'center' }}>
                                    <Icon iconName="scan" size={30} color="white" />
                                </View>
                            </TouchableOpacity>
                        ),
                    }}
                />
                <Tab.Screen 
                    name="MyGarden" 
                    component={HomeScreen} 
                    options={{ tabBarLabel: 'My Garden' }} // İkonun altındaki metin
                />
                <Tab.Screen 
                    name="Profile" 
                    component={HomeScreen} 
                    options={{ tabBarLabel: 'Profile' }} // İkonun altındaki metin
                />
            </Tab.Navigator>
        </View>
    );
}