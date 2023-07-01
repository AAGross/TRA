import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native';
import { Avatar } from '../assets';

const Discover = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);
    return (
        <SafeAreaView className="flex-1 bg-[#F2DE02] relative">
            <View className="flex-row items-center justify-between mt-16 px-8">
                <View>
                    <Text className="text-[40px] text-[#1D2088] font-bold">Explore</Text>
                    <Text className="text-[36px] text-[#1D2088]">the World</Text>
                </View>

                <View className="w-24 h-24 bg-gray-400 rounded-full items-center justify-center shadow-lg">
                    <Image
                        source={Avatar}
                        className="w-full h-full rounded-full object-cover"
                    />
                </View>
            </View>

            <View className="flex-row items-center bg-white mx-4 rounded-xl py-1 px-4 mt-4 shadow-lg">
                <GooglePlacesAutocomplete
                    GooglePlacesDetailsQuery={{ fields: "geometry" }}
                    placeholder='Search'
                    fetchDetails={true}
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        console.log(details?.geometry?.viewport);
                    }}
                    query={{
                        key: 'AIzaSyBAv1P8z0Da7xFBWag8d1FPZg5h5wyybAg',
                        language: 'en',
                    }}
                />
            </View>
        </SafeAreaView>
    )
}

export default Discover