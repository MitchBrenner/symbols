import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { SFSymbol, SymbolView } from "expo-symbols";

const SymbolItem = ({ symbol }: { symbol: SFSymbol }) => {
  return (
    <Link href={{ pathname: "/symbol-lab", params: { symbol } }} asChild>
      <TouchableOpacity>
        <SymbolView
          name={symbol}
          tintColor={"black"}
          style={{ marginRight: 12 }}
          size={30}
        />
      </TouchableOpacity>
    </Link>
  );
};

export default SymbolItem;

const styles = StyleSheet.create({});
