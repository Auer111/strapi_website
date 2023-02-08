module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: 'aws-s3',
        providerOptions: {
          accessKeyId: process.env.DO_SPACE_ACCESS_KEY,
          secretAccessKey: process.env.DO_SPACE_SECRET_KEY,
          endpoint: process.env.DO_SPACE_ENDPOINT, // e.g. "s3.fr-par.scw.cloud"
          params: {
            Bucket: process.env.DO_SPACE_BUCKET,
          },
        },
      },
    },
    // ...
  });