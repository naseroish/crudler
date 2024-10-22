
import { LogBox, StyleSheet, ActivityIndicator } from "react-native";
import useLoad from "../API/useLoad.js";
import Screen from "../layout/Screen";
import ModuleList from "../entity/modules/ModuleList.js";
import { ButtonTray, Button } from "../UI/Button.js";
import Icons from "../UI/Icons.js";

const ModuleListScreen = ({ navigation }) => {
  // Initialisations ---------------------------------
  LogBox.ignoreLogs([
    "Non-serializable values were found in the navigation state",
  ]);
  const modulesEndpoint = "https://softwarehub.uk/unibase/api/modules";
  // State -------------------------------------------
  const [modules, setModules, isLoading, loadModules] = useLoad(modulesEndpoint);


  // Handlers ----------------------------------------
  const handleDelete = (module) =>
    setModules(modules.filter((m) => m.ModuleID !== module.ModuleID));

  const handleAdd = (module) => setModules([...modules, module]);

  const handleModify = (updatedModule) =>
    setModules(
      modules.map((module) =>
        module.ModuleID === updatedModule.ModuleID ? updatedModule : module
      )
    );

  const onDelete = (module) => {
    handleDelete(module);
    navigation.goBack();
  };

  const onAdd = (module) => {
    handleAdd(module);
    navigation.goBack();
  };

  const onModify = (module) => {
    handleModify(module);
    navigation.navigate("ModuleListScreen");
  };

  const goToViewScreen = (module) =>
    navigation.navigate("ModuleViewScreen", { module, onDelete, onModify });
  const goToAddScreen = () => navigation.navigate("ModuleAddScreen", { onAdd });
  // View --------------------------------------------
  return (
    <Screen>
      <ButtonTray>
        <Button label="Add" icon={<Icons.Add />} onClick={goToAddScreen} />
      </ButtonTray>
      {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
      <ModuleList modules={modules} onSelect={goToViewScreen} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleListScreen;
