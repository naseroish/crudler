import { StyleSheet, Text, View, Pressable } from "react-native";

const ModuleItem = ({module}) => {
  // Initialisations ---------------------------------
  // State -------------------------------------------
  // Handlers ----------------------------------------
  const handleSelect = () => alert(`Selected ${module.ModuleCode}`);
  // View --------------------------------------------
  return (
    <Pressable key={module.ModuleCode} onPress={handleSelect}>
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
