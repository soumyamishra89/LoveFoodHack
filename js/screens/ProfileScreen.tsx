import React from 'react';
import { Image, ScrollView } from 'react-native';

export default class ProfileScreen extends React.PureComponent<any> {
    render() {
        return (
            <ScrollView contentContainerStyle={{width: '100%'}}>
                <Image source={require('../../assets/profile-wasted.png')} style={{width: '100%'}} resizeMode='contain' />
            </ScrollView>
        )

    }
}
