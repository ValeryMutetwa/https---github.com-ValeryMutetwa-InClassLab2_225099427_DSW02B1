import  {useState} from 'react'
import {NavigationCOntiner} from 'react-navigation/native'
import { createNativeStackNavigator } from 'expo-router/build/react-navigation/native-stack'

import MenuScreen from './MenuScreen'
import CartScreen from './CartScreen'
import UserDetailScreen from './UserDetailScreen'

const Stack = createNativeStackNavigator()

function App(){
    const [carrtItems,setCartItems]= useState([])

    return(
        <NavigationCOntiner>
            <Stack.Navigator>
<Stack.Screen name= "My Menu">
    {(props)=>(
        <MenuScreen{...props} cartItems={cartItems} setCartItems={setCartItems}/>

    )}
</Stack.Screen>

<Stack.Screen name= "My Cart">
    {(props)=>(
        <CartScreen{...props} cartItems={cartItems} setCartItems={setCartItems}/>

    )}
</Stack.Screen>

<Stack.Screen name= "User Details">
    {(props)=>(
        <UserDetailsScreen{...props} cartItems={cartItems} setCartItems={setCartItems}/>

    )}
</Stack.Screen>




            </Stack.Navigator>
        </NavigationCOntiner>
    )
}


export default App