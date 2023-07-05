import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const MenuContainer = ({ title, imageSrc, type, setType }) => {
    return (
        <TouchableOpacity className="item-center justify-center">
            <View className={'w-20 h-20 items-center justify-center'}>
                <Image
                    source={imageSrc}
                    className="w-full h-full object-contain"
                />
            </View>
            <Text className="text-[#1D2088] text-lg font-semibold text-center">{title}</Text>

        </TouchableOpacity>
    )
}

export default MenuContainer