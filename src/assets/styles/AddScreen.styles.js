import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "grey",
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#fff",
    },
    modalInput: {
        width: "80%",
        height: 40,
        borderWidth: 1,
        borderColor: "#ccc",
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    addButton: {
        margin: 10,
    },
});
