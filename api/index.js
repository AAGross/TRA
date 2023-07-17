import axios from "axios";

export const getPlaceData = async (bl_lat, bl_lng, tr_lat, tr_lng, type) => {
    try {
        const {
            data: { data } } = await axios.get(
                `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
                {
                    params: {
                        bl_latitude: bl_lat ? bl_lat : '27.28252506959073',
                        tr_latitude: tr_lat ? tr_lat : '27.38920905950153',
                        bl_longitude: bl_lng ? bl_lng : '-82.59721983951567',
                        tr_longitude: tr_lng ? tr_lng : '-82.47864103418638',
                        limit: '30',
                        currency: 'USD',
                        lunit: 'mi',
                        lang: 'en_US'
                    },
                    headers: {
                        'X-RapidAPI-Key': '88710ad5acmsh5bc4a4151757210p12e719jsn928ef1ff4386',
                        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
                    }
                }
            )

        return data;
    } catch (error) {
        return null
    }
}