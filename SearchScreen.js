import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Card, List } from "react-native-paper";
import MyHeader from "./MyHeader";

export default function SearchScreen({ navigation }) {
  const [text, setText] = useState("");
  const [cities, setCities] = useState([]);

  listClicked = (name) => {
    setText(name);
    console.log(name);
    navigation.navigate("HomeScreen", { city: name });
  };

  fetchText = (text) => {
    setText(text);
    fetch(`http://autocomplete.wunderground.com/aq?query=${text}`)
      .then((data) => data.json())
      .then((city) => {
        setCities(city.RESULTS.slice(0, 9));
      });
  };

  var renderItems;
  if (cities.length == 0 || text == "") {
    renderItems = (
      <View style={{marginTop:80}}>
        <Image source={require("./assets/city.png")} />
      </View>
    );
  } else {
    renderItems = cities.map((city) => {
      return (
        <TouchableOpacity key={city.ll}>
          <Card
            style={{ elevation: 10, margin: 5 }}
            key={city.ll}
            onPress={() => listClicked(city.name)}
          >
            <List.Item title={city.name} />
          </Card>
        </TouchableOpacity>
      );
    });
  }
  return (
    <View style={styles.container}>
      <MyHeader title="Search your city" />
      <View>
        <TextInput
          placeholder="Enter city name"
          placeholderTextColor="grey"
          underlineColorAndroid="blue"
          onChangeText={(text) => fetchText(text)}
          on
          style={{ padding: 20, fontSize: 17 }}
          value={text}
        />
      </View>
      <ScrollView>{renderItems}</ScrollView>
    </View>
  );
}
//}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
