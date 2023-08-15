import {
  AIR_QUALITY_KEY,
  API_URL_BASE,
  BEACH_WEATHER_KEY,
  HOST_URL,
  LIVING_WEATHER_KEY,
  MEDIUM_FORECAST_KEY,
  OCEAN_DATA_KEY,
  SHORT_FORECAST_KEY,
} from '$config';

export const API_ROUTES = {
  BEACH: {
    WEATHER: {
      WATER: `${API_URL_BASE}/1360000/BeachInfoservice/getTwBuoyBeach?serviceKey=${BEACH_WEATHER_KEY}`,
      WAVE: `${API_URL_BASE}/1360000/BeachInfoservice/getWhBuoyBeach?serviceKey=${BEACH_WEATHER_KEY}`,
      FORECAST: `${API_URL_BASE}/1360000/BeachInfoservice/getVilageFcstBeach?serviceKey=${BEACH_WEATHER_KEY}`,
      ULTRA: {
        FORECAST: `${API_URL_BASE}/1360000/BeachInfoservice/getUltraSrtFcstBeach?serviceKey=${BEACH_WEATHER_KEY}`,
      },
    },
  },
  LIVING: {
    UV: `${API_URL_BASE}/1360000/LivingWthrIdxServiceV4/getUVIdxV2?serviceKey=${LIVING_WEATHER_KEY}`,
  },
  FORECAST: {
    MEDIUM: {
      TEMPT: `${API_URL_BASE}/1360000/MidFcstInfoService/getMidTa?serviceKey=${MEDIUM_FORECAST_KEY}`,
      RAIN: `${API_URL_BASE}/1360000/MidFcstInfoService/getMidLandFcst?serviceKey=${MEDIUM_FORECAST_KEY}`,
    },
    SHORT: `${API_URL_BASE}/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${SHORT_FORECAST_KEY}`,
  },

  OCEAN: {
    DATA: `http://www.khoa.go.kr/api/oceangrid/beach/search.do?ServiceKey=${OCEAN_DATA_KEY}`,
  },

  AIR: {
    QUALITY: `${API_URL_BASE}/6260000/AirQualityInfoService/getAirQualityInfoClassifiedByStation?serviceKey=${AIR_QUALITY_KEY}`,
  },
  API: {
    OCEAN: `${HOST_URL}/api/ocean`,
  },
};

export const ROUTES = {
  HEAWOONDAE: '/weather/HEAWOONDAE',
  SONGDO: '/weather/SONGDO',
  SONGJUNG: '/weather/SONGJUNG',
  GUANGANLEE: '/weather/GUANGANLEE',
  DADAEPO: '/weather/DADAEPO',
  IMLANG: '/weather/IMLANG',
  ILGUANG: '/weather/ILGUANG',
};
