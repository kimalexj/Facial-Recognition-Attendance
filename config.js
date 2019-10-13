var config = {}

config.host = process.env.HOST || "https://attendanceapi.documents.azure.com:443/";
config.authKey = process.env.AUTH_KEY || "UsnoMyRWkyFw9sBCGmacek5TsEfKSxCsL6s10yeRnXdmjtriRLUt9AzeypdIFIK4OcA7k2pAwr0kJWcluMFFvg==";
config.databaseId = "Roster";
config.collectionId = "students";

module.exports = config;