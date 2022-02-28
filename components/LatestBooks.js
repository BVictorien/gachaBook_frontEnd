import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Image, Card } from 'react-native-elements';
import SwipeView from 'react-native-swipeview';

import { Ionicons } from '@expo/vector-icons';

export default class BookDetails extends Component {
    render() {
        return (

            <ScrollView horizontal={true}>
                <View style={styles.bookItem}>

                    <View style={styles.book}>
                        <View>
                            <Image
                                style={styles.image}
                                resizeMode="cover"
                                source={require('../assets/dorian.jpeg')}
                            />
                            <View>
                                <Text style={styles.name}>The Portrait of Dorian Gray</Text>
                                <Text style={styles.author}>Oscar WILDE</Text>
                            </View>
                            <View style={styles.icons}>
                                <Ionicons name={(iconName = 'heart')} size={25} color={'red'} />
                                <Ionicons name={(iconName = 'basket')} size={25} color={'#fff'} />
                            </View>
                        </View>
                    </View>

                    <View style={styles.book}>
                        <View>
                            <Image
                                style={styles.image}
                                resizeMode="cover"
                                source={require('../assets/pillars.png')}
                            />
                            <View>
                                <Text style={styles.name}>The Pillars of the Earth</Text>
                                <Text style={styles.author}>Ken FOLLETT</Text>
                            </View>
                            <View style={styles.icons}>
                                <Ionicons name={(iconName = 'heart')} size={25} color={'red'} />
                                <Ionicons name={(iconName = 'basket')} size={25} color={'#fff'} />
                            </View>
                        </View>
                    </View>

                    <View style={styles.book}>
                        <View>
                            <Image
                                style={styles.image}
                                resizeMode="cover"
                                source={require('../assets/dorian.jpeg')}
                            />
                            <View>
                                <Text style={styles.name}>The Portrait of Dorian Gray</Text>
                                <Text style={styles.author}>Oscar WILDE</Text>
                            </View>
                            <View style={styles.icons}>
                                <Ionicons name={(iconName = 'heart')} size={25} color={'red'} />
                                <Ionicons name={(iconName = 'basket')} size={25} color={'#fff'} />
                            </View>
                        </View>
                    </View>

                    <View style={styles.book}>
                        <View>
                            <Image
                                style={styles.image}
                                resizeMode="cover"
                                source={require('../assets/pillars.png')}
                            />
                            <View>
                                <Text style={styles.name}>The Pillars of the Earth</Text>
                                <Text style={styles.author}>Ken FOLLETT</Text>
                            </View>
                            <View style={styles.icons}>
                                <Ionicons name={(iconName = 'heart')} size={25} color={'red'} />
                                <Ionicons name={(iconName = 'basket')} size={25} color={'#fff'} />
                            </View>
                        </View>
                    </View>

                    <View style={styles.book}>
                        <View>
                            <Image
                                style={styles.image}
                                resizeMode="cover"
                                source={require('../assets/dorian.jpeg')}
                            />
                            <View>
                                <Text style={styles.name}>The Portrait of Dorian Gray</Text>
                                <Text style={styles.author}>Oscar WILDE</Text>
                            </View>
                            <View style={styles.icons}>
                                <Ionicons name={(iconName = 'heart')} size={25} color={'red'} />
                                <Ionicons name={(iconName = 'basket')} size={25} color={'#fff'} />
                            </View>
                        </View>
                    </View>

                    <View style={styles.book}>
                        <View>
                            <Image
                                style={styles.image}
                                resizeMode="cover"
                                source={require('../assets/pillars.png')}
                            />
                            <View>
                                <Text style={styles.name}>The Pillars of the Earth</Text>
                                <Text style={styles.author}>Ken FOLLETT</Text>
                            </View>
                            <View style={styles.icons}>
                                <Ionicons name={(iconName = 'heart')} size={25} color={'red'} />
                                <Ionicons name={(iconName = 'basket')} size={25} color={'#fff'} />
                            </View>
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
    book: {
        marginRight: 10,
        width: 150,
        backgroundColor: 'rgba(251, 229, 186, 0.5)',
        borderColor: "#fff",
        borderStyle: 'solid',
        borderRadius: 10,
    },
    name: {
        color: '#E9940A',
        fontSize: 15,
        fontStyle: 'italic',
    },
    author: {
        fontWeight: 'bold',
        color: 'white',
    },
    description: {
        color: '#fff',
    },
    icons: {
        marginLeft: 0,
        color: '#fff',
        flexDirection: 'row',
    },
    image: {
        width: 130,
        height: 110,
    },
});
