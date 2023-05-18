import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    boxMenu:{
        flex: 1,
        aligntItems: "center",
        justifyContent:"center", //paddingTop, paddingLeft( quebram essa propriedade)
        backgroundColor: "#FFFFFF",
        borderRadius: 30,
        marginTop: 20,
        marginLeft: 35,
        marginRight:35,
        rowGap: 40 // margin: 30 (tem efeito parecido, mas muito maior)
    },
    boxBotoes:{
        alignItems:"center",
        justifyContent:"center",
        width:"50%",
        marginLeft: 80,
        backgroundColor:"#FF0043",
        borderRadius: 50,
        padding: 10,
        //paddingTop: 15,
        //paddingLeft: 14,
        
    },
    textoLer:{
        fontSize: 20,
        color:"#FFFFFF",
    },
});

export default styles;