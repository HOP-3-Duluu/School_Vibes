import { TextInput, StyleSheet, View, Text } from "react-native"
import Colors from '../../constants/Colors';

export const Input = ({type, placeholder, Title}: any) => {
    return(
        <View>
            <Text style={styles.Title} >{Title ? Title : 'Title Task'}</Text>
            <TextInput  selectionColor={Colors.primary} multiline={type == 'description' ? true : false} placeholder={placeholder ? placeholder : 'Add Task Name'} style={type == 'description' ? styles.description : styles.default} />
        </View>
    )
}
const styles = StyleSheet.create({
    default: {
        backgroundColor: Colors.background,
        fontSize: 18,
        fontWeight: '400',
        paddingHorizontal: 20,
        borderRadius: 10
    },
    description: {
        backgroundColor: Colors.background,
        fontSize: 18,
        fontWeight: '400',
        paddingHorizontal: 20,
        borderRadius: 10,
        height: 150,
        display: 'flex',
        textAlignVertical: 'top',
    },
    Title: {
        color: 'black',
        fontSize: 22,
        fontWeight: '600',
        bottom: 10,
    }
})