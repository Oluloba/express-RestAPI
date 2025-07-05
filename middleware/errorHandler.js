// middleware/errorHandler.js
module.exports = (err, req, res, next) => {
  console.error(err.stack); // 🔍 Logs the full error
  res.status(500).json({
    error: "Something went wrong!",
    message: err.message  // Show the actual error message
  });
};
