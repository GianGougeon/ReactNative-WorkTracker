import React, { useState, useEffect } from "react";
import { Button, FlatList, Text, TouchableOpacity, View } from "react-native";
import AddItemModal from "../../components/Modals/AddItemModal";
import { styles } from "./Home.styles";
import { DataExample } from "../../utils/dataExample";
const Home = (prop) => {
    const { data, setItemSelected, setItemsList } = prop;
    // Estado para controlar la visibilidad del modal de agregar ítem
    const [addItemModalVisible, setAddItemModalVisible] = useState(false);

    // Estado para almacenar los detalles del nuevo elemento que se agregará
    const [newItem, setNewItem] = useState(DataExample);

    // Estado para almacenar el índice del elemento seleccionado
    const [selectedItemIndex, setSelectedItemIndex] = useState(null);

    // Función para actualizar los detalles del nuevo elemento mientras se escriben
    const onHandleChangeItem = (text, field) => {
        setNewItem((prevItem) => ({ ...prevItem, [field]: text }));
    };

    // Función para agregar un nuevo elemento a la lista
    const addItem = () => {
        if (newItem.dia === "" || newItem.fecha === "") {
            return;
        }
        setItemsList((prevList) => [
            ...prevList,
            { id: Math.random().toString(), ...newItem, leido: false }, // Añadir el campo "leido" con valor false al agregar un nuevo elemento
        ]);
        setAddItemModalVisible(false);
        setNewItem(DataExample);
    };

    // Función para enviar el objeto seleccionado a setItemSelected
    const sendSelectedItem = () => {
        if (selectedItemIndex !== null) {
            // Verifica si hay un elemento seleccionado
            const selectedItem = data[selectedItemIndex];
            setItemSelected(selectedItem);
        }
    };
    useEffect(() => {
        // Llama a la función para enviar el objeto seleccionado
        sendSelectedItem();
    }, [selectedItemIndex]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home</Text>
            <Button
                title="Agregar Nuevo Elemento"
                onPress={() => setAddItemModalVisible(true)}
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
                                sendSelectedItem();
                                setSelectedItemIndex(index);
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
            <AddItemModal
                visible={addItemModalVisible}
                closeModal={() => setAddItemModalVisible(false)}
                newItem={newItem}
                onHandleChangeItem={onHandleChangeItem}
                addItem={addItem}
            />
        </View>
    );
};
export default Home;
