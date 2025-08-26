import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ExpensedetailsScreen from '../screens/ExpenseDetailsScreen';
import EditExpenseScreen from '../screens/EditExpenseScreen';

const Stack= createStackNavigator();

const HomeStackNavigator=()=>{
    <Stack.Navigator initialRouteName='HomeScreen'>
        <Stack.Screen name='HomeScreen' component={HomeScreen} />
        <Stack.Screen name='ExpenseDetailsScreen' component={ExpenseDetailsScreen} />
        <Stack.Screen name='EditExpenseScreen' component={EditExpenseScreen} />
    </Stack.Navigator>
}