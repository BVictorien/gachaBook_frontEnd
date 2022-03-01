import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ChatScreen = () => {

    handleChat = () => {

    }

    return (
        <>
            <View style={styles.container}>
                <Text>Back</Text>
                <Text>MESSAGES</Text>
                <Text>RDV</Text>
            </View>
            <View>
                <Input placeholder="   Cherchez un livre..." onChangeText={updateSearch}
                    inputContainerStyle={{ borderBottomWidth: 0 }}
                    rightIcon={<Icon name='arrow' size={45} color="#E9940A" onPress={() => handleChat()} />}
                />
            </View>
        </>
    );
};

export default ChatScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#50, 50, 55',
    },
});