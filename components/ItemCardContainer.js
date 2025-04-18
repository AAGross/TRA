import { View, Text, TouchableOpacity, Image } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const ItemCardContainer = ({ imageSrc, title, location, data }) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("ItemScreen", { param: data })}
            className="rounded-md border border-gray-300 space-y-2 px-5 py-2 shadow-md bg-white w-[182px] my-2">
            <Image
                source={{ uri: imageSrc }}
                className="w-full h-40 rounded-md object-cover"
            />

            {title ? (
                <>
                    <Text className="text-[#1D2088] text-[18px] font-bold">
                        {title?.length > 16 ? `${title.slice(0, 16)}..` : title}
                    </Text>

                    <View className="flex-row items-center space-x-1">
                        <FontAwesome name="map-marker" size={18} color="#1D2088" />
                        <Text className="text-[#1D2088] text-[14px] font-bold">{
                            location?.length > 18 ? `${title.slice(0, 16)}..` : location}
                        </Text>
                    </View>
                </>
            ) : (
                <></>
            )}
        </TouchableOpacity>
    )
}

export default ItemCardContainer