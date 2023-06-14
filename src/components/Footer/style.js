import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    boxFooter:{
        flex: 1,
        //marginTop: 35,
    },
    textFooter:{
        alignItems: "flex-start",
        //justifyContent: "center",
        fontSize: 10,
        fontStyle:"italic",
        fontWeight:"bold",
        marginTop: 220,
        marginLeft: 10,
        textShadowColor: "#FFD700",
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
    },
});

export default styles;