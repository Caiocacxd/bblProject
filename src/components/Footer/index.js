import { Text, View } from "react-native";
import styles from "./style";

export default function Footer(){
    return(
        <View style={styles.boxFooter}>
            <Text style={styles.textFooter}>2023 Estacio.Fic /BibliaConnect</Text>
        </View>
    );
}