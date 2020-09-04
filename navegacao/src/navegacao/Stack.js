import React from 'react'
import { createStackNavigator } from  '@react-navigation/stack'
import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'
import PassoStack from '../components/PassoStack'

const Stack = createStackNavigator()

export default props => (
   <Stack.Navigator initialRouteName='TelaA'
      screenOptions={{ headerShown: true }} >
      <Stack.Screen name = 'TelaA' 
         options={{title: 'Menu Principal '}}>
         {props => (
            <PassoStack {...props} avancar="TelaB">
               <TelaA />
            </PassoStack>
         )}
      </Stack.Screen>
      <Stack.Screen name = 'TelaB'
         options={{title: 'Informações da Tela B '}}>
         {props => (
            <PassoStack {...props} avancar="TelaC" voltar>
               <TelaB />
            </PassoStack>
         )}
      </Stack.Screen>
      <Stack.Screen name = 'TelaC'
         options={{title: 'Informações da Tela C '}}>
         {props => (
            <PassoStack {...props} avancar="TelaC" voltar>
               <TelaC {...props} />
            </PassoStack>
         )}
      </Stack.Screen>
   </Stack.Navigator>
)
