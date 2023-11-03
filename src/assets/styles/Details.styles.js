import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#626264",
    },
    dateText: {
        fontSize: 18,
        marginVertical: 10,
    },
    hoursContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 10,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: "#DDD",
        padding: 10,
    },
    hoursText: {
        fontSize: 16,
    },
    editButton: {
        backgroundColor: "#DDD",
        padding: 5,
        borderRadius: 5,
    },
});
