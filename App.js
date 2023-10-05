import { Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Alert, Image } from 'react-native';
import { styles } from './body';

export default function App() {
  const names = {
    name1: 'Виктория',
    name2: 'Анжелика',
    name3: 'Светлана',
  } 
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Здесь будет приложение для знакомств!!!</Text>
      <View style={styles.block__1}>
        <Text style={styles.text__title}>{names.name1}</Text>
        <Image style={styles.avatar} source={require('./img/9.jpg')}/>
        <Pressable 
          onPress={() => Alert.alert('Тут что-то потом произойдет')} 
          style={styles.button__1}>
          <Text style={styles.text__button}>Начать</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}


