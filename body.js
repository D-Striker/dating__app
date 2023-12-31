import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    color: '#333333',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  text__title: {
    marginBottom: 200,
  },
  block__1: {
    backgroundColor: '#dedede',
    minHeight: '20%',
    height: '80%',
    width: '90%',
    textAlign: 'center',
    borderRadius: 25,
    display: 'flex',
    overflow:"hidden",
    justifyContent: 'center',
    alignItems: 'center',
  },
  button__1: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: 50,
    borderRadius: 40,
    backgroundColor: '#6495ED',
    bottom: 20,
    position: 'absolute',
  },
  text__button: {
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: '500',
    letterSpacing: 2,
    fontSize: 24,
  },
  avatar: {
    width: '80%',
    borderRadius: 45,
    height: '80%',
    marginBottom: 80,
  },
  modal:{
    backgroundColor:"#333333",
    width:"80%",
    minHeight: '50%',
    borderRadius: 25,
    marginLeft:"auto",
    marginRight:'auto',
    marginTop:"50%",
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
  },
  modal__button:{
      width:"80%",
      backgroundColor:'#6495ED',
      alignItems:'center',
      height: 50,
      justifyContent:'center',
      borderRadius: 20,
      position:'absolute',
      bottom:20,
  },
  modal__button_text: {
    color: '#f5f5f5',
    letterSpacing:2,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  modal__title:{
      fontSize:20,
      fontWeight:"600",
      marginTop:30,
      color: '#f5f5f5',
  },
  modal__input:{
    borderWidth:1,
    width:"80%",
    height: 45,
    borderRadius:10,
    marginTop:5,
    paddingLeft:16,
    borderColor: '#f5f5f5',
    color:"#fff"
  },
  modal__lable:{
    marginTop:30,
    color: '#f5f5f5',
  },
  item__slide: {
    height: '80%',
    width:'80%',
    overflow: 'hidden',
    borderRadius: 25,
    top: -120,
  },
  modal__container: {
    height: '100%',
    width: '100%',
  }
});
