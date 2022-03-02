import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

export default class BookDetails extends Component {
    render() {
        return (

            <ScrollView horizontal={true}>
                <View style={styles.bookItem}>
                    <View  style={styles.card}>
                        <View style={styles.book}>
                            <View>
                                <Image style={styles.image} resizeMode="cover" source={require('../assets/dorian.jpeg')} />
                            </View>
                        </View>
                        <View style={styles.info}>
                            <Text style={styles.name}>The Portrait of Dorian Gray</Text>
                            <Text style={styles.author}>Oscar WILDE</Text>
                        </View>
                        <View style={styles.icons}>
                            <Ionicons name={(iconName = 'heart')} size={25} color={'red'} />
                            <Ionicons name={(iconName = 'basket')} size={25} color={'#fff'} />
                            <Text style={styles.points}>2 pts</Text>
                        </View>
                    </View>

                    <View style={styles.card}>
                        <View style={styles.book}>
                            <Image style={styles.image} resizeMode="cover" source={require('../assets/pillars.png')} />
                        </View>
                        <View style={styles.info}>
                            <Text style={styles.name}>The Pillars of the Earth</Text>
                            <Text style={styles.author}>Ken FOLLETT</Text>
                        </View>
                        <View style={styles.icons}>
                            <Ionicons name={(iconName = 'heart')} size={25} color={'red'} />
                            <Ionicons name={(iconName = 'basket')} size={25} color={'#fff'} />
                            <Text style={styles.points}>2 pts</Text>
                        </View>
                    </View>

                    <View  style={styles.card}>
                        <View style={styles.book}>
                            <View>
                                <Image style={styles.image} resizeMode="cover" source={require('../assets/dorian.jpeg')} />
                            </View>
                        </View>
                        <View style={styles.info}>
                            <Text style={styles.name}>The Portrait of Dorian Gray</Text>
                            <Text style={styles.author}>Oscar WILDE</Text>
                        </View>
                        <View style={styles.icons}>
                            <Ionicons name={(iconName = 'heart')} size={25} color={'red'} />
                            <Ionicons name={(iconName = 'basket')} size={25} color={'#fff'} />
                            <Text style={styles.points}>2 pts</Text>
                        </View>
                    </View>

                    <View style={styles.card}>
                        <View style={styles.book}>
                            <Image style={styles.image} resizeMode="cover" source={require('../assets/pillars.png')} />
                        </View>
                        <View style={styles.info}>
                            <Text style={styles.name}>The Pillars of the Earth</Text>
                            <Text style={styles.author}>Ken FOLLETT</Text>
                        </View>
                        <View style={styles.icons}>
                            <Ionicons name={(iconName = 'heart')} size={25} color={'red'} />
                            <Ionicons name={(iconName = 'basket')} size={25} color={'#fff'} />
                            <Text style={styles.points}>2 pts</Text>
                        </View>
                    </View>

                    <View  style={styles.card}>
                        <View style={styles.book}>
                            <View>
                                <Image style={styles.image} resizeMode="cover" source={require('../assets/dorian.jpeg')} />
                            </View>
                        </View>
                        <View style={styles.info}>
                            <Text style={styles.name}>The Portrait of Dorian Gray</Text>
                            <Text style={styles.author}>Oscar WILDE</Text>
                        </View>
                        <View style={styles.icons}>
                            <Ionicons name={(iconName = 'heart')} size={25} color={'red'} />
                            <Ionicons name={(iconName = 'basket')} size={25} color={'#fff'} />
                            <Text style={styles.points}>2 pts</Text>
                        </View>
                    </View>

                    <View style={styles.card}>
                        <View style={styles.book}>
                            <Image style={styles.image} resizeMode="cover" source={require('../assets/pillars.png')} />
                        </View>
                        <View style={styles.info}>
                            <Text style={styles.name}>The Pillars of the Earth</Text>
                            <Text style={styles.author}>Ken FOLLETT</Text>
                        </View>
                        <View style={styles.icons}>
                            <Ionicons name={(iconName = 'heart')} size={25} color={'red'} />
                            <Ionicons name={(iconName = 'basket')} size={25} color={'#fff'} />
                            <Text style={styles.points}>2 pts</Text>
                        </View>
                    </View>

                </View>
            </ScrollView >

        )
    }
};

const styles = StyleSheet.create({
    bookItem: {
        flex: 1,
        padding: 10,
        flexDirection: 'row',
    },
    card: {
        backgroundColor: 'rgba(191, 227, 236, 0.9)',
        borderRadius: 5,
        marginRight: 10,
    },
    book: {
        width: 150,
        height: 130,
        borderColor: "#fff",
        borderStyle: 'solid',
        borderRadius: 3,
        overflow: 'hidden',
    },
    info: {
        width: 150,
        backgroundColor: 'rgba(219, 219, 218, 0.8)',
        borderColor: "#fff",
        borderStyle: 'solid',
        borderRadius: 3,
    },
    flex: {
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    name: {
        color: '#FFF',
        fontSize: 15,
        fontStyle: 'italic',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
        marginLeft: 5,
    },
    author: {
        fontWeight: 'bold',
        color: 'black',
        textShadowColor: 'rgba(177, 177, 177, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
        marginRight: 5,
        marginBottom: 3,
        textAlign: 'right',
    },
    description: {
        color: '#fff',
    },
    icons: {
        width: 150,
        color: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-around',
        

    },
    image: {
        width: 130,
        height: 110,
        resizeMode: "stretch",
    },
    points: {
        color: '#fff',
        fontSize: 17,
    }
});
