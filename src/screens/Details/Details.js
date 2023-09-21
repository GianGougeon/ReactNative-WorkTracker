import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { styles } from "./Details.styles";

const Details = ({ route, navigation }) => {
    const { objeto, data, setData } = route.params;
    const [isLeido, setIsLeido] = useState(objeto.leido); // Estado para controlar el estado leido

    const toggleLeido = () => {
        // Cambiar el estado leido cuando se hace clic en el botón
        setIsLeido(!isLeido);

        // Actualizar el objeto en la lista original en la pantalla Home
        const updatedData = data.map((item) => {
            if (item.id === objeto.id) {
                return { ...item, leido: !isLeido };
            }
            return item;
        });

        // Actualizar el estado data en la pantalla Home con la lista actualizada
        setData(updatedData);
    };

    const returnToHome = () => {
        navigation.navigate("Home");
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
            <View style={styles.button}>
                <Button
                    title={
                        isLeido ? "Marcar como No Leído" : "Marcar como Leído"
                    }
                    onPress={toggleLeido} // Llama a la función para cambiar el estado leido
                />
            </View>
            <View style={styles.button}>
                <Button title="Volver" onPress={returnToHome} />
            </View>
        </View>
    );
};

export default Details;
