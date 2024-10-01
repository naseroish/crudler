import { StyleSheet } from "react-native";
import Screen from "../layout/Screen";
import intialModules from "../../data/modules.js";
import ModuleList from "../entity/modules/ModuleList.js";

const ModuleListScreen = () => {
  // Initialisations ---------------------------------
  const modules = intialModules;
  // State -------------------------------------------
  // Handlers ----------------------------------------
  // View --------------------------------------------
  return (
    <Screen>
      <ModuleList modules={modules} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleListScreen;
