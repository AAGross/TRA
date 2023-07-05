import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native';
import { Attractions, Avatar, Hotels, NotFound, Restaurants } from '../assets';
import MenuContainer from '../components/MenuContainer';
import { FontAwesome } from '@expo/vector-icons';
import ItemCardContainer from '../components/ItemCardContainer';

const Explore = () => {
    const navigation = useNavigation();

    const [type, setType] = useState("restaurants")
    const [isLoading, setIsLoading] = useState(false)
    const [mainData, setMainData] = useState({})

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
            {isLoading ? <View className="flex-1 items-center justify-center">
                <ActivityIndicator size="large" color="#1D2088" />
            </View> :
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

                    <View>
                        <View className="flex-row items-center justify-between px-4 mt-8">
                            <Text className="text-[#1D2088] text-[24px] font-bold">Heroic Suggestions</Text>
                            <TouchableOpacity className="flex-row items-center justify-center space-x-2">
                                <Text className="text-[#1D2088] text-[20px] font-bold">
                                    Explore
                                </Text>
                                <FontAwesome name="long-arrow-right" size={20} color="#1D2088" />
                            </TouchableOpacity>
                        </View>
                        <View className="px-4 mt-8 flex-row items-center justify-evenly flex-wrap">
                            {mainData?.length > 0 ? (
                                <>
                                    <ItemCardContainer
                                        key={"101"}
                                        imageSrc={"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"}
                                        title="Something very loooong"
                                        location="Doha"
                                    />
                                    <ItemCardContainer
                                        key={"102"}
                                        imageSrc={"https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_1280.jpg"}
                                        title="Sample"
                                        location="Qatar"
                                    />
                                </>
                            ) : (
                                <>
                                    <View className="w-full h-[400px] items-center space-y-4 justify-center">
                                        <Image source={NotFound}
                                            className="w-32 h-32 object-cover"
                                        />
                                        <Text className="text-[#C11B18] text-2xl font-semibold">
                                    A Villain Was Here...
                                </Text>
                                    </View>
                                </>
                            )}
                        </View>
                    </View>
                </ScrollView>
            }

        </SafeAreaView >
    )
}

export default Explore