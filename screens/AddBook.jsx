//////////////////////////////////////////IMPORT//////////////////////////////////////////////////
import React, { useState } from "react";
import { View, Image, StyleSheet, ScrollView } from "react-native";
import { Button, Input, Text } from "react-native-elements";

//////////////////////////////////////////Function//////////////////////////////////////////////////

function AddBook(props) {
  ///////////////////////////////State declaration, VARS /////////////////////////
  const [titre, setTitre] = useState("");
  const [auteur, setAuteur] = useState("");
  const [description, setDescription] = useState("");
  const [langue, setLangue] = useState("");
  const [nbPages, setNbPages] = useState("");
  const [editeur, setEditeur] = useState("");
  const [annee, setAnnee] = useState("");
  const [codeBarre, setCodeBarre] = useState("");
  const [disponibilite, setDisponibilite] = useState(true);
  const [condition, setCondition] = useState("");

  ///////////////////////////////Return////////////////////////////////////////
  return (
    <View style={styles.background}>
      <Text
        style={styles.backText}
        onPress={() => {
          props.navigation.navigate("BottomNavigator");
        }}
      >
        back
      </Text>
      <View style={styles.barreButton}>
        <Text style={styles.ajoutText}>Ajouter un Livre</Text>
        <Image
          style={{ width: "90%" }}
          source={require("../assets/code-barre.png")}
        />
        <Button buttonStyle={styles.button} title="Scanner le Livre" />
      </View>
      <ScrollView>
        <View style={{ marginTop: 19 }}>
          <Input
            containerStyle={{ width: 370 }}
            inputStyle={styles.input}
            placeholder="Titre"
            value={titre}
          />
          <Input
            containerStyle={{ width: 370 }}
            inputStyle={styles.input}
            placeholder="Auteur"
            value={auteur}
          />
          <Input
            containerStyle={{ width: 370 }}
            inputStyle={styles.input}
            placeholder="Description"
            value={description}
          />
          <Input
            containerStyle={{ width: 370 }}
            inputStyle={styles.input}
            placeholder="Langue"
            value={langue}
          />
          <Input
            containerStyle={{ width: 370 }}
            inputStyle={styles.input}
            placeholder="Nombre de pages"
            value={nbPages}
          />
          <Input
            containerStyle={{ width: 370 }}
            inputStyle={styles.input}
            placeholder="Editeur"
            value={editeur}
          />
          <Input
            containerStyle={{ width: 370 }}
            inputStyle={styles.input}
            placeholder="Annee"
            value={annee}
          />
          <Input
            containerStyle={{ width: 370 }}
            inputStyle={styles.input}
            placeholder="Code-barre"
            value={codeBarre}
          />
          <Input
            containerStyle={{ width: 370 }}
            inputStyle={styles.input}
            placeholder="Code-barre"
            value={codeBarre}
          />
          <Input
            containerStyle={{ width: 370 }}
            inputStyle={styles.input}
            placeholder="Etat du livre"
            value={condition}
          />
        <Button
          buttonStyle={styles.photoButton}
          title="Prendre photo du livre"
        />
        </View>
      </ScrollView>
      <Button buttonStyle={styles.buttonAjout} title="Ajouter le Livre" />
    </View>
  );
}

//////////////////////////////////////////Styles//////////////////////////////////////////////////
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#1E202A",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 30,
  },
  backText: {
    marginTop: 15,
    color: "#F5960D",
    marginRight: "auto",
    marginLeft: 30,
    marginBottom: 15,
  },
  ajoutText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  barreButton: {
    backgroundColor: "white",
    alignItems: "center",
    width: "90%",
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#F5960D",
    borderRadius: 50,
    width: 300,
    marginBottom: 10,
  },
  input: {
    borderRadius: 5,
    backgroundColor: "white",
  },
  photoButton:{
    backgroundColor: "#F5960D",
    borderRadius: 50,
    width: 350,
    marginBottom: 20,
    marginLeft: 10,
  },
  buttonAjout: {
    backgroundColor: "#F5960D",
    borderRadius: 50,
    width: 350,
    marginBottom: 20,
  },
});
export default AddBook;
