import Bean from '@/models/Bean.model';
import { Image } from 'expo-image';
import React from "react";
import { Dimensions, StyleSheet, Text } from "react-native";

const { width } = Dimensions.get("window");
type BeanCardProps = {
  beanInfo: Bean
}
export default function BeanCard({beanInfo}: BeanCardProps) {
  return (
    <React.Fragment key={beanInfo.beanId}>
      <Image
        style={styles.image}
        source={{ uri: beanInfo.imageUrl }}
        contentFit="contain"
        transition={1000}
      />
      <Text style={styles.beanText}>{beanInfo.flavourName}</Text>
    </React.Fragment>
  );
}


const styles = StyleSheet.create({
  image: {
    width: width * 0.9, 
    height: 200,
    resizeMode: 'cover',
    marginBottom: 16,
    borderRadius: 12,
    backgroundColor: '#eee',
  },
  beanText: {
    fontSize: 20,
  }
});