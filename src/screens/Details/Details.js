import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
} from "react-native";
import { useSelector } from "react-redux";
import { translateDayToSpanish } from "../../utils/Translations";
import { styles } from "../../assets/styles/Details.styles";

const Details = () => {
    const selectedDetail = useSelector((state) => state.details.selectedDetail);
    const [isEditingNormal, setIsEditingNormal] = useState(false);
    const [isEditingExtra, setIsEditingExtra] = useState(false);
    const [normalHours, setNormalHours] = useState(
        selectedDetail?.normal_hours
    );
    const [extraHours, setExtraHours] = useState(selectedDetail?.extra_hours);

    const handleEditNormal = () => {
        setIsEditingNormal(!isEditingNormal);
    };

    const handleEditExtra = () => {
        setIsEditingExtra(!isEditingExtra);
    };

    if (!selectedDetail) {
        return (
            <View style={styles.container}>
                <Text>No hay detalles disponibles</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.dateText}>
                {translateDayToSpanish(selectedDetail.day)}
            </Text>
            <Text style={styles.dateText}>
                {selectedDetail.date.split("-").reverse().join("/")}
            </Text>
            <View style={styles.hoursContainer}>
                {isEditingNormal ? (
                    <TextInput
                        value={String(normalHours)}
                        onChangeText={(text) => setNormalHours(text)}
                        keyboardType="numeric"
                        style={{ flex: 1 }}
                    />
                ) : (
                    <Text style={styles.hoursText}>
                        Horas normales: {normalHours}
                    </Text>
                )}
                <TouchableOpacity
                    style={styles.editButton}
                    onPress={handleEditNormal}
                >
                    <Text>{isEditingNormal ? "Guardar" : "Editar"}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.hoursContainer}>
                {isEditingExtra ? (
                    <TextInput
                        value={String(extraHours)}
                        onChangeText={(text) => setExtraHours(text)}
                        keyboardType="numeric"
                        style={{ flex: 1 }}
                    />
                ) : (
                    <Text style={styles.hoursText}>
                        Horas extras: {extraHours}
                    </Text>
                )}
                <TouchableOpacity
                    style={styles.editButton}
                    onPress={handleEditExtra}
                >
                    <Text>{isEditingExtra ? "Guardar" : "Editar"}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Details;
