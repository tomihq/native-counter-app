import { useCounterStore } from "@/store/counterStore";
import { Text, TextStyle, TouchableOpacity, View } from "react-native";

export default function Index() {
  const count = useCounterStore((state) => state.count);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        flexDirection: "column"
      }}
    >
      <Text style={{fontSize: 80, fontWeight: "bold"}}>{count}</Text>
     <ActionButtons/>
    </View>
    
  );
}


export const ActionButtons = () =>{
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

   const textStyle: TextStyle = {
    fontSize: 48,
    fontWeight: 300,
    color: "#007AFF", 
    paddingHorizontal: 20,
  };

   return (
    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity onPress={decrement}>
        <Text style={textStyle}>−</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={increment}>
        <Text style={textStyle}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
