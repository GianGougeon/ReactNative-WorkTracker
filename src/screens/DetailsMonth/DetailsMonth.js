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
    const dispatch = useDispatch();

    const selectedMonth = useSelector((state) => state.month.selectedMonth);

    
    return (
        <>
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Horas agendadas</Text>
            <Text style={styles.title}>
                {translateMonthToSpanish(selectedMonth[0].id)}
            </Text>
            <View style={styles.listContainer}>
                <FlatList
                    data={selectedMonth[0].days}
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
        </>
    );
};

export default DetailsMonth;
