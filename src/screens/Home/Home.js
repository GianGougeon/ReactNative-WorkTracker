import React, { useState, useEffect } from "react";
import { FlatList, Text, TouchableOpacity, View, Button } from "react-native";
import json from "../../data/data.json";
import { styles } from "./Home.styles";
import AddItemModal from "../../components/Modals/AddItemModal"; // Importa el componente AddItemModal
import { DataExample } from "../../utils/DataExample";

const Home = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [isModalVisible, setModalVisible] = useState(false);
    const [newItem, setNewItem] = useState(DataExample);

    useEffect(() => {
        setData(json);
    }, []);

    const agregarNuevoObjeto = () => {
        // Crea un nuevo objeto con los datos que desees
        const nuevoObjeto = {
            id: (data.length + 1).toString(), // Genera un nuevo ID
            ...newItem,
            leido: false,
        };

        // Agrega el nuevo objeto a la lista actual
        setData([...data, nuevoObjeto]);

        // Cierra el modal
        setModalVisible(false);

        // Limpia los campos del nuevo objeto
        setNewItem(DataExample);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>HOME</Text>
            <Button
                title="Agregar Nuevo Elemento"
                onPress={() => setModalVisible(true)} // Abre el modal al hacer clic
            />
            <View style={styles.listContainer}>
                <FlatList
                    data={data}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            style={[
                                styles.gridItem,
                                item.leido ? styles.readItem : null,
                            ]}
                            onPress={() => {
                                navigation.navigate("Details", {
                                    objeto: item,
                                    data, // Pasa la lista de objetos
                                    setData, // Pasa la función para actualizar la lista
                                });
                            }}
                        >
                            <View>
                                <Text style={styles.itemText}>{item.dia}</Text>
                                <Text style={styles.itemText}>
                                    {item.fecha}
                                </Text>
                                {item.leido && (
                                    <Text style={styles.readText}>Leído</Text>
                                )}
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                />
            </View>
            {/* Renderiza el componente AddItemModal */}
            <AddItemModal
                visible={isModalVisible}
                closeModal={() => setModalVisible(false)}
                newItem={newItem}
                onHandleChangeItem={(value, field) =>
                    setNewItem({ ...newItem, [field]: value })
                }
                addItem={agregarNuevoObjeto}
            />
        </View>
    );
};

export default Home;
