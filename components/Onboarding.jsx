import { View, Image, Platform, ScrollView,  } from "react-native";
import {sliders} from './sliders';
import { styles } from '../body';

export default function Onboarding() {

    return(
        <View style={styles.item__slide}>
        <ScrollView horizontal={true} pagingEnabled={true} >
            {sliders && sliders.map((item, index) =>
                <View key={index}  >
                    {Platform.OS === "web" ? <img src={item.image} style={{height:"100%", width:"auto"}} /> : <Image source={item.image} style={{width:283}} />}
                </View>
                )
            }
        </ScrollView>
            </View>
)}