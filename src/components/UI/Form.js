import { KeyboardAvoidingView, ScrollView, View, Text, TextInput, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { ButtonTray, Button } from "../UI/Button.js";
import Icons from "../UI/Icons.js";

const Form = ({ children, onSubmit, onCancel, submitLabel, submitIcon }) => {
  // Initialisations ---------------------------------
  // State -------------------------------------------
  // Handlers ----------------------------------------
  // View --------------------------------------------
  return (
    <KeyboardAvoidingView style={styles.formContainer}>
      <ScrollView contentContainerStyle={styles.formItems}>{children}</ScrollView>
      <ButtonTray>
        <Button label={submitLabel} icon={submitIcon} onClick={onSubmit} />
        <Button label="Cancel" icon={<Icons.Close />} onClick={onCancel} />
      </ButtonTray>
    </KeyboardAvoidingView>
  );
};

const InputText = ({ label, value, onChange }) => {
  // Initialisations ---------------------------------
  // State -------------------------------------------
  // Handlers ----------------------------------------
  // View --------------------------------------------
  return (
    <View style={styles.item}>
      <Text style={styles.itemLabel}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChange}
        style={styles.itemInput}
      />
    </View>
  );
};

const InputSelect = ({ label, prompt, options, value, onChange }) => {
  // Initialisations ---------------------------------
  // State -------------------------------------------
  // Handlers ----------------------------------------
  // View --------------------------------------------
  return (
    <View style={styles.item}>
      <Text style={styles.itemLabel}>{label}</Text>
      <Picker
        mode="dropdown"
        selectedValue={value}
        onValueChange={onChange}
        style={styles.itemPickerStyle}
      >
        <Picker.Item
          value={null}
          label={prompt}
          style={styles.itemPickerPromptStyle}
        />
        {options.map((option, index) => (
          <Picker.Item key={index} value={option.value} label={option.label} />
        ))}
      </Picker>
    </View>
  );
};

//compose components
Form.InputText = InputText;
Form.InputSelect = InputSelect;

const styles = StyleSheet.create({
  formItems: {
    gap: 5,
  },
  formContainer: {
    gap: 10,
  },
  itemLabel: {
    color: "grey",
    fontSize: 16,
    marginBottom: 5,
  },
  itemInput: {
    height: 50,
    paddingLeft: 10,
    fontSize: 16,
    backgroundColor: "white",
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "lightgrey",
  },
  itemPickerStyle: {
    height: 50,
    backgroundColor: "whitesmoke",
  },
  itemPickerPromptStyle: {
    color: "grey",
  },
});

export default Form;
