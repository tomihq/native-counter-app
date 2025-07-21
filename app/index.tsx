import { useCounterStore } from "@/store/counterStore";
import { Minus, Plus, RotateCcw } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import '../styles/globals.css';
export default function Index() {
  const count = useCounterStore((state) => state.count);
  const reset = useCounterStore((state) => state.reset);

  return (
    <View className="flex-1 bg-white items-center justify-center px-4">
      <View className=" rounded-2xl  border border-gray-100 p-10 w-full max-w-md">
        <View className="items-center mb-12">
          <Text className="text-6xl font-medium text-gray-900 mb-2">Counter</Text>
        </View>

        <View className="items-center mb-12">
          <View className="rounded-xl p-8 mb-4">
            <Text className="text-7xl font-light text-black">{count}</Text>
          </View>
          <Text className="text-gray-400 text-xs uppercase tracking-wide">Current Value</Text>
        </View>

        <ActionButtons />

        <TouchableOpacity
          onPress={reset}
          className="mt-4 w-full bg-white/80 hover:bg-white text-gray-700 font-medium py-3.5 px-6 rounded-2xl border border-gray-200/80 hover:border-gray-300/80 transition-all duration-300 shadow-none active:scale-[0.98] active:bg-gray-50/80 flex items-center justify-center gap-2 "
        >
          <RotateCcw size={20} color="#374151" />
          <Text className="text-gray-700 font-medium">Reset Counter</Text>
        </TouchableOpacity>

        <View className="mt-8 pt-8 border-t border-gray-100">
          <View className="flex-row justify-between text-xs text-gray-400">
            <View className="items-center">
              <Text className="text-gray-600 font-medium">
                {count > 0 ? "+" : ""}
                {count}
              </Text>
              <Text className="uppercase tracking-wide">Value</Text>
            </View>
            <View className="items-center">
              <Text className="text-gray-600 font-medium">{Math.abs(count)}</Text>
              <Text className="uppercase tracking-wide">Absolute</Text>
            </View>
            <View className="items-center">
              <Text className="text-gray-600 font-medium">
                {count >= 0 ? "Positive" : "Negative"}
              </Text>
              <Text className="uppercase tracking-wide">Sign</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}



export const ActionButtons = () => {
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

  return (
    <View className="flex-row gap-4 w-full">
      <TouchableOpacity
        onPress={decrement}
        className="flex-1 bg-gray-100/80 hover:bg-gray-100 text-gray-800 font-medium py-3.5 px-6 rounded-2xl transition-all duration-300 ease-out active:scale-[0.98] active:bg-gray-200/80 flex items-center justify-center gap-2 border shadow-none border-gray-200/50 hover:border-gray-300/50"
      >
        <Minus size={20} color="#1f2937" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={increment}
        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3.5 px-6 rounded-2xl transition-all duration-300 ease-out active:scale-[0.98] active:bg-blue-800 flex items-center justify-center gap-2 "
      >
        <Plus size={20} color="#ffffff" />
      </TouchableOpacity>
    </View>
  );
};