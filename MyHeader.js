import React from "react";
import { Text } from "react-native";
import { Appbar } from "react-native-paper";

export default function MyHeader(props) {
  return (
    <Appbar.Header
      style={{ backgroundColor: "cornflowerblue", justifyContent: "center" }}
    >
      <Text
        style={{
          color: "#fff",
          fontSize: 24,
          alignItems: "center",
        }}
      >
        {props.title}
      </Text>
    </Appbar.Header>
  );
}
