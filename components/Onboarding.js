import { View, Image, Platform } from "react-native";
import {sliders} from './sliders';
import { styles } from '../body';

export default function Onboarding() {

    return(
        <>
            {sliders && sliders.map((item, index) =>
                <View key={index} style={styles.item__slide}>
                    {Platform.OS === "web" ? <img src={item.image}/> : <Image source={item.image}/>}
                </View>
                )
            }
        </>
)}