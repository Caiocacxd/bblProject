import { StyleSheet} from "react-native";
import Title from "./src/components/Title";
import MenuHome from "./src/components/MenuHome";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

const MenuStack = createStackNavigator();

function MenuScreenStack() {
  return (
    <MenuStack.Navigator>
      <MenuStack.Screen name="Menu" component={MenuHome} />
      <MenuStack.Screen name="Ler" component={Title} />
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
