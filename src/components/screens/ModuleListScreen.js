import { useState } from "react";
import { StyleSheet } from "react-native";
import Screen from "../layout/Screen";
import intialModules from "../../data/modules.js";
import ModuleList from "../entity/modules/ModuleList.js";

const ModuleListScreen = () => {
  // Initialisations ---------------------------------
  // State -------------------------------------------
  const [modules, setModules] = useState(intialModules);
  // Handlers ----------------------------------------
  const handleDelete = (module) =>
    setModules(modules.filter((m) => m !== module));
  // View --------------------------------------------
  return (
    <Screen>
      <ModuleList modules={modules} onSelect={handleDelete} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleListScreen;
