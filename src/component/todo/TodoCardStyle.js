import { StyleSheet } from "react-native";
import { colors } from "../../../styles/colors";

const TodoCardStyle=StyleSheet.create({
    todoWrapper:{
        padding:20,
        borderBottomWidth:1,
        borderBottomColor: colors.textSeondary,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:"space-between"
    },
    title:{
        fontWeight:'bold',
        color:colors.textPrimary,
        fontSize:25
    },
    date:{
        color:colors.textPrimary,
        marginTop: 10
    },
    textWrapper: {
        flex:1
    },
    iconsWrapper:{
        flexDirection:'row',
        gap: 10
    }
})

export default TodoCardStyle