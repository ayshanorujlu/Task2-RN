import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  Alert,
  Linking,
  Platform,
  Dimensions,
  ImageBackground,
} from "react-native";
import { Image } from "expo-image";

// Modal, Alert,Linking, Platform,
// Dimensions, ImageBackground, Image
const { width: screenWidth } = Dimensions.get("screen");
const supportUrl = "https://pixso.net/";
const errorUrl = "asladj.ad";

const blurhash = "https://blurha.sh/";

const HomePage = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  console.log("Platform :>> ", Platform);
  console.log("Dimenstions :>> ", Dimensions.get("screen"));
  console.log("Dimenstions :>> ", Dimensions.get("window"));
  const handleOpenUrl = async () => {
    try {
      const supported = await Linking.canOpenURL(errorUrl);
      console.log("supported :>> ", supported);
      if (supported) {
        return await Linking.openURL(errorUrl);
      }

      Alert.alert("Error", "Incorrect url");
    } catch (error: any) {
      console.log(error);
      throw new Error(error);
    }
  };

  const toggleModal = () => {
    setModalVisible((prev) => !prev);
  };

  const createAlert = () => {
    Alert.alert("Title of Alert", "Description of Alert", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "destructive",
      },
      {
        text: "Done",
        onPress: () => console.log("Done Pressed"),
      },
    ]);
  };

  return (
    <ImageBackground
      source={{ uri: "https://picsum.photos/seed/picsum/600/800" }}
      style={styles.backgroundImage}
    >
      {Platform.OS === "android" ? (
        <View
          style={{
            width: screenWidth - 40
          }}
        >
          <Text>Only On Android</Text>
        </View>
      ) : (
        <Text>Only On iOS</Text>
      )}
      <Pressable onPress={toggleModal}>
        <Text>Open Modal</Text>
      </Pressable>
      <Pressable onPress={createAlert}>
        <Text>Open Alert</Text>
      </Pressable>
      <Pressable onPress={handleOpenUrl}>
        <Text>Open Url</Text>
      </Pressable>
      {/* <Image
        transition={300}
        placeholder={{ blurhash }}
        contentFit="fill"
        style={styles.image}
        source="https://picsum.photos/seed/picsum/300/200"
      /> */}

      <Modal transparent={true} animationType="slide" visible={modalVisible}>
        <View style={styles.modal}>
          <View style={styles.modalInnerContainer}>
            <Text>Hello From Modal!</Text>
          </View>
          <Pressable onPress={toggleModal}>
            <Text>Close</Text>
          </Pressable>
        </View>
      </Modal>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  modalInnerContainer: {
    padding: 24,
    backgroundColor: "white",
    margin: 20,
    borderRadius: 24,
    alignItems: "center",
  },
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    backgroundColor: "white",
    height: 300,
  },
});

export default HomePage;











