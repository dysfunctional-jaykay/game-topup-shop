import { StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 6,
        gap: 10,
    },
    card: {
        width: 180,
        height: 250,
        overflow: 'hidden',
        borderRadius: 12,
        backgroundColor: '#f57e7e',
        elevation: 4,
        boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.2)',
    },
    cardPressed: {
        opacity: 0.7,
    },
    iconImg: {
        width: '100%',
        height: 185,
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    iconTitle: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '700',
        textAlign: 'center',
        lineHeight: 19,
    },
})