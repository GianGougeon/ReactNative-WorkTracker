import React from "react";
import {
    FlatList,
    Text,
    TouchableOpacity,
    View,
    ScrollView,
} from "react-native";
import { useSelector } from "react-redux";
import { styles } from "../../assets/styles/DetailsMonth.styles";
import {
    translateDayToSpanish,
    translateMonthToSpanish,
} from "../../utils/Translations";
import { setSelectedDetail } from "../../actions/detailsActions";
import { useDispatch } from "react-redux";

const DetailsMonth = ({navigation}) => {
    const dataJson = useSelector((state) => state.items);
    const selectedMonth = useSelector((state) => state.month.selectedMonth);
    const dispatch = useDispatch();

    const currentUserId = "12303412092"; // Por ahora es fijo

    // Encuentra los datos del usuario actual basados en el ID.
    const currentUserData = dataJson.items.find(
        (user) => user.id === currentUserId
    );

    // Obtén los datos del mes seleccionado.

    const monthData = currentUserData
        ? currentUserData.data.months[selectedMonth]
        : [];

        
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Horas agendadas</Text>
            <Text style={styles.title}>
                {translateMonthToSpanish(selectedMonth)}{" "}
                {currentUserData.data.year}
            </Text>
            <View style={styles.listContainer}>
                <FlatList
                    data={monthData}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.gridItem}
                            onPress={() => {
                                dispatch(setSelectedDetail(item));
                                navigation.navigate("Details", { item });
                            }}
                        >
                            <View>
                                <Text style={styles.itemText}>
                                    {translateDayToSpanish(item.day)}
                                </Text>
                                <Text style={styles.itemText}>
                                    {item.date.split("-").reverse().join("/")}
                                </Text>
                                <Text style={styles.itemText}>
                                    Horas normales: {item.normal_hours}
                                </Text>
                                <Text style={styles.itemText}>
                                    Horas extras: {item.extra_hours}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.date}
                    numColumns={1}
                />
            </View>
        </ScrollView>
    );
};

export default DetailsMonth;
