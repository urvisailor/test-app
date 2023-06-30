const { StyleSheet } = require("react-native");
const { default: colors } = require("../../constants/colors");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE,
        justifyContent: "center",
        padding:20
    },
    user:{
        textAlign:'center',
        color:colors.BLACK
    }
})
export default styles