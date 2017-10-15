import React, { Component } from 'react';
import {StyleSheet, View, Dimensions, Text, Button, TouchableOpacity, Image, ActivityIndicator, StatusBar} from 'react-native';
import { Font, AppLoading, Asset } from 'expo';
import Exponent, { Constants, ImagePicker, registerRootComponent } from 'expo';
import {uploadImageAsync} from './api/predict.api';
import {styles} from './assets/styles';
import {UploadOverlay} from './components/UploadOverlay';
import {UploadedImage} from './components/UploadedImage';
import * as Progress from 'react-native-progress';
import * as Animatable from 'react-native-animatable';
import { Ionicons } from '@expo/vector-icons';


export default class CatDogHotDog extends Component {

  constructor(props) {
    super(props);
    this.state = {
        isReady: false,
        image: null,
        uploading: false,
        size : 25,
        label : null,
        weights: {
          cat: 0,
          dog: 0,
          hotdog: 0
        }
    };

  } 

  render() {
    console.log(this.state);

    return (
        <View animation="fadeIn" style={styles.container}>
            <View style={[styles.box, styles.header]}>
              <Animatable.Text animation="fadeInDown" style={styles.appTitle}>Cat, Dog, or Hotdog?</Animatable.Text>
            </View>
            <View style={[styles.box, styles.body]}>
              <View style={styles.row}>
                <View style={[styles.imageBox, styles.box2]}> 
                  <Animatable.Image animation="bounceInDown" resizeMode={Image.resizeMode.cover} source={require('./assets/images/cat.png')} />
                  <Progress.Bar borderWidth={0} style={styles.overlayLoader} progress={Number.parseFloat(this.state.weights.cat, 10)} />
                </View>
                <View style={[styles.imageBox]}>
                  <Animatable.Image animation="bounceInDown" resizeMode={Image.resizeMode.cover} source={require('./assets/images/dog.png')} />
                  <Progress.Bar borderWidth={0} style={styles.overlayLoader} progress={Number.parseFloat(this.state.weights.dog, 10)} />
                </View>
                <View style={[styles.imageBox, styles.box3]}>
                  <Animatable.Image animation="bounceInDown" resizeMode={Image.resizeMode.cover} source={require('./assets/images/hot-dog.png')} />
                  <Progress.Bar borderWidth={0} style={styles.overlayLoader} progress={Number.parseFloat(this.state.weights.hotdog, 10)} />
                </View>
              </View>     
              <View style={styles.row}>
                <Animatable.Text style={styles.classification} animation={this.state.label ? 'tada' : undefined}>{this.state.label}</Animatable.Text>
              </View>       
              <View style={[styles.row, styles.uploadedImage]}>
               <UploadedImage image={this.state.image} />   
              </View>
              <View style={[styles.row,styles.buttonRow]}>
                <TouchableOpacity>
                  <Text onPress={this.takePhoto} style = {styles.button}>
                    Take Photo <Ionicons name="md-camera"/> 
                  </Text>
                </TouchableOpacity>    
                <TouchableOpacity>
                  <Text onPress={this.pickImage} style = {styles.button}>
                     Pick Photo <Ionicons name="md-albums"/> 
                  </Text>
                </TouchableOpacity>
              </View>

              <UploadOverlay uploading={this.state.uploading} />
            </View>

            <View style={[styles.box, styles.footer]}>
              <Text style={styles.appFooter}>
                by Dan M, https://github.com/DansProjects
              </Text>
            </View>
        </View>
    );
  }

  takePhoto = async () => {
    let pickerResult = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    this.handleImagePicked(pickerResult);
  };

  pickImage = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    this.handleImagePicked(pickerResult);
  };

  handleImagePicked = async pickerResult => {
    let uploadResponse, uploadResult;

    try {
      this.setState({ image: pickerResult.uri, uploading: true });

      if (!pickerResult.cancelled) {
        uploadResponse = await uploadImageAsync(pickerResult.uri);
        uploadResult = await uploadResponse.json();
        console.log(uploadResult);
        this.setState({ 
          ...uploadResult
        });
      }
    } catch (e) {
      console.log({ uploadResponse });
      console.log({ uploadResult });
      console.log({ e });
      alert('Upload failed, sorry :(');
    } finally {
      this.setState({ uploading: false });
    }
  };

}