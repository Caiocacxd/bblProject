import {TouchableOpacity, Text, View} from "react-native";
import Title from "../Title";
import Footer from "../Footer";
import styles from "./style";

export default function MenuHome({navigation: {navigate}}){
    return(
        <View style={styles.boxMenu}>
            <Title/>
            <TouchableOpacity style={styles.boxBotoes} onPress={() => navigate('Leitura')}><Text style={styles.textoLer}>Ler a Bíblia</Text></TouchableOpacity>
            <TouchableOpacity style={styles.boxBotoes} onPress={() => nagivate('')}><Text style={styles.textoLer}>Sobre</Text></TouchableOpacity>
            <TouchableOpacity style={styles.boxBotoes} onPress={() => nagivate('')}><Text style={styles.textoLer}>Contato</Text></TouchableOpacity>
            <Footer/>
        </View>
    );
}