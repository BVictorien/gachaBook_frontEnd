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
  const [prix, setPrix] = useState("");

  //////////////////////////////Methods //////////////////////////////////////
  /*------------------------------------------------------*/
  async function saveBook() {
    let response = await fetch("http://192.168.10.150:3000/save-book", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `title=${titre}&author=${auteur}&description=${description}&language=${langue}&nbPages=${nbPages}&editor=${editeur}&year=${annee}&barcode=${codeBarre}&price=${prix}&condition=${condition}`,
    });
  }
  /*------------------------------------------------------*/

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
        <Button
          buttonStyle={styles.button}
          title="Scanner le Livre"
          onPress={() => props.navigation.navigate("ScanCode")}
        />
      </View>
      <ScrollView>
        <View style={{ marginTop: 19 }}>
          <Input
            containerStyle={{ width: 370 }}
            inputStyle={styles.input}
            placeholder="Titre"
            value={titre}
            onChangeText={(x) => setTitre(x)}
          />
          <Input
            containerStyle={{ width: 370 }}
            inputStyle={styles.input}
            placeholder="Auteur"
            value={auteur}
            onChangeText={(x) => setAuteur(x)}
          />
          <Input
            containerStyle={{ width: 370 }}
            inputStyle={styles.input}
            placeholder="Description"
            value={description}
            onChangeText={(x) => setDescription(x)}
          />
          <Input
            containerStyle={{ width: 370 }}
            inputStyle={styles.input}
            placeholder="Langue"
            value={langue}
            onChangeText={(x) => setLangue(x)}
          />
          <Input
            containerStyle={{ width: 370 }}
            inputStyle={styles.input}
            placeholder="Nombre de pages"
            value={nbPages}
            onChangeText={(x) => setNbPages(x)}
          />
          <Input
            containerStyle={{ width: 370 }}
            inputStyle={styles.input}
            placeholder="Editeur"
            value={editeur}
            onChangeText={(x) => setEditeur(x)}
          />
          <Input
            containerStyle={{ width: 370 }}
            inputStyle={styles.input}
            placeholder="Annee"
            value={annee}
            onChangeText={(x) => setAnnee(x)}
          />
          <Input
            containerStyle={{ width: 370 }}
            inputStyle={styles.input}
            placeholder="Code-barre"
            value={codeBarre}
            onChangeText={(x) => setCodeBarre(x)}
          />

          <Input
            containerStyle={{ width: 370 }}
            inputStyle={styles.input}
            placeholder="Etat du livre"
            value={condition}
            onChangeText={(x) => setCondition(x)}
          />
          <Input
            containerStyle={{ width: 370 }}
            inputStyle={styles.input}
            placeholder="Prix"
            value={prix}
            onChangeText={(x) => setPrix(x)}
          />
          <Button
            buttonStyle={styles.photoButton}
            title="Prendre photo du livre"
          />
        </View>
      </ScrollView>
      <Button
        buttonStyle={styles.buttonAjout}
        title="Ajouter le Livre"
        onPress={() => saveBook()}
      />
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
  photoButton: {
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
