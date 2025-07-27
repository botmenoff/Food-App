import Bean from "@/models/Bean.model";
import { Image } from 'expo-image';
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

type BeanDetailProps = {
  beanInfo: Bean
};

const { width } = Dimensions.get("window");

export default function BeanDetailComponent({ beanInfo }: BeanDetailProps) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Image
          style={styles.image}
          source={{ uri: beanInfo.imageUrl }}
          contentFit="cover"
          transition={1000}
        />

        {/* Nombre */}
        <View style={styles.section}>
          <Text style={styles.title}>Nombre del Sabor</Text>
          <Text style={styles.beanText}>{beanInfo.flavorName}</Text>
        </View>

        {/* Descripción */}
        <View style={styles.section}>
          <Text style={styles.title}>Descripción</Text>
          <Text style={styles.beanText}>{beanInfo.description}</Text>
        </View>

        {/* Gluten */}
        <View style={styles.section}>
          <Text style={styles.title}>¿Sin Gluten?</Text>
          <Text style={styles.beanText}>{beanInfo.glutenFree ? "Sí" : "No"}</Text>
        </View>

        {/* Ingredientes */}
        <View style={styles.section}>
          <Text style={styles.title}>Ingredientes</Text>
          {beanInfo.ingredients.map((ingredient, idx) => (
            <Text key={idx} style={styles.beanText}>• {ingredient}</Text>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    padding: 16,
    alignItems: "center",
  },
  image: {
    width: width * 0.9,
    height: 220,
    borderRadius: 12,
  },
  section: {
    padding: 16,
    borderRadius: 12,
    width: '100%',
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    color: '#F0F0F0',
    textAlign: 'center',
  },
  beanText: {
    fontSize: 25,
    color: "#EA4757",
    textAlign: "center",
  },
});
