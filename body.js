import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
    height: '60%',
    width: '90%',
    textAlign: 'center',
    borderRadius: 25,
    display: 'flex',
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
    backgroundColor:"#f2f2f2",
    width:"80%",
    height:"80%",
    borderRadius:10,
    marginLeft:"auto",
    marginRight:'auto',
    marginTop:"20%",
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
  },
  modal__button:{
      width:"40%",
      backgroundColor:'#6495ED',
      alignItems:'center',
      height:"7.5%",
      justifyContent:'center',
      borderRadius:10,
      position:'absolute',
      bottom:20,
  },
  modal__title:{
      fontSize:20,
      fontWeight:"600",
      marginTop:30
  },
  modal__input:{
    borderWidth:1,
    width:"80%",
    borderRadius:10,
    marginTop:5,
    paddingLeft:16
  },
  modal__lable:{
    marginTop:30,

  }
});
