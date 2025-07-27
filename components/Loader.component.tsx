import { BlurView } from 'expo-blur';
import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';

type LoaderProps = {
  showLoader: boolean
}
export default function Loader({ showLoader }: LoaderProps) {
  if (showLoader == false) return null; // Esto evita renderizar si no debe mostrarse
  console.log(showLoader);
  
  return (
    <BlurView intensity={70} style={styles.container} >
      <ActivityIndicator style={styles.container} size={'large'} color={"#EA4757"}></ActivityIndicator>
    </BlurView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});