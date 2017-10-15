import {StyleSheet, Dimensions} from 'react-native';

let { height } = Dimensions.get('window');
let box_count = 3;
let box_height = height / box_count;

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column'
  },
  box: {
    height: box_height
  },
  header: {
      flex: .75,
      backgroundColor: '#2196F3',
      paddingTop:20,
      paddingBottom:10,
      flexDirection:'row' 
  },
  body: {
      flex: 10,
      backgroundColor: '#8BC34A'
  },
  footer: {
      flex: .75,
      backgroundColor: '#e3aa1a'
  },
  appFooter:{
      fontFamily:'Chalkduster',
      color:'#fff',
      fontSize: 10,
      textAlign:'center',
      fontWeight:'bold',
      paddingTop:6,
      flex:1 
  },
  appTitle:{
      fontFamily:'Chalkduster',
      color:'#fff',
      fontSize: 26,
      textAlign:'center',
      fontWeight:'bold',
      flex:1                
  },
  button: {
    fontFamily:'Chalkduster',
    color:'#fff',
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    fontSize: 18,
    backgroundColor: '#2196F3',
    shadowColor: 'rgba(0,0,0,1)',
    shadowOpacity: 0.2,
    shadowOffset: { width: 4, height: 4 },
    shadowRadius: 5,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10
  },
  imageBox: {
    position: 'relative',
    flex: 1,
    backgroundColor: '#333',
  },
  box2: {
    backgroundColor: 'green'
  },
  box3: {
    backgroundColor: 'orange'
  },
  two: {
    flex: 2
  },
  overlayLoader: {
    position: 'absolute',
    zIndex: 100,
    bottom: 0
  },
  uploadedImage:{
    flex: 1.5, 
    alignItems: 'center', 
    justifyContent: 'center',
    marginBottom: 30
  },
  buttonRow:{
    flex: .5
  },
  classification:{
    fontSize: 46,
    flex: 1,
    textAlign:'center',
    fontWeight:'bold',
    paddingTop: 30,
    fontFamily:'Chalkduster',
    color:'#fff',
  }
});