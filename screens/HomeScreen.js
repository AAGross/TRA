import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { HeroImage } from '../assets';

const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <SafeAreaView className="bg-[#F2DE02] flex-1 relative">
            {/* section 1 */}
            <View className="flex-row px-6 mt-16 items-center space-x-2">
                <View className="w-16 h-16 bg-[#C11B18] rounded-full items-center justify-center">
                    <Text className="text-white text-3xl font-semibold">GO</Text>
                </View>
                <Text className="text-[#1D2088] text-3xl font-semibold outline- ">BEYOND</Text>
            </View>

            {/* section 2 */}
            <View className="px-6 mt-2 space-y-3">
                <Text className="text-[#1D2088] text-[42px] font-extrabold">PLUS ULTRA!!!</Text>
                <Text className="text-[#1D2088] text-[38px] font-bold">Enjoy Your Trip, Hero</Text>

                <Text className="text-[#1D2088] text-base font-medium">
                    Travel experience broadens a hero's perspective, fuels empathy, and 
                    enhances cultural understanding.
                </Text>
            </View>
            {/* section circle */}
            <View className="w-[500px] h-[500px] bg-[#C11B18] rounded-full absolute -bottom-28 -left-10"></View>

            {/* image container */}
            <View className="flex-1 relative items-center justify-center">
                <Image source={HeroImage} className="w-96 h-96 object-cover mt-36"/>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen