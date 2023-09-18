import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from "./Details.styles";
const Details = (prop) => {
    const { itemSelected, setItemsList, setItemSelected, itemsList } = prop;
    const toggleReadStatus = () => {
        if (!itemSelected) {
            return; // Evita errores si itemSelected es null o undefined
        }
        // Crea una copia de la lista de elementos
        const updatedItemsList = [...itemsList];

        // Encuentra el índice del elemento seleccionado en la lista
        const selectedItemIndex = updatedItemsList.findIndex(
            (item) => item.id === itemSelected.id
        );

        if (selectedItemIndex !== -1) {
            // Si se encuentra el elemento, alterna el estado "leido"
            updatedItemsList[selectedItemIndex].leido =
                !updatedItemsList[selectedItemIndex].leido;

            // Actualiza la lista de elementos con el estado modificado
            setItemsList(updatedItemsList);
        }
    };

    const returnToHome = () => {
        // Establece itemSelected en null para regresar a Home
        setItemSelected(null);
    };

    return (
        <View style={styles.container}>
            <View style={styles.containerRow}>
                <View style={styles.row}>
                    <Text style={styles.label}>Día:</Text>
                    <Text style={styles.value}>{itemSelected.dia}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Fecha:</Text>
                    <Text style={styles.value}>{itemSelected.fecha}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Hora Extra:</Text>
                    <Text style={styles.value}>{itemSelected.horaE}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Horas Normales:</Text>
                    <Text style={styles.value}>{itemSelected.horasN}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Información:</Text>
                    <Text style={styles.value}>{itemSelected.info}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Lugar:</Text>
                    <Text style={styles.value}>{itemSelected.lugar}</Text>
                </View>
            </View>
            <Button
                title={
                    itemSelected.leido
                        ? "Marcar como No Leído"
                        : "Marcar como Leído"
                }
                onPress={toggleReadStatus}
            />
            <Button title="Volver" onPress={returnToHome} />
        </View>
    );
};

export default Details;
