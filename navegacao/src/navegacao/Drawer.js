import React from 'react'
import { createDrawerNavigator } from  '@react-navigation/drawer'
import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'
import TelaD from '../views/TelaD'

const Drawer = createDrawerNavigator()

export default props => (
   <Drawer.Navigator tabBarOptions={{
      activeTintColor: 'red',
      inactiveTintColor: 'blue',
      labelStyle: { fontSize: 30 }
   }} initialRouteName="TelaD">
      <Drawer.Screen name="Tela D" component={TelaD} />
      <Drawer.Screen name="Tela A" component={TelaA} />
      <Drawer.Screen name="Tela B" component={TelaB} />
      <Drawer.Screen name="Tela C" component={TelaC} />
   </Drawer.Navigator>
)
