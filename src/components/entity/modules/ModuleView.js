import { Alert, StyleSheet, Text, View } from "react-native";
import FullWidthImage from "react-native-fullwidth-image";
import Icons from "../../UI/Icons.js";
import { Button, ButtonTray } from "../../UI/Button";

const ModuleView = ({ module, onDelete, onModify }) => {
  // Initialisations ---------------------------------
  // State -------------------------------------------
  // Handlers ----------------------------------------
  const handleDelete = () => onDelete(module);

  const requestDelete = () => Alert.alert(
    "Delete warning",
    `Are you sure that you want to delete module ${module.ModuleCode} ${module.ModuleName}?`,
    [
      { text: "Cancel", style: "cancel" },
      { text: "Delete", style: "destructive", onPress: handleDelete },
    ]
  );
  // View --------------------------------------------
  return (
    <View style={styles.container}>
      <FullWidthImage
        source={{ uri: module.ModuleImageURL }}
        style={styles.image}
      />

      <View style={styles.infoTray}>
        <Text style={styles.boldText}>
          {module.ModuleCode} {module.ModuleName}
        </Text>
        <Text style={styles.text}>Level {module.ModuleLevel}</Text>
        <Text style={styles.text}>Cohort {module.ModuleYearName}</Text>
        <Text style={styles.text}>
          {module.ModuleLeaderName}
          <Text style={styles.dimText}> (Module Leader)</Text>
        </Text>
      </View>
      <ButtonTray>
        <Button icon={<Icons.Edit />} label="Modify" onClick={onModify} />
        <Button
          icon={<Icons.Delete />}
          label="Delete"
          styleButton={{ backgroundColor: "mistyrose" }}
          styleLabel={{ color: "red" }}
          onClick={requestDelete}
        />
      </ButtonTray>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 15,
  },
  image: {
    borderRadius: 3,
  },
  infoTray: {
    gap: 5,
  },
  boldText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
  },
  dimText: {
    color: "grey",
  },
});

export default ModuleView;
