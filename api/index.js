import axios from "axios";

export const getPlaceData = async () => {
    try {
      const {data : {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary`,
            {
                params: {
                    bl_latitude: '28.5947787',
                    tr_latitude: '28.5980911',
                    bl_longitude: '-81.30273030000001',
                    tr_longitude: '-81.29778309999999',
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