import React from "react";
import { Modal, Text, Button, View } from "react-native";

const OptionsModal = ({
    visible,
    closeModal,
    isRead,
    onToggleRead,
    onDelete,
}) => {
    const handleToggleRead = () => {
        onToggleRead(); // Cambiar el estado "leído"
        closeModal(); // Cerrar el modal
    };

    return (
        <Modal visible={visible} onRequestClose={closeModal} transparent={true}>
            <View style={styles.modalContainer}>
                <Text style={styles.modalTitle}>Opciones del Elemento</Text>
                <Button
                    title={
                        isRead ? "Marcar como No Leído" : "Marcar como Leído"
                    }
                    onPress={handleToggleRead} // Llamar a la función modificada
                />
                <View style={styles.deleteButton}>
                    <Button title="Eliminar" color="red" onPress={onDelete} />
                </View>
                <Button title="Cerrar" onPress={closeModal} />
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
    deleteButton: {
        margin: 10,
    },
};

export default OptionsModal;
