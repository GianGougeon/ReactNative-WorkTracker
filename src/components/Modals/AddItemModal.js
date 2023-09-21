import React from "react";
import { Modal, Text, TextInput, Button, View } from "react-native";

const AddItemModal = ({
    visible,
    closeModal,
    newItem,
    onHandleChangeItem,
    addItem,
}) => {
    return (
        <Modal visible={visible} onRequestClose={closeModal} transparent={true}>
            <View style={styles.modalContainer}>
                <Text style={styles.modalTitle}>Agregar Nuevo Elemento</Text>
                <TextInput
                    style={styles.modalInput}
                    placeholder="Día"
                    value={newItem.dia}
                    onChangeText={(text) => onHandleChangeItem(text, "dia")}
                />
                <TextInput
                    style={styles.modalInput}
                    placeholder="Fecha"
                    value={newItem.fecha}
                    onChangeText={(text) => onHandleChangeItem(text, "fecha")}
                />
                <TextInput
                    style={styles.modalInput}
                    placeholder="Horas Normales"
                    value={newItem.horasNormales}
                    onChangeText={(text) =>
                        onHandleChangeItem(text, "horasN")
                    }
                />
                <TextInput
                    style={styles.modalInput}
                    placeholder="Horas Extras"
                    value={newItem.horaExtras}
                    onChangeText={(text) =>
                        onHandleChangeItem(text, "horaE")
                    }
                />
                <TextInput
                    style={styles.modalInput}
                    placeholder="Lugar"
                    value={newItem.lugar}
                    onChangeText={(text) => onHandleChangeItem(text, "lugar")}
                />
                <TextInput
                    style={styles.modalInput}
                    placeholder="Descripción"
                    value={newItem.descripcion}
                    onChangeText={(text) =>
                        onHandleChangeItem(text, "info")
                    }
                />
                <View
                    style={styles.addButton}
                >
                    <Button title="Agregar" onPress={addItem} />
                </View>
                <View>
                    <Button
                        title="Cerrar"
                        onPress={closeModal}
                    />
                </View>
            </View>
        </Modal>
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

export default AddItemModal;
