import React from "react";
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  ScrollView,
  TextInput
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Images from './images'

export default function App() {
  return (
    <SafeAreaView>
      {/* heading */}
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          marginTop: 50,
          marginHorizontal: 20
        }}
      >
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Text style={{
            marginRight: 20,
            fontFamily: "sans-serif",
            fontWeight: "bold",
            fontSize: 20
          }}>Course</Text>
          <Ionicons 
            name="bar-chart" 
            size={24} 
            color="#f5024b" 
          />
        </View>
        <Ionicons
          name="ellipsis-vertical-circle-outline"
          size={24}
          color="black"
        />
      </View>

          {/* search */}

          <View style={{
            marginHorizontal: 20,
            marginTop: 20
          }}>
            <Text style={{
              fontWeight:  "bold",
              fontFamily: "sans-serif",
              fontSize: 25
            }}>Ready to learn?</Text>
          </View>

          <View style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "row",
            marginHorizontal: 20,
            marginTop: 10,
            backgroundColor: "#020a63",
            padding: 10,
            borderRadius: 12,
            color: "white"
          }}>
            <Ionicons style={{
              marginRight: 10
            }} name="search" size={20} color="gray" />
            <TextInput style={{
              flex: 1,
              color: "white"
            }} placeholderTextColor="white" placeholder="Enter to search..." />
          </View>

          <View style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            marginHorizontal: 20,
            marginTop: 15
          }}>
            <Text style={{
              fontSize: 18,
              fontWeight: "bold"
            }}>Categories</Text>
            <Text style={{
              color: "gray"
            }}>See all</Text>
          </View>

          <ScrollView style={{
            marginTop: 20
          }}>
            <View style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              flexWrap: "wrap",
              marginHorizontal: 20,
              marginBottom: 250
            }}>
              
            <Images
              name="HTML 5"
            />
            <Images
              name="CSS 3"
            />
            <Images
              name="JavaScript"
            />
            <Images
              name="React JS"
            />
            <Images
              name="React Native"
            />
            <Images
              name="Node JS"
            />
            <Images
              name="Firebase"
            />
            <Images
              name="Mongo DB"
            />

            </View>
          </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
