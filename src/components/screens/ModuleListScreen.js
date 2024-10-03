import { StyleSheet } from "react-native";
import Screen from "../layout/Screen";
import intialModules from "../../data/modules.js";
import ModuleList from "../entity/modules/ModuleList.js";

const ModuleListScreen = () => {
  // Initialisations ---------------------------------
  let modules = intialModules;
  // State -------------------------------------------
  // Handlers ----------------------------------------
  const handleDelete = (module) => {
    modules = modules.filter((m) => {
      if (m.ModuleID !== module.ModuleID) return true;
      else return false;
    });
    console.log(
      `After deleting ${module.ModuleCode}, the array of modules has length ${modules.length}`
    );
  };
  // View --------------------------------------------
  return (
    <Screen>
      <ModuleList modules={modules} onSelect={handleDelete} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleListScreen;
