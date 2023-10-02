import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    title: {
        fontSize: 35,
        fontWeight: "500",
        marginBottom: 25,
        textAlign: "center",
        color: "#fff",
    },
    container: {
        flex: 1,
        padding: 30,
        paddingTop: 80,
        backgroundColor: "#626264",
    },
    containerRow: {
        padding: 20,
        shadowColor: "#000",
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
        
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff",
    },
    value: {
        fontSize: 16,
        flex: 1,
        marginLeft: 10,
        color: "#fff",
    },
    button:{
        paddingTop: 20
    }
});
