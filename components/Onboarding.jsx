import { View, Image, Platform, ScrollView, Text } from "react-native";
import {sliders} from './sliders';
import { styles } from '../body';

export default function Onboarding() {

    return(
        <View style={styles.item__slide}>
        <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false} >
            {sliders && sliders.map((item, index) =>
<<<<<<< HEAD
                <View key={index} style={{overflow:"hidden"}}>
                    {Platform.OS === "web" ? <img src={item.image} style={{ width: 400}}/> : 
                    <Image resizeMode="contain" source={item.image} style={{minWidth: '100%',}} />}
=======
                <View key={index}  >
                    {Platform.OS === "web" ? <img src={item.image} style={{height:"100%", width:"auto"}} /> : <Image source={item.image} style={{width:283, height:"90%", borderRadius:25}} />}
                    <Text style={{textAlign:'center',letterSpacing:2,textTransform: 'uppercase',fontWeight: 'bold',}} >{item.name}</Text>
>>>>>>> ca91fbb1c8f0e6d4be01a003901c3baca7b3862d
                </View>
                )
            }
        </ScrollView>
<<<<<<< HEAD
)}

=======
            </View>
)}
>>>>>>> ca91fbb1c8f0e6d4be01a003901c3baca7b3862d
