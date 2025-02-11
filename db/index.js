const mongoose = require("mongoose");

exports.connect = (app) => {
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true, // Bắt buộc với Cosmos DB
    retryWrites: false, // Cosmos DB không hỗ trợ retryWrites
    tls: true, // Bật TLS (bắt buộc cho Cosmos DB)
  };

  const connectWithRetry = () => {
    mongoose.Promise = global.Promise;
    console.log("🔄 Connecting to MongoDB...");

    mongoose
      .connect(process.env.MONGODB_URI, options)
      .then(() => {
        console.log("✅ MongoDB (Cosmos DB) is connected!");
        app.emit("ready");
      })
      .catch((err) => {
        console.error("❌ MongoDB connection failed! Retrying in 5s...", err);
        setTimeout(connectWithRetry, 5000);
      });
  };

  connectWithRetry();
};
