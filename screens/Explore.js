import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native';
import { Attractions, Avatar, Restaurants } from '../assets';
import MenuContainer from '../components/MenuContainer';
import { Hotels } from '../assets';

const Explore = () => {
    const navigation = useNavigation();

    const [type, setType] = useState("restaurants")

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

            {/* menu */}
            <ScrollView>
                <View className=" flex-row items-center justify-between px-8 mt-8">
                    <MenuContainer
                        key={"hotel"}
                        title="Hotels"
                        imageSrc={Hotels}
                        type={type}
                        setType={setType}
                    />

                    <MenuContainer
                        key={"attractions"}
                        title="Attractions"
                        imageSrc={Attractions}
                        type={type}
                        setType={setType}
                    />

                    <MenuContainer
                        key={"restaurants"}
                        title="Restaurants"
                        imageSrc={Restaurants}
                        type={type}
                        setType={setType}
                    />

                </View>

            </ScrollView>

        </SafeAreaView>
    )
}

export default Explore