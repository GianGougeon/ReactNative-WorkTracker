import React, { useState, useEffect } from "react";
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
import { firestore } from "../../services/firebase";
import { collection, doc, setDoc, getDoc } from "firebase/firestore";
import { Picker } from "@react-native-picker/picker";
const Home = ({ navigation }) => {
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    // UserID falso
    const currentUserId = "bJfANdmozEga8VEqZSwxbRKXLtB3";
    // UserID
    // const localId = useSelector((state) => state.auth.localId);
    const [isLoading, setIsLoading] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);

    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear()); // Establece el año actual como valor predeterminado

    // fechas
    const date = new Date();
    const year = date.getFullYear();
    const month = date.toLocaleString("en-EN", {
        month: "long",
    });
    const weekday = date.toLocaleString("en-US", { weekday: "long" });
    const todayDate = `${date.getFullYear()}-${
        date.getMonth() + 1
    }-${date.getDate()}`;

    useEffect(() => {
        const fetchData = async () => {
            const userDocRef = doc(firestore, "datos", currentUserId);
            setIsLoading(true);
            try {
                const docSnapshot = await getDoc(userDocRef);
                if (docSnapshot.exists()) {
                    const userData = docSnapshot.data();
                    setData([userData]);
                    // Verificar si el año actual existe, de lo contrario, crearlo
                    const yearExists =
                        userData.data && userData.data.year === year;
                    if (!yearExists) {
                        const newYearData = {
                            year: year,
                            idCollection: currentUserId,
                            months: [
                                {
                                    id: month,
                                    days: [
                                        {
                                            date: todayDate,
                                            day: weekday,
                                            normal_hours: 9.5,
                                            extra_hours: 0,
                                        },
                                    ],
                                },
                            ],
                        };
                        await setDoc(userDocRef, { data: newYearData });
                        setData([{ data: newYearData }]);
                    } else {
                        // Verificar si el mes actual existe, de lo contrario, crearlo
                        const months = userData.data && userData.data.months;
                        const currentMonthExists = months.some(
                            (m) => m.id === month
                        );
                        if (!currentMonthExists) {
                            const newMonth = {
                                id: month,
                                days: [
                                    {
                                        date: todayDate,
                                        day: weekday,
                                        normal_hours: 9.5,
                                        extra_hours: 0,
                                    },
                                ],
                            };
                            months.push(newMonth);
                            await setDoc(userDocRef, { data: { months } });
                            setData([{ data: { months } }]);
                        } else {
                            // Verificar si el día actual existe, de lo contrario, crearlo
                            let dayExists = false;
                            months.forEach((m) => {
                                const days = m.days;
                                days.forEach((day) => {
                                    if (day.date === todayDate) {
                                        dayExists = true;
                                    }
                                });
                            });

                            if (!dayExists) {
                                const newDay = {
                                    date: todayDate,
                                    day: weekday,
                                    normal_hours: 9.5,
                                    extra_hours: 0,
                                };
                                months[0].days.push(newDay); 
                                await setDoc(userDocRef, { data: { months } });
                                setData([{ data: { months } }]);
                            }
                        }
                    }
                } else {
                    const newData = {
                        data: {
                            year: year,
                            idCollection: currentUserId,
                            months: [
                                {
                                    id: month,
                                    days: [
                                        {
                                            date: todayDate,
                                            day: weekday,
                                            normal_hours: 9.5,
                                            extra_hours: 0,
                                        },
                                    ],
                                },
                            ],
                        },
                    };
                    await setDoc(userDocRef, newData);
                    setData([newData]);
                    console.log(data);
                }
            } catch (error) {
                console.error(
                    "Error al obtener o crear el documento del usuario:",
                    error
                );
            }
            setIsLoading(false);
        };

        fetchData();
    }, []);

    const handleYearChange = (year) => {
        // setSelectedYear(year);
        setModalVisible(false);
    };

    const handleMonthDetails = (mesSeleccionado) => {
        dispatch(selectMonth(mesSeleccionado));
        navigation.navigate("DetailsMonth", { mesSeleccionado });
    };

    return (
        <>
            {!isLoading ? (
                <ScrollView style={styles.container}>
                    {console.log(data)};
                    <Text style={styles.title}>WorkTracker</Text>
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
                            data={data}
                            renderItem={({ item }) => {
                                if (item && item.data && item.data.months) {
                                    return (
                                        <TouchableOpacity
                                            style={styles.gridItem}
                                            onPress={() => {
                                                handleMonthDetails(
                                                    item.data.months
                                                );
                                            }}
                                        >
                                            <View>
                                                {item.data.months.map(
                                                    (month) => (
                                                        <View key={month.id}>
                                                            <Text
                                                                style={
                                                                    styles.itemText
                                                                }
                                                            >
                                                                {translateMonthToSpanish(
                                                                    month.id
                                                                )}
                                                            </Text>
                                                            {month.days.map(
                                                                (day) => (
                                                                    <View
                                                                        key={
                                                                            day.date
                                                                        }
                                                                    >
                                                                        <Text
                                                                            style={
                                                                                styles.itemText
                                                                            }
                                                                        ></Text>
                                                                    </View>
                                                                )
                                                            )}
                                                        </View>
                                                    )
                                                )}
                                            </View>
                                        </TouchableOpacity>
                                    );
                                } else {
                                    return null;
                                }
                            }}
                            numColumns={1}
                        />
                    </View>
                </ScrollView>
            ) : (
                <Text style={styles.title}>cargando</Text>
            )}
        </>
    );
};
export default Home;
