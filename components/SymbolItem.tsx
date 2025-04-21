import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { SFSymbol, SymbolView } from "expo-symbols";
import { Colors } from "@/constants/Colors";
import { useThemeColor } from "@/hooks/useThemeColor";

const SymbolItem = ({ symbol }: { symbol: SFSymbol }) => {
  const color = useThemeColor(
    { light: Colors.light.text, dark: Colors.dark.text },
    "text"
  );
  return (
    <Link href={{ pathname: "/symbol-lab", params: { symbol } }} asChild>
      <TouchableOpacity>
        <SymbolView
          name={symbol}
          tintColor={color}
          style={{ marginRight: 12 }}
          size={30}
        />
      </TouchableOpacity>
    </Link>
  );
};

export default SymbolItem;

const styles = StyleSheet.create({});
