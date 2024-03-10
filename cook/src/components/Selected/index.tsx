import { View, Text } from "react-native";
import Animated, { BounceInDown, SlideInDown } from "react-native-reanimated";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { theme } from "@/theme";
import { Button } from "../Button";

type Props = {
  quantify: number;
  onClear: () => void;
  onSearch: () => void;
};

export function Selected({ quantify, onClear, onSearch }: Props) {
  return (
    <Animated.View
      style={styles.container}
      entering={SlideInDown.duration(500)}
      exiting={BounceInDown}
    >
      <View style={styles.header}>
        <Text style={styles.label}>{quantify} ingredientes selecionados</Text>
        <MaterialIcons
          name="close"
          size={24}
          onPress={onClear}
          color={theme.colors.gray_400}
        />
      </View>
      <Button title="Encontrar" onPress={onSearch} />
    </Animated.View>
  );
}
