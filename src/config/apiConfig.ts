interface IApiConfig {
  url: string;
  port: number;
  headers: {
    scopeId: string;
    scopeType: string;
  };
}

export const apiConfig: IApiConfig = {
  url: process.env.API_URL || '',
  port: Number(process.env.API_PORT) || 3000,
  headers: {
    scopeId: 'X-POSTMETRIA-SCOPE-ID',
    scopeType: 'X-POSTMETRIA-SCOPE-TYPE',
  },
};

export default apiConfig;
