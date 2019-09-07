import {
    StyleSheet
} from 'react-native';
import colors from './colors';

const Styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: colors.background
    },
    tabBarActiveLabel: {
		opacity: 1,    
        height: 16,
        fontSize: 12,        
        letterSpacing: 0.4,
        color: 'white',
        marginBottom: 8
       
	},
	tabBarInActiveLabel: {
		opacity: 0.8,
        height: 16,
        color: 'white',
        marginBottom: 7,
        marginTop: 1,
        fontSize: 10,
        letterSpacing: 0.33
			
	},
    tabBarIcon: {
        marginTop: 8,
        height: 24,
        width: 24
    },
    navBottomBar: {
        borderTopWidth: 0,
        borderTopColor: 'transparent',
        height: 56,
        backgroundColor: 'green'
		
    },
    bottomTabBar: {
        backgroundColor: 'green',
        alignItems: 'center'			
    },
    descriptionContainer: {       
        paddingVertical: '10%',
        paddingLeft: 16,
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: colors.appGreen, 
        marginRight: 72
    },
});

export default Styles;