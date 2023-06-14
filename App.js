import { StyleSheet} from "react-native";
import Leitura from "./src/components/Leitura";
import MenuHome from "./src/components/MenuHome";
import Sobre from "./src/components/Sobre";
import Contatos from "./src/components/Contatos";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

const MenuStack = createStackNavigator();

function MenuScreenStack() {
  return (
    <MenuStack.Navigator>
      <MenuStack.Screen name="Menu" component={MenuHome} />
      <MenuStack.Screen name="Leitura" component={Leitura} />
      <MenuStack.Screen name="Sobre" component={Sobre} />
      <MenuStack.Screen name="Contatos" component={Contatos} />
    </MenuStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer style={styles.container}>   
      <MenuScreenStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    paddingTop: 80,
  },
});
