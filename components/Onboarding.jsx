import { View, Image, Platform, ScrollView } from "react-native";
import {sliders} from './sliders';
import { styles } from '../body';

export default function Onboarding() {

    return(
        <ScrollView horizontal={true} pagingEnabled={true} style={styles.item__slide}>
            {sliders && sliders.map((item, index) =>
                <View key={index} style={{overflow:"hidden"}}>
                    {Platform.OS === "web" ? <img src={item.image} style={{ width: 400}}/> : 
                    <Image resizeMode="contain" source={item.image} style={{minWidth: '100%',}} />}
                </View>
                )
            }
        </ScrollView>
)}

