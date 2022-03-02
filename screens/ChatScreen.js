import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Input, Text, Icon, ListItem } from 'react-native-elements';

const ChatScreen = () => {

    handleChat = () => {

    }

    return (
        <>
            <View style={styles.container}>
                <View style={styles.top}>
                    <Text style={styles.top}>Back</Text>
                    <Text style={styles.top}>MESSAGES</Text>
                    <Text style={styles.top}>RDV</Text>
                </View>

                <ScrollView>
                    <ListItem.Content style={styles.content}>
                        <ListItem.Title>Title</ListItem.Title>
                        <ListItem.Subtitle>Pseudo</ListItem.Subtitle>
                    </ListItem.Content>
                    <ListItem.Content style={styles.content}>
                        <ListItem.Title>Title</ListItem.Title>
                        <ListItem.Subtitle>Pseudo</ListItem.Subtitle>
                    </ListItem.Content>
                    <ListItem.Content style={styles.content}>
                        <ListItem.Title>Title</ListItem.Title>
                        <ListItem.Subtitle>Pseudo</ListItem.Subtitle>
                    </ListItem.Content>
                    <ListItem.Content style={styles.content}>
                        <ListItem.Title>Title</ListItem.Title>
                        <ListItem.Subtitle>Pseudo</ListItem.Subtitle>
                    </ListItem.Content>
                    <ListItem.Content style={styles.content}>
                        <ListItem.Title>Title</ListItem.Title>
                        <ListItem.Subtitle>Pseudo</ListItem.Subtitle>
                    </ListItem.Content>
                    <ListItem.Content style={styles.content}>
                        <ListItem.Title>Title</ListItem.Title>
                        <ListItem.Subtitle>Pseudo</ListItem.Subtitle>
                    </ListItem.Content>
                    <ListItem.Content style={styles.content}>
                        <ListItem.Title>Title</ListItem.Title>
                        <ListItem.Subtitle>Pseudo</ListItem.Subtitle>
                    </ListItem.Content>
                    <ListItem.Content style={styles.content}>
                        <ListItem.Title>Title</ListItem.Title>
                        <ListItem.Subtitle>Pseudo</ListItem.Subtitle>
                    </ListItem.Content>
                    <ListItem.Content style={styles.content}>
                        <ListItem.Title>Title</ListItem.Title>
                        <ListItem.Subtitle>Pseudo</ListItem.Subtitle>
                    </ListItem.Content>

                </ScrollView>

                <View style={{padding: 0, marginBottom: 0}}>
                    <Input style={styles.input} placeholder="   Message..."
                        inputContainerStyle={{ borderBottomWidth: 0 }}
                        rightIcon={<Icon name='arrow-circle-up' size={41} color="#E9940A" onPress={() => handleChat()} />}
                    />
                </View>
            </View>

        </>
    );
};

export default ChatScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#505055',
    },
    top: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 21,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 10,
        padding: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    input: {
        backgroundColor: 'white',
        height: 50,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 10,
        borderRadius: 30,
    },
    message: {
        width: '70%',
        padding: 0,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        borderRadius: 50,
        backgroundColor: '#456283'
    },
    content: {
        margin: 5,
        padding: 5,
        backgroundColor: '#FFF',
        width: '55%',
        height: 75,
        borderRadius: 10,
    }
});