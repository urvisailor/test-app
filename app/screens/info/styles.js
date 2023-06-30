const { StyleSheet } = require("react-native");
const { default: colors } = require("../../constants/colors");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE,
        justifyContent: "center",
        alignItems:'center',
        padding:20
    },
    text:{
        textAlign:'center',
        color:colors.BLACK,
        marginBottom:10
    },
    username:{
        color:colors.BLACK,
        marginBottom:10
    },
    flatlist:{
        marginTop:40
    }
})
export default styles