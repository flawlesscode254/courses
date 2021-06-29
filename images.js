import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'

const images = ({ name }) => {
    return (
        <View style={{
            marginBottom: 15
          }}>
            <ImageBackground 
              source={{ uri: "https://images.unsplash.com/photo-1550029402-8ea9bfe19f04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" }}
              style={{
                width: 150,
                height: 150,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
              imageStyle={{
                borderRadius: 12
              }}
              >
                <View style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  paddingHorizontal: 20,
                  paddingVertical: 6,
                  borderRadius: 12
                }}>
                  <Text style={{
                    fontWeight: "bold"
                  }}>{name}</Text>
                </View>
            </ImageBackground>
          </View>
    )
}

export default images

const styles = StyleSheet.create({})
