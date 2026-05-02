const baseConfig = {
  weddingDay: "Friday",
  weddingTime: " 20.00",
  weddingDate: "June 12, 2026",
  showBuiltWithInfo: true,
  showQrCode: false,
  calendarInfo: {
    timeStartISO: "2026-06-12T20:00:00+08:00",
    timeEndISO: "2026-06-12T21:00:00+08:00"
  },
  coupleInfo: {
    brideName: "Aya",
    groomName: "mohammed",
    coupleNameFormat: "GROOM_FIRST"
  },
  venue: {
    name: "Al Masa Hall",
    addressLine1: "Benha Kafr El-Gazar,",
   
    city: "Benha",
    
    mapUrl: "https://kafr el gazar - Benha, Qalyubia Governorate, Egypt, Benha, Egypt"
  },
  logo: {
    headerLogo: "/assets/images/ring-svg.png",
    footerLogo: "/assets/video/aw-ring-logo-ticker.mp4",
    footerLogoType: "mp4"
  },
  ogTags: {
    logo: "/assets/images/aw-ring-logo.png",
    siteName: "wedding.mohammed&aya.com",
    publishedTime: "2020-5-2"
  }
};

const lang = {
  id: {
    weddingDay: "Friday",
    weddingDate: "12 June 2026",
    venue: {
      ...baseConfig.venue,
      name: "Al Masa Hall",
      addressLine2: "Qalyubia, Benha,",
    }
  }
};

export default {
  ...baseConfig,
  lang
};
