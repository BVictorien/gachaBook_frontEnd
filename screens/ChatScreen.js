import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, ScrollView, StyleSheet, View } from 'react-native';
import { Input, Text, Icon, ListItem } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import socketIOClient from "socket.io-client";

var socket = socketIOClient("http://192.168.10.17:3000");

const ChatScreen = (props) => {

    const [currentMessage, setCurrentMessage] = useState();
    const [listMessage, setListMessage] = useState([]);

    useEffect(() => {
        socket.on('sendMessageToAll', (messageData) => {
            setListMessage([...listMessage, messageData])
        })
    }, [listMessage]);

    const listMessageItems = listMessage.map((messageData, i) => {
        return (
            <ListItem.Content style={styles.content} key={i}>
                <ListItem.Title>{messageData.message}</ListItem.Title>
            </ListItem.Content>
        )
    })

    return (
        <>
            <View style={styles.container}>
                <View style={styles.top}>
                    <Text style={styles.topbutton} onPress={() => props.navigation.goBack()} >
                        <FontAwesome
                            name="reply"
                            size={35}
                            color="#FBAF19"
                            style={{ marginRight: 35, marginTop: 5 }}
                        />
                    </Text>
                    <Text style={styles.top}>MESSAGES</Text>
                    <Text style={styles.top}>RDV</Text>
                </View>

                <ScrollView>
                    {listMessageItems}
                </ScrollView>

                <KeyboardAvoidingView behavior='height' enabled>
                    <View style={{ padding: 0, marginBottom: 0 }}>
                        <Input style={styles.input} placeholder="   Message..."
                            inputContainerStyle={{ borderBottomWidth: 0 }}
                            onChangeText={(val) => setCurrentMessage(val)}
                            rightIcon={<Icon name='arrow-circle-up' size={41} color="#E9940A" onPress={() => {socket.emit('sendMessage', { message: currentMessage }); console.log(currentMessage)}} />}
                        />
                    </View>
                </KeyboardAvoidingView>
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
        color: '#FFF',
        fontSize: 23,
        fontWeight: 'bold',
        marginTop: 21,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 10,
        padding: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    topbutton: {
        color: '#FFF',
        fontSize: 21,
        fontWeight: 'bold',
        marginTop: 10,
        padding: 10,
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
        width: '90%',
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
