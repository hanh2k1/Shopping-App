import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { ReactNode, useState } from "react";
import { useTheme } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icons from "@expo/vector-icons/MaterialIcons";
import PriceRangeSelector from "../components/PriceRangeSelector"


const MIN_PRICE = 0;
const MAX_PRICE = 500;
const COLORS = [
  {
    color: "red",
    label: "red",
    itemCount: 4,
  },
  {
    color: "blue",
    label: "blue",
    itemCount: 2,
  },
  {
    color: "violet",
    label: "violet",
    itemCount: 6,
  },
  {
    color: "yellow",
    label: "yellow",
    itemCount: 12,
  },
];
const SLEEVES = [
  {
    id: "sortsleeve",
    label: "Sort Sleeve",
    itemCount: 10,
  },
  {
    id: "longsleeve",
    label: "Long Sleeve",
    itemCount: 10,
  },
  {
    id: "sleeve",
    label: "Sleeve",
    itemCount: 10,
  },
];

function FilterView() {
  const [startPrice, setStartPrice] = useState(50);
  const [endPrice, setEndPrice] = useState(250);
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1,  }}>
        <View style={{paddingVertical:24, gap: 24}}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 24,
          }}
        >
          <Text style={{ flex: 1, fontSize: 20, fontWeight: "700" }}>
            Filter
          </Text>
          <TouchableOpacity>
            <Text>Reset</Text>
          </TouchableOpacity>
        </View>
        <PriceRangeSelector
          minPrice={0}
          maxPrice={MAX_PRICE}
          startPrice={startPrice}
          endPrice={endPrice}
          onStartPriceChange={setStartPrice}
          onEndPriceChange={setEndPrice}
         />
          <View></View>
        </View>
        <View // view category sprort
          style={{ paddingHorizontal: 24 }}
        >
          <Text style={{ fontSize: 12, fontWeight: "600", marginBottom: 12 }}>
            Sports
          </Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 12 }}>
            {new Array(7).fill("").map((_, i) => {
              const isSelected = i === 0;
              return <Chip itemCount={i} label="Item" isSelected={i === 0} />;
            })}
          </View>
        </View>
        <View // Color category sprort
          style={{ paddingHorizontal: 24 }}
        >
          <Text style={{ fontSize: 12, fontWeight: "600", marginBottom: 12 }}>
            Color
          </Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 12 }}>
            {COLORS.map((item, i) => {
              const isSelected = i === 0;
              return (
                <Chip
                  key={item.label}
                  itemCount={item.itemCount}
                  label={item.label}
                  left={
                    <View
                      style={{
                        backgroundColor: item.color,
                        width: 8,
                        height: 8,
                        borderRadius: 10,
                      }}
                    />
                  }
                  isSelected={i === 0}
                />
              );
            })}
          </View>
        </View>
        <View // SLEEVES category sprort
          style={{ paddingHorizontal: 24 }}
        >
          <Text style={{ fontSize: 12, fontWeight: "600", marginBottom: 12 }}>
            Sleeves
          </Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 12 }}>
            {SLEEVES.map((item, i) => {
              return (
                <Chip
                key={item.id}
                  itemCount={item.itemCount}
                  label={item.label}
                  isSelected={i === 0}
                />
              );
            })}
          </View>
        </View>
      </ScrollView>
      <View style={{ padding: 24, paddingBottom: 24 + insets.bottom }}>
        <TouchableOpacity
          style={{
            backgroundColor: theme.colors.primary,
            height: 64,
            borderRadius: 64,
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              color: theme.colors.background,
            }}
          >
            Apply filters
          </Text>
          <View
            style={{
              backgroundColor: theme.colors.card,
              width: 40,
              aspectRatio: 1,
              borderRadius: 40,
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              top:12,
              right:12,
              bottom:12,
            }}
          >
            <Icons name="east" size={24} color={theme.colors.text} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default FilterView;



const Chip = ({
  isSelected,
  label,
  itemCount,
  left,
}: {
  isSelected: boolean;
  label: String;
  itemCount: number;
  left?: ReactNode;
}) => {
  const theme = useTheme();

  return (
    <View
      style={{
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 100,
        backgroundColor: isSelected
          ? theme.colors.text
          : theme.colors.background,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      {!!left && <View style={{ marginRight: 4 }}>{left}</View>}
      <Text
        style={{
          fontSize: 14,
          fontWeight: "600",
          color: isSelected ? theme.colors.background : theme.colors.text,
        }}
      >
        {label} [{itemCount}]
      </Text>
    </View>
  );
};
