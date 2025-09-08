import { ScrollView, Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 bg-background-primary">
      <ScrollView
        className="flex-1 px-4"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        <Text>hi</Text>
      </ScrollView>
    </View>
  );
}
