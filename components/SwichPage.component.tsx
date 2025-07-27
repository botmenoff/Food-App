import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

const { width } = Dimensions.get("window");
type SwichPageProps = {
    page: number,
    onPageClick: (newPage: number) => void
}
export default function SwichPage({page, onPageClick}: SwichPageProps) {
    const rightArrow = "→"
    const leftArrow = "←"
  return (
    <View style={styles.container}>
        <Text style={styles.arrows} onPress={() => onPageClick(page - 1)}>{leftArrow}</Text>
        <Text style={styles.arrows}>{page}</Text>
        <Text style={styles.arrows} onPress={() => onPageClick(page + 1)}>{rightArrow}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
    paddingHorizontal: "5%",
    backgroundColor: "#1a1613ff"
  },
  arrows: {
    cursor: "pointer",
    fontSize: 40,
    color: "#EA4757"
  }
});