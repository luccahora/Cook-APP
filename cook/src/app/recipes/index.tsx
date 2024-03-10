import { FlatList, Text, View } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Recipe } from "@/components/Recipe";
import { Ingredients } from "@/components/Ingredients";

export default function Recipes() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons
          name="arrow-back"
          size={32}
          onPress={() => router.back()}
        />
        <Text style={styles.title}>Ingredientes</Text>
      </View>
      <Ingredients ingredients={["1"]} />
      <FlatList
        data={["1"]}
        keyExtractor={(item) => item}
        renderItem={() => (
          <Recipe
            recipe={{
              name: "Omelete",
              image:
                "https://static.itdg.com.br/images/360-240/b7fbdbc168198caec6673ff663bcef66/322150-original.jpg",
              minutes: 10,
            }}
          />
        )}
      />
    </View>
  );
}
