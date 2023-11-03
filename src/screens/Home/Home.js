import React, { useState } from "react";
import {
    FlatList,
    Text,
    TouchableOpacity,
    View,
    ScrollView,
    Button,
    Modal,
} from "react-native";
import { useSelector } from "react-redux";
import { styles } from "../../assets/styles/Home.styles";
import { translateMonthToSpanish } from "../../utils/Translations";
import { useDispatch } from "react-redux";
import { selectMonth } from "../../actions/monthActions";
import { Picker } from "@react-native-picker/picker";

const Home = ({ navigation }) => {
    const dispatch = useDispatch();
    const dataJson = useSelector((state) => state.items);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear()); // Establece el año actual como valor predeterminado
    const currentUserId = "12303412092";

    // Encuentra los datos del usuario actual basados en el ID.
    const currentUserData = dataJson.items.find(
        (user) => user.id === currentUserId
    );

    // Filtra los meses
    const filteredMonths = currentUserData
        ? Object.keys(currentUserData.data.months).filter((month) => {
              const monthData = currentUserData.data.months[month];
              return monthData.some((entry) =>
                  entry.date.startsWith(String(selectedYear))
              );
          })
        : [];

    const handleYearChange = (year) => {
        setSelectedYear(year);
        setModalVisible(false);
    };
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Meses</Text>
            <Button
                title="Seleccionar Año"
                onPress={() => setModalVisible(true)}
            />
            <Text style={styles.itemText}>{selectedYear}</Text>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text>Selecciona un año:</Text>
                        <Picker
                            selectedValue={selectedYear}
                            onValueChange={(itemValue) =>
                                handleYearChange(itemValue)
                            }
                        >
                            {[...Array(10)].map((_, i) => (
                                <Picker.Item
                                    key={i}
                                    label={(2023 - i).toString()}
                                    value={2023 - i}
                                />
                            ))}
                        </Picker>
                        <Button
                            title="Cerrar"
                            onPress={() => setModalVisible(false)}
                        />
                    </View>
                </View>
            </Modal>
            <View style={styles.listContainer}>
                <FlatList
                    data={filteredMonths}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.gridItem}
                            onPress={() => {
                                dispatch(selectMonth(item));
                                navigation.navigate("DetailsMonth");
                            }}
                        >
                            <View>
                                <Text style={styles.itemText}>
                                    {translateMonthToSpanish(item)}
                                </Text>
                                <Text style={styles.itemText}>
                                    {currentUserData.data.year}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item}
                    numColumns={1}
                />
            </View>
        </ScrollView>
    );
};

export default Home;
