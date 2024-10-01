import { StyleSheet, ScrollView} from "react-native";
import ModuleItem from "./ModuleItem";

const ModuleList = ({modules}) => {
  // Initialisations ---------------------------------
  // State -------------------------------------------
  // Handlers ----------------------------------------
  // View --------------------------------------------
  return (
    <ScrollView style={styles.container}>
      {modules.map((module) => {
        return <ModuleItem key={module.ModuleCode} module={module} />;
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {}
});

export default ModuleList;
