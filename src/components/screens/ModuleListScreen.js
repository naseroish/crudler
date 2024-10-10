import { useState } from "react";
import { LogBox, StyleSheet } from "react-native";
import Screen from "../layout/Screen";
import intialModules from "../../data/modules.js";
import ModuleList from "../entity/modules/ModuleList.js";
import { ButtonTray, Button } from "../UI/Button.js";
import Icons from "../UI/Icons.js";

const ModuleListScreen = ({ navigation }) => {
  // Initialisations ---------------------------------
  LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);
  // State -------------------------------------------
  const [modules, setModules] = useState(intialModules);
  // Handlers ----------------------------------------
  const handleDelete = (module) => 
    setModules(modules.filter((m) => m.ModuleID !== module.ModuleID));

  const handleAdd = (module) => setModules([...modules, module]);

  const onDelete = (module) => {
    handleDelete(module);
    navigation.goBack();
  };

  const onAdd = (module) => {
    handleAdd(module);
    navigation.goBack();
  };

  const goToViewScreen = (module) => navigation.navigate('ModuleViewScreen', { module, onDelete });
  const goToAddScreen = () => navigation.navigate('ModuleAddScreen', { onAdd });
  // View --------------------------------------------
  return (
    <Screen>
      <ButtonTray>
        <Button label="Add" icon={<Icons.Add/>} onClick={goToAddScreen} />
      </ButtonTray>
      <ModuleList modules={modules} onSelect={goToViewScreen} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleListScreen;