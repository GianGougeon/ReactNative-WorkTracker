import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        paddingTop: 80,
        paddingBottom: 80,
        backgroundColor: "#626264",
        height: 100,
    },
    title: {
        fontSize: 35,
        fontWeight: "500",
        marginBottom: 25,
        textAlign: "center",
        color: "#fff",
    },
    listContainer: {
        marginTop: 25,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    gridItem: {
        width: "45%",
        height: 120,
        marginVertical: 10,
        borderRadius: 2,
        justifyContent: "center",
        backgroundColor: "#2196F3",
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
        margin: 10,
    },
    readItem: {
        backgroundColor: "green",
    },
    itemText: {
        fontSize: 18,
        paddingLeft: 15,
        color: "#fff",
        fontWeight: "600",
    },
    readText: {
        fontSize: 16,
        paddingLeft: 15,
        color: "green",
        fontWeight: "600",
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
});
