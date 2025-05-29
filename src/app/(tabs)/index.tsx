import { Text, View } from "react-native";
import mediaList from '@assets/data/mediaList.json';

export default function HomeScreen() {
  const mediaItem = mediaList[0];

  return (
    <View>
      <Text style={{color: "white"}}>{mediaItem.title}</Text>
    </View>
  );
}
