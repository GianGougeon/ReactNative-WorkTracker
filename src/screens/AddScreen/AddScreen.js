import React, { useState } from "react";
import { Text, TextInput, Button, View, ScrollView } from "react-native";
import { useDispatch } from "react-redux";
import { addItem } from "../../Actions/itemActions";

import { DataExample } from "../../utils/DataExample";

const AddScreen = ({ navigation }) => {
    const [newItem, setNewItem] = useState(DataExample);
    const dispatch = useDispatch();

    const handleChange = (value, field) => {
        setNewItem((prev) => ({ ...prev, [field]: value }));
    };

    const handleAdd = () => {
        dispatch(addItem(newItem));
        navigation.goBack();
    };

    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={styles.modalContainer}>
                <Text style={styles.modalTitle}>Agregar Nuevo Elemento</Text>

                <TextInput
                    style={styles.modalInput}
                    placeholder="Día"
                    value={newItem.dia}
                    onChangeText={(text) => handleChange(text, "dia")}
                />

                <TextInput
                    style={styles.modalInput}
                    placeholder="Fecha"
                    value={newItem.fecha}
                    onChangeText={(text) => handleChange(text, "fecha")}
                />

                <TextInput
                    style={styles.modalInput}
                    placeholder="Horas Normales"
                    value={newItem.horasN}
                    onChangeText={(text) => handleChange(text, "horasN")}
                />

                <TextInput
                    style={styles.modalInput}
                    placeholder="Horas Extras"
                    value={newItem.horaE}
                    onChangeText={(text) => handleChange(text, "horaE")}
                />

                <TextInput
                    style={styles.modalInput}
                    placeholder="Lugar"
                    value={newItem.lugar}
                    onChangeText={(text) => handleChange(text, "lugar")}
                />

                <TextInput
                    style={styles.modalInput}
                    placeholder="Descripción"
                    value={newItem.info}
                    onChangeText={(text) => handleChange(text, "info")}
                />

                <View style={styles.addButton}>
                    <Button title="Agregar" onPress={handleAdd} />
                </View>
            </View>
        </ScrollView>
    );
};
const styles = {
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
};
export default AddScreen;
