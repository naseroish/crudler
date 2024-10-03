import { StyleSheet, Text, View, Pressable } from "react-native";

const ModuleItem = ({module, onSelect}) => {
  // Initialisations ---------------------------------
  // State -------------------------------------------
  // Handlers ----------------------------------------
  // View --------------------------------------------
  return (
    <Pressable key={module.ModuleCode} onPress={() => onSelect(module)}>
    <View style={styles.item}>
      <Text style={styles.text}>
        {module.ModuleCode} {module.ModuleName}
      </Text>
    </View>
  </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: "lightgrey",
  },
  text: {
    fontSize: 16,
  },
});

export default ModuleItem;
