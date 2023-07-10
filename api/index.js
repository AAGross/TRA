import axios from "axios";

export const getPlaceData = async (bl_lat, bl_lng, tr_lat, tr_lng, type) => {
    try {
        const {
            data: { data } } = await axios.get(
                `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
                {
                    params: {
                        bl_latitude: bl_lat ? bl_lat : '28.5947787',
                        tr_latitude: tr_lat ? tr_lat : '28.5980911',
                        bl_longitude: bl_lng ? bl_lng : '-81.30273030000001',
                        tr_longitude: tr_lng ? tr_lng : '-81.29778309999999',
                        limit: '30',
                        currency: 'USD',
                        lunit: 'mi',
                        lang: 'en_US'
                    },
                    headers: {
                        'X-RapidAPI-Key': '4230925196msh9f168ff6748afdbp19c2fdjsn57cb79111842',
                        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
                    }
                }
            )

        return data;
    } catch (error) {
        return null
    }
}