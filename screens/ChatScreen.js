import React, { useEffect, useState, useCallback } from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { Input, Text, Icon, ListItem } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import { connect } from 'react-redux';

<<<<<<< HEAD
import socketIOClient from 'socket.io-client';
var socket = socketIOClient('http://192.168.10.107:3000');

const ChatScreen = (props) => {
  /* const [currentMessage, setCurrentMessage] = useState();
=======
import socketIOClient from "socket.io-client";
var socket = socketIOClient("http://192.168.10.124:3000");

const ChatScreen = (props) => {

    const [currentMessage, setCurrentMessage] = useState();
>>>>>>> chatScreenVendredi
    const [listMessage, setListMessage] = useState([]);

    useEffect(() => {
        socket.on('sendMessageToAll', (messageData) => {
            setListMessage([...listMessage, messageData])
        })
    }, [listMessage]);

    const listMessageItems = listMessage.map((messageData, i) => {
<<<<<<< HEAD
        return (
            <ListItem.Content style={styles.content} key={i}>
                <ListItem.Title>{messageData.message}</ListItem.Title>
            </ListItem.Content>
        )
    }) */

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'BALANCE TON MESSAGE',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  const customtInputToolbar = (props) => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          backgroundColor: 'pink',
          padding: 1,
          height: 50,
          marginLeft: 15,
          marginBottom: 5,
          borderRadius: 30,
        }}
      />
    );
  };
=======
        if (props.token) {
            return (
                <View style={{ width: '100%' , alignItems: 'flex-end'}}  key={i}>
                        <ListItem.Content style={styles.rightWrapper}>
                            <ListItem.Title>{messageData.message}</ListItem.Title>
                        </ListItem.Content>
                </View>

            )
        } else {
            return (
                <View style={{ width: '100%' }}  key={i}>
                        <ListItem.Content style={styles.leftWrapper}>
                            <ListItem.Title>{messageData.message}</ListItem.Title>
                        </ListItem.Content>
                </View>
            )
        }
    }
    );
>>>>>>> chatScreenVendredi

  const customBubble = (props) => {
    return (
<<<<<<< HEAD
      <Bubble
        {...props}
        textStyle={{
          right: {
            color: '#20F3C8',
          },
          left: {
            color: '#9120F3',
          },
        }}
      />
    );
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.top}>
          <Text
            style={styles.topbutton}
            onPress={() => props.navigation.goBack()}
          >
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

        {/*    <ScrollView>
                    {listMessageItems}
                </ScrollView> */}

        <GiftedChat
          messages={messages}
          placeholder="Votre message..."
          alwaysShowSend="true"
          onSend={(messages) => onSend(messages)}
          user={{
            _id: 1,
          }}
          renderInputToolbar={(props) => customtInputToolbar(props)}
          renderBubble={(props) => customBubble(props)}
        />

        {/*  <KeyboardAvoidingView behavior='height' enabled>
=======
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
                    <Text style={styles.top}>Interlocuteur's Name</Text>
                    <Text style={styles.top}>???</Text>
                </View>

                <ScrollView>
                    {listMessageItems}
                </ScrollView>

                <KeyboardAvoidingView behavior='height' enabled>
>>>>>>> chatScreenVendredi
                    <View style={{ padding: 0, marginBottom: 0 }}>
                        <Input style={styles.input} placeholder="   Message..."
                            inputContainerStyle={{ borderBottomWidth: 0 }}
                            onChangeText={(val) => setCurrentMessage(val)}
                            value={currentMessage}
                            rightIcon={<Icon name='arrow-circle-up' size={41} color="#E9940A"
                                onPress={() => { socket.emit('sendMessage', { message: currentMessage, token: props.token }); setCurrentMessage("");}} />}
                        />
                    </View>
<<<<<<< HEAD
                </KeyboardAvoidingView> */}
      </View>
    </>
  );
=======
                </KeyboardAvoidingView>
            </View>


        </>
    );
>>>>>>> chatScreenVendredi
};

function mapStateToProps(state) {
    return { token: state.token }
}

export default connect(
    mapStateToProps,
    null
)(ChatScreen);

const styles = StyleSheet.create({
<<<<<<< HEAD
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
    backgroundColor: '#456283',
  },
  content: {
    margin: 5,
    padding: 5,
    backgroundColor: '#FFF',
    width: '55%',
    height: 75,
    borderRadius: 10,
  },
=======
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
    rightWrapper: {
        marginBottom: 5,
        marginRight: 0,
        paddingLeft: 5,
        backgroundColor: '#C0CBE5',
        width: '55%',
        height: 95,
        borderRadius: 10,
    },
    leftWrapper: {
        marginBottom: 5,
        marginRight: 0,
        paddingLeft: 5,
        backgroundColor: '#FFF555',
        width: '55%',
        height: 95,
        borderRadius: 10,
    },
    message: {
        width: '70%',
        padding: 0,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        borderRadius: 50,
        backgroundColor: '#456283',
    },
>>>>>>> chatScreenVendredi
});

/*  const [messages, setMessages] = useState([]);

   useEffect(() => {
       setMessages([
           {
               _id: 1,
               text: 'Veuillez me répondre !',
               createdAt: new Date(),
               user: {
                   _id: 2,
                   name: 'React Native',
                   avatar: '../assets/ad.jpeg',
               },
           },
       ])
   }, []) */

/*    const onSend = useCallback((messages = []) => {
       setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
   }, [])

   const customtInputToolbar = props => {
       return (
           <InputToolbar
               {...props}
               containerStyle={{
                   backgroundColor: "pink",
                   padding: 1,
                   height: 50,
                   marginLeft: 15,
                   marginBottom: 5,
                   borderRadius: 30,
               }}
           />
       );
   };
   
   const customBubble = props => {
       return (
           <Bubble
               {...props}
               textStyle={{
                   right: {
                       color: "#20F3C8"
                   },
                   left: {
                       color: "#9120F3"
                   }
               }}
               style={styles.leftWrapper}
           />
       )
   }; */

/*    <GiftedChat
               messages={messages}
               placeholder='Votre message...'
               alwaysShowSend={true}
               onSend={messages => onSend(messages)}
               user={{
                   _id: 1,
               }}
               renderInputToolbar={props => customtInputToolbar(props)}
               renderBubble={props => customBubble(props)}
           /> */

