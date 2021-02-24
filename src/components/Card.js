import React from 'react';
import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native'

export const Card = ({movieTitle, releaseDate, posterUrl}) => {
    return (
        <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => alert('Pressed!')}>
            <View style={styles.main_container}>
                <View style={styles.image}>
                    <Image
                        style={styles.moviePicture}
                        resizeMode={'contain'}
                        source={{uri: 'https://www.cinesud-affiches.com/21852-big_default/affiche-du-film-john-wick-parabellum.jpg'}}
                    />
                </View>

                <View style={styles.desc}>
                    <Text style={styles.desc_title}>{movieTitle}</Text>
                    <Text style={styles.desc_date}>{releaseDate}</Text>
                </View>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    main_container: {
        height: 100,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomColor: '#000',
        paddingVertical: 10
    },
    image: {
        width: 100,
        marginRight: 10
    },
    moviePicture: {
        flex: 1
    },
    desc: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    desc_title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    desc_date: {
        fontSize: 14
    }
})
