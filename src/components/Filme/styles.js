import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#334f3f',
        width: '100%',
        //flexDirection: 'row',
        paddingBottom:0,
        paddingLeft: 0,
        marginBottom: 5, 
        alignItems: 'center',
        justifyContent: 'flex-start'
    },

    button:{
        fontSize: 14,
        color: 'red',
    },

    scroll: {
        width: '30%',
        height: 150
    },

    viewImg: {
        width: '30%',
        height: 150,
        margin: 10,
    },
    img: {
        width: '120%',
        height: '120%',
        borderRadius: 10,
    },
    viewData: {
        backgroundColor: '#264031',
        padding: 10,
        width: '70%',
        height: '100%',
    },
    titulo: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 5
    }, 
    sinopse: {
        fontSize: 14,
        color: 'white',
        marginBottom: 5,
        borderRadius: 10
    }, 

});

export default styles;