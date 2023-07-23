import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome, FontAwesome5, MaterialIcons } from '@expo/vector-icons'

const ItemScreen = ({ route }) => {
    const navigation = useNavigation()

const data = route?.params?.param
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [])

    return (
        <SafeAreaView className="flex-1 bg-[#F2DE02]">
            <ScrollView className="flex-1 px-4 py-6">
                <View className="relative bg-[#F2DE02] shadow-lg">
                    <Image
                        source={
                            {
                                uri:
                                    data?.photo?.images?.large?.url ?
                                        data?.photo?.images?.large?.url :
                                        "https://cdnb.artstation.com/p/assets/images/images/014/881/967/large/wynter-johnston-asset.jpg"
                            }
                        }
                        className="w-full h-72 object-cover rounded-2xl mt-6"
                    />

                    <View className="absolute flex-row inset-x-0 top-7 justify-between px-2">
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Explore")}
                            className="w-12 h-12 rounded-md items-center justify-center bg-white">
                            <FontAwesome5 name="chevron-left" size={34} color="#1D2088" />
                        </TouchableOpacity>
                    </View>

                    <View className="absolute flex-row bottom-2 px-2">
                        <View className="px-2 py-1 rounded-md bg-white">
                            <Text className="text-[#1D2088]">{data?.open_now_text}</Text>
                        </View>
                    </View>
                </View>

                <View className="mt-6">
                    <Text className="text-[#1D2088] text-[24px] font-bold">
                        {data?.name}
                    </Text>
                    <View className="flex-row items-center space-x-2 mt-2">
                        <FontAwesome name="map-marker" size={25} color="#1D2088" />
                        <Text className="text-[#1D2088] text-[20px] font-bold">
                            {data?.location_string}
                        </Text>
                    </View>
                </View>

                <View className="mt-4 flex-row items-center justify-between">
                    {data?.rating && (
                        <View className=" flex-row items-center space-x-2">
                            <View className="w-12 h-12 rounded-2xl bg-[#C11B18] items-center justify-center shadow-md">
                                <FontAwesome name="star" size={26} color="#fff" />
                            </View>
                            <View>
                                <Text className="text-[#1D2088]">{data?.rating}</Text>
                                <Text className="text-[#1D2088]">Ratings</Text>
                            </View>
                        </View>
                    )}

                    {data?.price_level && (
                        <View className=" flex-row items-center space-x-2">
                            <View className="w-12 h-12 rounded-2xl bg-[#C11B18] items-center justify-center shadow-md">
                                <MaterialIcons name="attach-money" size={28} color="#fff" />
                            </View>
                            <View>
                                <Text className="text-[#1D2088]">{data?.price_level}</Text>
                                <Text className="text-[#1D2088]">Price Level</Text>
                            </View>
                        </View>
                    )}

                    {data?.distance_string && (
                        <View className=" flex-row items-center space-x-2">
                            <View className="w-12 h-12 rounded-2xl bg-[#C11B18] items-center justify-center shadow-md">
                                <FontAwesome5 name="car" size={26} color="#fff" />
                            </View>
                            <View>
                                <Text className="text-[#1D2088]">
                                    {data?.distance_string}
                                </Text>
                            </View>
                        </View>
                    )}
                </View>

                {data?.description && (
                    <Text className="mt-4 tracking-wide text-[16px] font-semibold text-[#1D2088]">
                        {data?.description}
                    </Text>
                )}

                {data?.cuisine && (
                    <View className="flex-row gap-2 items-center justify-start flex-wrap mt-4">
                        {data?.cuisine.map((n) => (
                            <TouchableOpacity
                                key={n.key}
                                className="px-2 py-1 rounded-md bg-[#C11B18]"
                            >
                                <Text className="text-[#fff]">{n.name}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                )}

                <View className=" space-y-4 mt-8 bg-white rounded-2xl px-4 py-2">
                    {data?.phone && (
                        <View className="items-center flex-row space-x-6">
                            <FontAwesome name="phone" size={24} color="#1D2088" />
                            <Text className="text-lg text-[#1D2088]">{data?.phone}</Text>
                        </View>
                    )}
                    {data?.address && (
                        <View className="items-center flex-row space-x-6">
                            <FontAwesome name="map-pin" size={24} color="#1D2088" />
                            <Text className="text-lg text-[#1D2088]">{data?.address}</Text>
                        </View>
                    )}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ItemScreen