import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { styles } from "../../assets/styles/Details.styles";
import { useDispatch } from "react-redux";
import { updateItem } from "../../Actions/itemActions";

const Details = ({ route, navigation }) => {
    const dispatch = useDispatch();
    const { objeto } = route.params;
    const [isRead, setIsRead] = useState(objeto.leido || false);

    const handleMarkAsRead = () => {
        // Actualiza el objeto con el nuevo estado "leído"
        const updatedObject = { ...objeto, leido: isRead };

        // Envía la acción para actualizar el objeto en el store
        dispatch(updateItem(updatedObject));

        console.log(updatedObject);
        // Navega de regreso o realiza cualquier otra acción necesaria
        navigation.goBack();
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>DETALLES</Text>
            <View style={styles.containerRow}>
                <View style={styles.row}>
                    <Text style={styles.label}>Día:</Text>
                    <Text style={styles.value}>{objeto.dia}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Fecha:</Text>
                    <Text style={styles.value}>{objeto.fecha}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Hora Extra:</Text>
                    <Text style={styles.value}>{objeto.horaE}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Horas Normales:</Text>
                    <Text style={styles.value}>{objeto.horasN}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Lugar:</Text>
                    <Text style={styles.value}>{objeto.lugar}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Información:</Text>
                    <Text style={styles.value}>{objeto.info}</Text>
                </View>
            </View>
            <Button
                title={isRead ? "Marcar como no leído" : "Marcar como leído"}
                onPress={() => setIsRead((prev) => !prev)}
            />
            <Button title="Guardar Cambios" onPress={handleMarkAsRead} />
        </View>
    );
};

export default Details;
