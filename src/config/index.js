// This file created for absolutely general configurations
// If you considered to add getPlayers method's route url of the aml, this file is not correct place

export default {
  isEnvDevelopment: process.env.NODE_ENV === 'development',
  isEnvProduction: process.env.NODE_ENV === 'production',
  isEnvTest: process.env.NODE_ENV === 'test',
  googleClientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
  s3BaseUrl: process.env.REACT_APP_S3_BASE_URL,
  app_urls: {
    superAdminDashboard: process.env.REACT_APP_SUPERADMIN_DASHBOARD,
    davinciaDashboard: process.env.REACT_APP_DAVINCIA_APP
  },
  davinciaCoreApi: {
    uri: process.env.REACT_APP_DAVINCIA_CORE_API,
    versions: {
      v1: 'v1'
    }
  }
};
