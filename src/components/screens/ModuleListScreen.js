import { useState } from "react";
import { LogBox, StyleSheet } from "react-native";
import Screen from "../layout/Screen";
import intialModules from "../../data/modules.js";
import ModuleList from "../entity/modules/ModuleList.js";

const ModuleListScreen = ({ navigation }) => {
  // Initialisations ---------------------------------
  LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);
  // State -------------------------------------------
  const [modules, setModules] = useState(intialModules);
  // Handlers ----------------------------------------
  const handleDelete = (module) => 
    setModules(modules.filter((m) => m.ModuleID !== module.ModuleID));

  const onDelete = (module) => {
    handleDelete(module);
    navigation.goBack();
  };

  const handleSelect = (module) => navigation.navigate('ModuleViewScreen', { module, onDelete });
  // View --------------------------------------------
  return (
    <Screen>
      <ModuleList modules={modules} onSelect={handleSelect} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleListScreen;