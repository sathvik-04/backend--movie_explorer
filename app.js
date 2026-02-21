app.get("/", (req, res) => {
  res.json({
    message: "Movie Explorer Backend API is running 🚀",
    endpoints: {
      auth: "/api/auth",
      watchlist: "/api/watchlist"
    }
  });
});
