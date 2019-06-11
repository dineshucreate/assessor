import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#3C8DBC'
    },
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    topBar: {
        height: 50,
        backgroundColor: '#3C8DBC',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    add: {
        backgroundColor: '#3C8DBC',
        position: 'absolute',
        right: 20,
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },
    addText: {
        color: 'white'
    }
});

export default styles;
