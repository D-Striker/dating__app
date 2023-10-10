import { View, Image, Platform, ScrollView, Text } from "react-native";
import {sliders} from './sliders';
import { styles } from '../body';

export default function Onboarding() {

    return(
        <View style={styles.item__slide}>
        <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false} >
            {sliders && sliders.map((item, index) =>
                <View key={index}  >
                    {Platform.OS === "web" ? <img src={item.image} style={{height:"100%", width:"auto"}} /> : <Image source={item.image} style={{width:283, height:"90%", borderRadius:25}} />}
                    <Text style={{textAlign:'center',letterSpacing:2,textTransform: 'uppercase',fontWeight: 'bold',}} >{item.name}</Text>
                </View>
                )
            }
        </ScrollView>
            </View>
)}
