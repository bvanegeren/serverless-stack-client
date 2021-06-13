const config = {
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-doc-uploads",
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://aw21tc8e5b.execute-api.us-east-2.amazonaws.com/prod/notes",
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_JFYxT5EsR",
    APP_CLIENT_ID: "4ner1hlgn09675hrb6q292gvae",
    IDENTITY_POOL_ID: "us-east-2:ee5f1fc4-294a-43b8-836e-79edbfba222e",
  },
};

export default config;