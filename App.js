import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from "react-native";

export default function App() {
  const [n1, setFirstNum] = useState("");
  const [n2, setSecondNum] = useState("");
  const [result, setResult] = useState(0);
  const [results, setResults] = useState([]);

  const handlePress = (op) => {
    const newResult =
      op === "+"
        ? Number(n1 || 0) + Number(n2 || 0)
        : Number(n1 || 0) - Number(n2 || 0);

    setResult(newResult);
    setResults([...results, `${n1} ${op} ${n2} = ${newResult}`]);
  };

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <TextInput
        placeholder="Enter the first number:"
        keyboardType="numeric"
        onChangeText={(n1) => setFirstNum(n1)}
        value={n1}
      />
      <TextInput
        placeholder="Enter the second number:"
        keyboardType="numeric"
        onChangeText={(n2) => setSecondNum(n2)}
        value={n2}
      />
      <View style={styles.buttonsRow}>
        <Pressable style={styles.button} onPress={() => handlePress("+")}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => handlePress("-")}>
          <Text style={styles.buttonText}>-</Text>
        </Pressable>
      </View>
      <FlatList
        data={results}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(index) => index.toString()}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#30b3ff",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    minWidth: 50,
    marginHorizontal: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  buttonsRow: {
    flexDirection: "row",
    marginTop: 12,
  },
});
