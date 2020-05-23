import React, { useState, useEffect } from "react";
import { View, Image, Text, AsyncStorage } from "react-native";
import { Card, ActivityIndicator } from "react-native-paper";
import MyHeader from "./MyHeader";
import { LinearGradient } from "expo-linear-gradient";

//53e80987aee2179880234fba6d88082a
//http://api.openweathermap.org/data/2.5/weather?q=$%7BMycity%7D&units=metric&APPID=%7Bapikey

export default function HomeScreen({ route }) {
  const { city } = route.params;
  const [name, setName] = useState("");
  const [temp, setTemp] = useState("");
  const [desc, setDesc] = useState("");
  const [icon, setIcon] = useState("");

  useEffect(() => {
    Mycity = city;

    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${Mycity}&units=metric&APPID=53e80987aee2179880234fba6d88082a`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setName(data.name);
        setTemp(data.main.temp);
        setDesc(data.weather[0].description);
        setIcon(data.weather[0].icon);
      });
    return;
  });

  return (
    <View>
      <MyHeader title="Weather Forecast App" />
      <Card style={{ elevation: 10, margin: 20 }}>
        <LinearGradient colors={["#021B79", "#0575E6"]}>
          <View
            style={{
              padding: 30,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {name == "" ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text
                style={{
                  fontSize: 20,
                  color: "#fff",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                {name}
              </Text>
            )}
            {icon == "" ? (
              <ActivityIndicator color="white" />
            ) : (
              <Image
                style={{ height: 120, width: 120, padding: 30 }}
                source={{
                  uri: "http://openweathermap.org/img/w/" + icon + ".png",
                }}
              />
            )}

            <View
              style={{
                padding: 10,
              }}
            >
              {temp == "" ? (
                <ActivityIndicator color="white" />
              ) : (
                <Text
                  style={{
                    fontSize: 20,
                    color: "#fff",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  {temp}
                </Text>
              )}

              {desc == "" ? (
                <ActivityIndicator color="white" />
              ) : (
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 20,
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  {desc}
                </Text>
              )}
            </View>
          </View>
        </LinearGradient>
      </Card>
    </View>
  );
}
