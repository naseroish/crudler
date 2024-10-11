import { useState } from "react";
import { StyleSheet } from "react-native";
import Form from "../../UI/Form.js";
import Icons from "../../UI/Icons.js";

const defaultModule = {
  ModuleID: null,
  ModuleCode: null,
  ModuleName: null,
  ModuleLevel: null,
  ModuleLeaderID: null,
  ModuleLeaderName: null,
  ModuleImage: null,
};

const ModuleForm = ({ onSubmit, onCancel }) => {
  // Initialisations ---------------------------------
  defaultModule.ModuleID = Math.floor(100000 + Math.random() * 900000);
  defaultModule.ModuleImage =
    "https://images.freeimages.com/images/small-previews/cf5/cellphone-1313194.jpg";

  const levels = [
    { value: 3, label: '3 (Foundation)' },
    { value: 4, label: '4 (First year)' },
    { value: 5, label: '5 (Second year)' },
    { value: 6, label: '6 (Final year)' },
    { value: 7, label: '7 (Masters)' },
  ];
  // State -------------------------------------------
  const [module, setModule] = useState(defaultModule);

  // Handlers ----------------------------------------
  const handleChange = (field, value) =>
    setModule({ ...module, [field]: value });
  const handleSubmit = () => onSubmit(module);
  // View --------------------------------------------
  const submitLabel = "Add";
  const submitIcon = <Icons.Add />;
  return (
    <Form
      onSubmit={handleSubmit}
      onCancel={onCancel}
      submitLabel={submitLabel}
      submitIcon={submitIcon}
    >
      <Form.InputText
        label="Module code"
        value={module.ModuleCode}
        onChange={(value) => handleChange("ModuleCode", value)}
      />
      <Form.InputSelect
        label="Module level"
        prompt="Select module level ..."
        options={levels}
        value={module.ModuleLevel}
        onChange={(value) => handleChange("ModuleLevel", value)}
      />
      <Form.InputText
        label="Module name"
        value={module.ModuleName}
        onChange={(value) => handleChange("ModuleName", value)}
      />
      <Form.InputText
        label="Module leader"
        value={module.ModuleLeaderName}
        onChange={(value) => handleChange("ModuleLeaderName", value)}
      />

      <Form.InputText
        label="Module image URL"
        value={module.ModuleImage}
        onChange={(value) => handleChange("ModuleImage", value)}
      />
    </Form>
  );
};

const styles = StyleSheet.create({});

export default ModuleForm;
