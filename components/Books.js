import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

class Books extends React.Component {
  constructor(props) {
    super(props);
    //console.log(this.props);
  }

  render() {
    return (
      <TouchableOpacity>
        <View style={styles.background}>
          <View style={styles.image}>
            <Image
              style={{ width: 60, height: 80 }}
              source={{ uri: this.props.image }}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{this.props.title}</Text>
            <Text style={styles.text}>{this.props.author}</Text>
            <Text style={styles.text}>{this.props.publisher}</Text>
            <Text style={styles.text}>{this.props.price}₩</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default Books;

const styles = StyleSheet.create({
  background: {
    backgroundColor: "white",
    flexDirection: "row",
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  image: {},
  textContainer: {
    marginLeft: 2,
    flexDirection: "column",
  },
  title: {
    textAlign: "left",
    margin: 2,
    marginBottom: 2,
    fontSize: 13,
  },
  text: {
    margin: 1,
    fontSize: 12,
  },
});
