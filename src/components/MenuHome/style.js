import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    boxMenu:{
        flex: 1,
        aligntItems: "center",
        justifyContent:"center", //paddingTop, paddingLeft( quebram essa propriedade)
        backgroundColor: "#FFD700",
        borderRadius: 30,
        marginTop: 20,
        rowGap: 40, // margin: 30 (tem efeito parecido, mas muito maior)
        fontFamily: "Times New Roman",
        fontStyle: "italic",
        color: "white",
        textShadowColor: "#000000",
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
    },
    boxBotoes:{
        alignSelf:"center",
        alignItems:"center",
        justifyContent:"center",
        width:"50%",
        backgroundColor:"black",
        borderRadius: 50,
        padding: 10,
    },
    textoLer:{
        fontSize: 20,
        color:"#FFFFFF",
        fontWeight: "700"
    },
});

export default styles;