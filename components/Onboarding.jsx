import { View, Image, Platform, ScrollView } from "react-native";
import {sliders} from './sliders';
import { styles } from '../body';

export default function Onboarding() {

    return(
        <ScrollView horizontal={true} pagingEnabled={true} style={styles.item__slide}>
            {sliders && sliders.map((item, index) =>
                <View key={index} style={{width:"100%", height:"100%", overflow:"hidden"}}>
                    {Platform.OS === "web" ? <img src={item.image} style={{height:"100%", width:"100%"}} /> : <Image source={item.image} style={{height:"100%", width:"100%"}} />}
                </View>
                )
            }
        </ScrollView>
)}