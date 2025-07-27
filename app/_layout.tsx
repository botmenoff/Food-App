import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }} >
      <Stack.Screen name="index" options={{ headerShown: true, title: "HomePage" }} />
      <Stack.Screen name="beanDetail/[id]" options={{ headerShown: true, title: "BeanDetail" }} />
    </Stack>
  );
}