import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    boxTitle: {
        flex: 0.5,
        alignItems: "center",
        justifyContent: "center",
    },
    textTitle: {
        color:"#36D2EE",
        fontSize: 40,
        fontWeight:"900",
        rowGap: 40, // margin: 30 (tem efeito parecido, mas muito maior)
        fontFamily: "Times New Roman",
        fontStyle: "italic",
        color: "white",
        textShadowColor: "#000000",
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
    },
});

export default styles;