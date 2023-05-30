import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: [
    {
      "https://graphql.datocms.com": {
        headers: {
          Authorization: "Bearer " + process.env.DATOCMS_API_KEY,
        },
      },
    },
  ],
  documents: ["src/**/*.{ts,tsx}"],
  ignoreNoDocuments: true,
  generates: {
    "./src/gql/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
