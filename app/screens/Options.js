import { View, StatusBar, ScrollView, Platform } from "react-native";
import React, { Component } from "react";
import { Ionicons } from "@expo/vector-icons";
import { ListItem, Separator } from "../components/List";
import styles from "../layouts/styles";

const ICON_COLOR = "#868686";
const OS_PREFIX = Platform.OS === "ios" ? "ios" : "md";
const ICON_SIZE = "23";
class Options extends Component {
  handleThemesPress = () => {
    console.log("Theme clicked");
  };
  handleSitePress = () => {
    console.log("Site clicked");
  };
  render() {
    return (
      <View>
        <StatusBar translucent={false} barStyle="default" />
        <ScrollView style={styles.statusBarPadding}>
          <ListItem
            text="Themes"
            onPress={this.handleThemesPress}
            customIcon={
              <Ionicons
                name={`${OS_PREFIX}-arrow-forward`}
                color={ICON_COLOR}
                size={ICON_SIZE}
              />
            }
          />
          <Separator />
          <ListItem
            text={`${OS_PREFIX}-link`}
            onPress={this.handleSitePress}
            customIcon={
              <Ionicons name="ios-link" color={ICON_COLOR} size={ICON_SIZE} />
            }
          />
        </ScrollView>
      </View>
    );
  }
}

export default Options;
