import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import * as Animatable from 'react-native-animatable';
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
            <View className="px-6 mt-16 space-y-3">
                <Text className="text-[#1D2088] text-[42px] font-extrabold text-center">PLUS ULTRA!!!</Text>
                <Text className="text-[#1D2088] text-[38px] font-bold text-center">Enjoy Your Trip, Hero</Text>

                <Text className="text-[#1D2088] text-base font-medium text-center">
                    Travel experience broadens a hero's perspective, fuels empathy, and
                    enhances cultural understanding.
                </Text>
            </View>

            {/* section 2 */}
            <View className="mt-14 justify-center items-center space-x-2">
                    <TouchableOpacity onPress={() => navigation.navigate("Explore")}
                    className="w-24 h-24 border-l-2 border-r-2 border-t-8 border-[#C11B18] rounded-full items-center justify-center">
                        <Animatable.View animation={"pulse"} easing="ease-in-out" iterationCount={"infinite"} className="w-20 h-20 bg-[#C11B18] rounded-full items-center justify-center">
                            <Text className="text-white text-[36px] font-semibold">GO</Text>
                        </Animatable.View>
                    </TouchableOpacity>
                <Text className="text-[#1D2088] text-4xl font-semibold">BEYOND</Text>
            </View>

            {/* section circle */}
            <View className="w-[500px] h-[500px] bg-[#C11B18] rounded-full absolute -bottom-28 -left-10"></View>

            {/* image container */}
            <View className="flex-1 relative items-center justify-center">
                <Animatable.Image
                    animation="fadeIn"
                    easing="ease-in-out"
                    source={HeroImage} className="w-96 h-96 object-cover mt-10" />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen