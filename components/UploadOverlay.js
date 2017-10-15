import React, { Component } from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';

export const UploadOverlay = (props) => {
  if (props.uploading) {
    return (
      <View
        style={[
          StyleSheet.absoluteFill,
          {
            backgroundColor: 'rgba(0,0,0,0.4)',
            alignItems: 'center',
            justifyContent: 'center',
          },
        ]}>
        <ActivityIndicator color="#fff" animating size="large" />
      </View>
    );
  }else{
    return null;
  }
};

export default UploadOverlay;