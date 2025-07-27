import Bean from '@/models/Bean.model';
import { Image } from 'expo-image';
import { Link } from 'expo-router';
import React from "react";
import { Dimensions, Pressable, StyleSheet, Text } from "react-native";

const { width } = Dimensions.get("window");
type BeanCardProps = {
  beanInfo: Bean
}
export default function BeanCard({ beanInfo }: BeanCardProps) {
  return (
    <Link
      key={beanInfo.beanId}
      href={{
        pathname: '/beanDetail/[id]',
        params: { id: beanInfo.beanId }
      }}
      asChild
    >
      <Pressable style={styles.card}>
        <Text style={styles.beanText}>{beanInfo.flavorName}</Text>
        <Image
          style={styles.image}
          source={{ uri: beanInfo.imageUrl }}
          contentFit="contain"
          transition={1000}
        />
        <Text style={styles.beanGroup}>{beanInfo.groupName}</Text>
      </Pressable>
    </Link>
  );
}


const styles = StyleSheet.create({
  image: {
    width: width * 0.9,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 16,
    borderRadius: 12,
  },
  beanText: {
    fontSize: 20,
    color: "#EA4757"
  },
  card: {
    marginBottom: 16,
    alignItems: "center",
    borderColor: "#EA4757",
    borderWidth: 2,
    borderRadius: 12,
    padding: 12
  },
  beanGroup: {
    fontSize: 18,
    color: "#EA4757"
  }
});