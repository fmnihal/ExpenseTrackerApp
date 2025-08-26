import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackNavigator from './HomeStackNavigator';
import AddExpenseScreen from '../screens/AddExpenseScreen';
import StatisticsScreen from '../screens/StatisticsScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab= createBottomTabNavigator();

const TabNavigator=()=>{
    <Tab.Navigator>
        <Tab.Screen name='HomeStack' component={HomeStackNavigator} />
        <Tab.Screen name='AddExpense' component={AddExpenseScreen} />
        <Tab.Screen name='Statistics' component={StatisticsScreen} />
        <Tab.Screen name='Settings' component={SettingsScreen} />
    </Tab.Navigator>
}

export default TabNavigator;