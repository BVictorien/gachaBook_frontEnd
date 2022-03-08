//////////////////////////////////IMPORT////////////////////////////////////////////////////////////
import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useIsFocused } from "@react-navigation/native";
import { connect } from "react-redux";

//////////////////////////////////Function//////////////////////////////////////////////////////////
function ScanCode(props) {
  //////////////////////////////////State///////////////////////////////////////////
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const isFocused = useIsFocused();

  //////////////////////////////////Method/////////////////////////////////////////
  /*------------------------------------------------------------------*/
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  /*------------------------------------------------------------------*/
  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);
    const scan = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=isbn:${data}`
    );
    const dataRes = await scan.json();
    // alert(`Titre: ${dataRes.items[0].volumeInfo.title}
    // Auteur: ${dataRes.items[0].volumeInfo.authors[0]}`);
    let image = "";

    dataRes.items[0].volumeInfo.imageLinks == undefined
      ? (image = "No image")
      : (image = dataRes.items[0].volumeInfo.imageLinks.thumbnail);

    props.sendBookDetail(
      dataRes.items[0].volumeInfo.title,
      dataRes.items[0].volumeInfo.authors[0],
      dataRes.items[0].volumeInfo.language,
      dataRes.items[0].volumeInfo.pageCount,
      data,
      dataRes.items[0].volumeInfo.publisher,
      image,
      dataRes.items[0].volumeInfo.description,
      dataRes.items[0].volumeInfo.publishedDate
    );
    props.navigation.navigate("AddBook");
  };
  /*------------------------------------------------------------------*/
  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  //////////////////////////////////Return/////////////////////////////////////////////////
  if (isFocused) {
    return (
      <View style={styles.container}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        {scanned && (
          <Button
            title={"Tap to Scan Again"}
            onPress={() => setScanned(false)}
          />
        )}
        <Button
          title="back"
          buttonStyle={styles.backText}
          onPress={() => {
            props.navigation.navigate("AddBook");
          }}
        />
      </View>
    );
  } else {
    /**-----------------------------------------------------------*/
    return <View style={{ flex: 1 }} />;
  }
}
//////////////////////////////////Style/////////////////////////////////////////////////
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "baseline",
    paddingTop: 50,
    backgroundColor: "#1E202A",
  },
  backText: {
    marginTop: 400,
    color: "#F5960D",
  },
});

//////////////////////////////////Redux///////////////////////////////////////////////////////////
/*-----------------------------------------------------------*/

/*-----------------------------------------------------------*/
function mapDispatchToProps(dispatch) {
  return {
    sendBookDetail: function (
      title,
      author,
      language,
      pageCount,
      barcode,
      editor,
      imageLink,
      description,
      year
    ) {
      dispatch({
        type: "BookDetail",
        title,
        author,
        language,
        pageCount,
        barcode,
        editor,
        imageLink,
        description,
        year,
      });
    },
  };
}
/*-----------------------------------------------------------*/
export default connect(null, mapDispatchToProps)(ScanCode);
