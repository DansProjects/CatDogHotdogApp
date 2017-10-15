import React, { Component } from 'react';
import {StyleSheet, View, ActivityIndicator, Image} from 'react-native';

export const UploadedImage = (props) => {

  if (props.image) {
    let image = props.image;
    return (
      <View
        style={{
          marginTop: 5,
          width: 220,
          borderRadius: 3,
          elevation: 2,
          shadowColor: 'rgba(0,0,0,1)',
          shadowOpacity: 0.2,
          shadowOffset: { width: 4, height: 4 },
          shadowRadius: 5,
        }}>
        <View
          style={{
            borderTopRightRadius: 3,
            borderTopLeftRadius: 3,
            overflow: 'hidden',
          }}>
          <Image source={{ uri: image }} style={{ width: 220, height: 220 }} />
        </View>
      </View>
    );  
  }else{
    return null;
  }
};