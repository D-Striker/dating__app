import { Pressable, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, Modal } from 'react-native';
import { styles } from './body';
import Onboarding from './components/Onboarding';

export default function App() {

  const [modal, setModal] = useState(false)

  const names = {
    name1: 'Виктория',
    name2: 'Анжелика',
    name3: 'Светлана',
    name4: 'Светлана',
  } 
  return (
    <View style={[styles.container, modal ? {opacity:0.3} : ""]}>
      <Modal 
      animationType='slide'
      visible={modal}
      transparent={true}
      >
        <View
        style={styles.modal}
        >
          <Text style={styles.modal__title}>Авторизация</Text>
          <Text style={styles.modal__lable}>Имя</Text>
          <TextInput style={styles.modal__input} />
          <Text style={styles.modal__lable}>Пароль</Text>
          <TextInput secureTextEntry={true} style={styles.modal__input} />
          <Pressable style={styles.modal__button} onPress={() => setModal(!modal)}>
            <Text style={styles.modal__button_text}>Войти</Text>
          </Pressable>
        </View>
      </Modal>
      <Text style={styles.text}>Здесь будет приложение для знакомств!!!</Text>
      <View style={styles.block__1}>
        <Text style={styles.text__title}>{names.name1}</Text>
        <Onboarding/>
        <Pressable 
          onPress={() => setModal(!modal)} 
          style={styles.button__1}>
          <Text style={styles.text__button}>Начать</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}


