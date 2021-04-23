import React from 'react';
import { 
    View,
    Text,
    StyleSheet,
} from 'react-native';
import colors from '../../styles/colors';
import { Header } from '../components/Header';

export function PlantSelect(){
    return (
        <View style={styles.container}>
            <Header />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    }
})