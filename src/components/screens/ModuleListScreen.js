import { StyleSheet } from "react-native";
import Screen from "../layout/Screen";
import intialModules from "../../data/modules.js";
import ModuleList from "../entity/modules/ModuleList.js";

const ModuleListScreen = () => {
  // Initialisations ---------------------------------
  let modules = intialModules;
  // State -------------------------------------------
  // Handlers ----------------------------------------
  const handleDelete = (module) =>
    (modules = modules.filter((m) => m.ModuleCode !== module.ModuleCode));

  // View --------------------------------------------
  return (
    <Screen>
      <ModuleList modules={modules} onSelect={handleDelete} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleListScreen;
