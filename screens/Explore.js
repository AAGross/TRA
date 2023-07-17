import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native';
import { Attractions, Avatar, Hotels, NotFound, Restaurants } from '../assets';
import MenuContainer from '../components/MenuContainer';
import { FontAwesome } from '@expo/vector-icons';
import ItemCardContainer from '../components/ItemCardContainer';
import { getPlaceData } from '../api';

const Explore = () => {
    const navigation = useNavigation();

    const [type, setType] = useState("restaurants")
    const [isLoading, setIsLoading] = useState(false)
    const [mainData, setMainData] = useState([])
    const [coordinates, setCoordinates] = useState({
        bl_lat: null,
        bl_lng: null,
        tr_lat: null,
        tr_lng: null
    });

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    useEffect(() => {
        setIsLoading(true);
        getPlaceData(coordinates.bl_lat, coordinates.bl_lng, coordinates.tr_lat, coordinates.tr_lng, type)
            .then(data => {
                if (data && data.length > 0) {
                    setMainData(data);
                } else {
                    console.log('No results found for this type');
                }
                setInterval(() => {
                    setIsLoading(false);
                }, 2000)
            })
    }, [coordinates.bl_lat, coordinates.bl_lng, coordinates.tr_lat, coordinates.tr_lng, type])

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
                    onPress={(_data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        console.log(details?.geometry?.viewport);
                        if (details) {
                            setCoordinates({
                                bl_lat: details?.geometry?.viewport?.southwest?.lat,
                                bl_lng: details?.geometry?.viewport?.southwest?.lng,
                                tr_lat: details?.geometry?.viewport?.northeast?.lat,
                                tr_lng: details?.geometry?.viewport?.northeast?.lng
                            });
                        }
                    }}
                    query={{
                        key: 'AIzaSyBAv1P8z0Da7xFBWag8d1FPZg5h5wyybAg',
                        language: 'en',
                    }}
                />
            </View>

            {/* menu */}
            {isLoading ? (
                <View className="flex-1 items-center justify-center">
                <ActivityIndicator size="large" color="#1D2088" />
            </View>
             ) : (
                <ScrollView>
                    <View className=" flex-row items-center justify-between px-8 mt-8">
                        <MenuContainer
                            key={"hotels"}
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
                        <View className="flex-row items-center justify-center mt-8">
                            <Text className="mt-4 text-[#1D2088] text-[24px] font-bold">Heroic Suggestions</Text>
                        </View>
                        <View className="px-4 mt-6 flex-row items-center justify-evenly flex-wrap">
                            {mainData?.length > 0 ? (
                                <>
                                    {mainData?.map((data, i) => (
                                        <ItemCardContainer
                                            key={i}
                                            imageSrc={
                                                data?.photo?.images?.medium?.url ?
                                                    data?.photo?.images?.medium?.url :
                                                    "https://cdnb.artstation.com/p/assets/images/images/014/881/967/large/wynter-johnston-asset.jpg"
                                            }
                                            title={data?.name}
                                            location={data?.location_string}
                                            data={data}
                                        />
                                    ))}

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
             )
            }
        </SafeAreaView>
    )
}

export default Explore