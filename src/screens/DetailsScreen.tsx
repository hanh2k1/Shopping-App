import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useRef, useState } from "react";
import { RootStackScreenProps } from "../navigators/RootNavigator";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import Icons from "@expo/vector-icons/MaterialIcons";
import { useTheme } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import BottomSheet from "@gorhom/bottom-sheet";

const SIZES = ["XS", "S", "M", "L", "XL", "XXL", "3XL"];

const DetailsScreen = ({
  navigation,
  route: {
    params: { id },
  },
}: RootStackScreenProps<"Details">) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const { colors } = useTheme();
  const insets = useSafeAreaInsets();
  const [count, setCount] = useState(1);
  const [size, setSize] = useState(SIZES[0]);

  return (
    <View style={{ flex: 1 }}>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
        }}
        style={{ flex: 1 }}
      />
      <SafeAreaView
        edges={["top"]}
        style={{ position: "absolute", top: 0, left: 0, right: 0 }}
      >
        <StatusBar style="light" />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 20,
            gap: 8,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              width: 52,
              aspectRatio: 1,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 52,
              borderWidth: 1,
              borderColor: "#fff",
            }}
          >
            <Icons name="arrow-back" size={24} color={"#fff"} />
          </TouchableOpacity>
          <View style={{ flex: 1 }} />
          <TouchableOpacity
            style={{
              width: 52,
              aspectRatio: 1,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 52,
              borderWidth: 1,
              borderColor: "#fff",
            }}
          >
            <Icons name="favorite" size={24} color={"#fff"} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 52,
              aspectRatio: 1,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 52,
              borderWidth: 1,
              borderColor: "#fff",
            }}
          >
            <Icons name="shop" size={24} color={"#fff"} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <BottomSheet
        detached
        snapPoints={[64, 400]}
        index={0}
        style={{ marginHorizontal: 24 }}
        containerStyle={{padding: 0}}
        bottomInset={insets.bottom + 20}
        backgroundStyle={{
          borderRadius: 32,
          backgroundColor: colors.background,
        }}
      >
        <View style={{ padding: 16, gap: 8, flex:1}}>
          <Text style={{ fontSize: 20, fontWeight: "600", color: colors.text }}>
            PUMA Everyday Hussle
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <View style={{ flex: 1 }}>
              <View style={{ flexDirection: "row", gap: 2 }}>
                {new Array(5).fill("").map((_, i) => (
                  <Icons
                    key={i}
                    name={i < 3 ? "star" : "star-border"}
                    color="#facc15"
                    size={20}
                  />
                ))}
              </View>
              <Text style={{ fontSize: 14, color: colors.text, opacity: 0.5 }}>
                3.0 ( 250K Reviews)
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 6,
                backgroundColor: colors.primary,
                padding: 6,
                borderRadius: 100,
              }}
            >
              <TouchableOpacity
                onPress={() => setCount((count) => Math.max(1, count - 1))}
                style={{
                  backgroundColor: colors.card,
                  width: 32,
                  aspectRatio: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 32,
                }}
              >
                <Icons name="remove" size={20} color={colors.text} />
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                  color: colors.background,
                }}
              >
                {count}
              </Text>

              <TouchableOpacity
                onPress={() => setCount((count) => Math.min(15, count + 1))}
                style={{
                  backgroundColor: colors.card,
                  width: 32,
                  aspectRatio: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 32,
                }}
              >
                <Icons name="add" size={20} color={colors.text} />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{
                  flex: 1,
                  fontSize: 16,
                  fontWeight: "600",
                  color: colors.text,
                  textTransform: "uppercase",
                }}
              >
                Model is 6'1'', Size M
              </Text>
              <Text style={{ color: colors.text, opacity: 0.5 }}>
                {" "}
                Size guide
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                gap: 8,
                marginTop: 6,
              }}
            >
              {SIZES.map((s, i) => (
                <TouchableOpacity
                  key={i}
                  onPress={() => setSize(s)}
                  style={{
                    width: 40,
                    height: 40,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: s === size ? colors.primary : colors.card,
                    borderRadius: 44,
                  }}
                >
                  <Text
                    style={{
                      color: s === size ? "#fff" : colors.text,
                      fontWeight: "600",
                      fontSize: 16,
                    }}
                  >
                    {s}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                marginBottom: 6,
                color: colors.text,
              }}
            >
              Description
            </Text>
            <Text style={{color: colors.text, opacity: 0.75}}
            numberOfLines={3}
            >
              {" "}
              Follow the instructions to embed the icon font in your site and
              learn how to style your icons using CSS.
            </Text>
          </View>
          <View style={{flex:1}}/>
          <View style={{flexDirection:'row', alignItems:'center', gap:12}}>
            <View style={{flex:1}}>
              <Text style={{color:colors.text, opacity: 0.75}}>Total</Text>
              <Text style={{color: colors.text, fontSize: 18, fontWeight:'600'}}>${(25000).toLocaleString() }</Text>
            </View>
            <TouchableOpacity
          style={{
            backgroundColor: colors.primary,
            height: 64,
            borderRadius: 64,
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            flexDirection:'row',
            gap: 12,
            padding:12
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              color: colors.background,
              paddingHorizontal: 16,
            }}
          >
            Add to Cart
          </Text>
          <View
            style={{
              backgroundColor: colors.card,
              width: 40,
              aspectRatio: 1,
              borderRadius: 40,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icons name="east" size={24} color={colors.text} />
          </View>
        </TouchableOpacity>
          </View>
        </View>
      </BottomSheet>
    </View>
  );
};

export default DetailsScreen;