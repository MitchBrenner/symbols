import { ScrollView, StyleSheet, Switch, Text, View } from "react-native";
import React, { useState } from "react";
import {
  AnimationType,
  SFSymbol,
  SymbolType,
  SymbolView,
  SymbolWeight,
} from "expo-symbols";
import { RouteProp, useRoute } from "@react-navigation/native";
import { ThemedText } from "@/components/ThemedText";
import { Stack } from "expo-router";
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import WheelColorPicker from "react-native-wheel-color-picker";

const SymbolLab = () => {
  const route = useRoute<RouteProp<{ params: { symbol: SFSymbol } }>>();
  const symbolName = route.params.symbol;
  const [selectedWeight, setSelectedWeight] = useState<string>("");
  const [selectedVariant, setSelectedVariant] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedDirection, setSelectedDirection] = useState<string>("up");
  const [repeatAnimation, setRepeatAnimation] = useState<boolean>(false);
  const [selectedAnimation, setSelectedAnimation] =
    useState<string>("unspecified");
  const [color1, setColor1] = useState<string>("");
  const [color2, setColor2] = useState<string>("");

  const weights = [
    "black",
    "heavy",
    "bold",
    "medium",
    "light",
    "thin",
    "ultraLight",
  ];

  const types = ["monochrome", "hierrarchical", "palette", "multicolor"];

  return (
    <ScrollView>
      <Stack.Screen options={{ headerTitle: symbolName }} />
      <View style={{ padding: 16, gap: 12 }}>
        <SymbolView
          name={symbolName}
          size={250}
          style={{
            alignSelf: "center",
          }}
          weight={selectedWeight as SymbolWeight}
          type={selectedVariant as SymbolType}
          colors={[color1, color2]}
          tintColor={selectedVariant === "palette" ? null : color1}
          animationSpec={{
            effect: {
              type: selectedAnimation as AnimationType,
              direction: selectedDirection as "up" | "down",
              // wholeSymbol: true,
            },
            repeating: repeatAnimation,
            // repeatCount: 10,
            // speed: 3000,
          }}
        />
        <>
          <ThemedText type="defaultSemiBold">Weight</ThemedText>
          <SegmentedControl
            values={weights}
            selectedIndex={weights.length - 1}
            onChange={(event) => setSelectedWeight(event.nativeEvent.value)}
          />
        </>
        <>
          <ThemedText type="defaultSemiBold">Variant</ThemedText>
          <SegmentedControl
            values={types}
            selectedIndex={0}
            onChange={(event) => setSelectedVariant(event.nativeEvent.value)}
          />
        </>
        <View style={{ flexDirection: "row", gap: 16, marginBottom: 10 }}>
          <WheelColorPicker
            color={selectedColor}
            onColorChange={(color) => setColor1(color)}
            sliderHidden={false}
            swatches={false}
          />
          {selectedVariant === "palette" && (
            <WheelColorPicker
              color={selectedColor}
              onColorChange={(color) => setColor2(color)}
              sliderHidden={false}
              swatches={false}
            />
          )}
        </View>

        <>
          <ThemedText type="defaultSemiBold">Animation</ThemedText>
          <SegmentedControl
            values={["bounce", "pulse", "scale", "none"]}
            selectedIndex={3}
            onChange={(event) => setSelectedAnimation(event.nativeEvent.value)}
          />
        </>
        {selectedAnimation === "scale" && (
          <>
            <ThemedText type="defaultSemiBold">Scale</ThemedText>
            <SegmentedControl
              values={["up", "down"]}
              selectedIndex={0}
              onChange={(event) =>
                setSelectedDirection(event.nativeEvent.value)
              }
            />
          </>
        )}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 16,
            marginTop: 10,
          }}
        >
          <ThemedText type="defaultSemiBold">Repeat</ThemedText>
          <Switch
            value={repeatAnimation}
            onValueChange={(value) => setRepeatAnimation(!repeatAnimation)}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default SymbolLab;

{
  /* const styles = StyleSheet.create({}); */
}
