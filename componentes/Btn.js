import { Text, TouchableOpacity, StyleSheet } from "react-native"

export default function Btn({ presionado, texto = "Boton por defecto" }) {
    return (
        <>
            <TouchableOpacity style={styles.boton}>
                <Text onPress={presionado}>
                    {texto}
                </Text>
            </TouchableOpacity>
        </>
    )
}


const styles = StyleSheet.create({
    boton: {
        padding: 10,
        backgroundColor: '#A5A6D0',
        alignItems: 'center',
        width: 100,
        margin: 40,
    },
}
)