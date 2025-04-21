import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useMemo, useState } from "react";
import { Stack } from "expo-router";
import { symbolsDB } from "@/symbolsDB";
import SymbolItem from "@/components/SymbolItem";

// 22:41

const Page = () => {
  const [search, setSearchText] = useState<string>("");
  const filteredSymbols = useMemo(() => {
    return (
      symbolsDB
        //   .slice(0, 500)
        .filter((symbol) =>
          symbol.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )
    );
  }, [search]);

  return (
    <>
      <Stack.Screen
        options={{
          title: "Symbols Lab 🧪",
          headerSearchBarOptions: {
            onChangeText: (event) => {
              setSearchText(event.nativeEvent.text);
            },
          },
        }}
      />
      <SafeAreaView>
        <FlatList
          data={filteredSymbols.slice(0, 500)}
          renderItem={({ item, index }) => (
            <SymbolItem key={index} symbol={item} />
          )}
          numColumns={9}
          contentContainerStyle={{
            padding: 12,
            gap: 20,
          }}
        />
      </SafeAreaView>
    </>
  );
};

export default Page;

const styles = StyleSheet.create({});
