import React, { useState } from "react";
import {
    Button,
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import AddItemModal from "./src/components/Modals/AddItemModal";
import OptionsModal from "./src/components/Modals/OptionsModal";
export default function App() {
    // Estado inicial de la lista de elementos
    const [itemsList, setItemsList] = useState([
        {
            id: "1",
            dia: "Martes",
            fecha: "28/2/2023",
            horasNormales: "9:30:00",
            horaExtras: "1:30:00",
            lugar: "MDP",
            descripcion:
                "montaje de termica, fuente, swich red / cableado red con terminales",
            leido: false,
        },
        {
            id: "2",
            dia: "e",
            fecha: "28/2/2023",
            horasNormales: "9:30:00",
            horaExtras: "1:30:00",
            lugar: "MDP",
            descripcion:
                "montaje de termica, fuente, swich red / cableado red con terminales",
            leido: false,
        },
    ]);

    // Estado para controlar la visibilidad del modal de opciones
    const [optionsModalVisible, setOptionsModalVisible] = useState(false);

    // Estado para controlar la visibilidad del modal de agregar ítem
    const [addItemModalVisible, setAddItemModalVisible] = useState(false);

    // Estado para almacenar los detalles del nuevo elemento que se agregará
    const [newItem, setNewItem] = useState({
        dia: "",
        fecha: "",
        horasNormales: "",
        horaExtras: "",
        lugar: "",
        descripcion: "",
    });

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
        setNewItem({
            dia: "",
            fecha: "",
            horasNormales: "",
            horaExtras: "",
            lugar: "",
            descripcion: "",
        });
    };

    // Función para cambiar el estado "leido" de un elemento cuando se toca
    const toggleReadStatus = (index) => {
        const updatedList = [...itemsList];
        updatedList[index].leido = !updatedList[index].leido; // Cambiar el estado "leido"
        setItemsList(updatedList);
    };

    // Función para eliminar el elemento seleccionado de la lista
    const deleteSelectedItem = () => {
        const updatedList = [...itemsList];
        updatedList.splice(selectedItemIndex, 1);
        setItemsList(updatedList);
        setOptionsModalVisible(false);
        setSelectedItemIndex(null);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Horas</Text>
            <Button
                title="Agregar Nuevo Elemento"
                onPress={() => setAddItemModalVisible(true)}
            />
            <View style={styles.listContainer}>
                <FlatList
                    data={itemsList}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            style={[
                                styles.gridItem,
                                item.leido ? styles.readItem : null, // Aplicar el estilo "readItem" si el elemento está leído
                            ]}
                            onPress={() => {
                                setSelectedItemIndex(index);
                                setOptionsModalVisible(true);
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

            {/* Modal de opciones */}
            <OptionsModal
                visible={optionsModalVisible}
                closeModal={() => setOptionsModalVisible(false)}
                isRead={itemsList[selectedItemIndex]?.leido} // Pasar el estado "leido" del elemento seleccionado
                onToggleRead={() => toggleReadStatus(selectedItemIndex)} // Cambiar el estado "leido" al tocar el botón
                onDelete={deleteSelectedItem}
            />

            {/* Modal para agregar nuevo elemento */}
            <AddItemModal
                visible={addItemModalVisible}
                closeModal={() => setAddItemModalVisible(false)}
                newItem={newItem}
                onHandleChangeItem={onHandleChangeItem}
                addItem={addItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        paddingTop: 80,
        backgroundColor: "#626264",
    },
    title: {
        fontSize: 35,
        fontWeight: "500",
        marginBottom: 25,
        textAlign: "center",
        color: "#fff",
    },
    listContainer: {
        marginTop: 25,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    gridItem: {
        width: "45%",
        height: 120,
        marginVertical: 10,
        borderRadius: 10,
        justifyContent: "center",
        backgroundColor: "#2196F3",
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
        margin: 10,
    },
    readItem: {
        backgroundColor: "green",
    },
    itemText: {
        fontSize: 18,
        paddingLeft: 15,
        color: "#fff",
        fontWeight: "600",
    },
    readText: {
        fontSize: 16,
        paddingLeft: 15,
        color: "green",
        fontWeight: "600",
    },
});
