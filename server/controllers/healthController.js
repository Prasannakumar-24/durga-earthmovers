// @desc    Health check endpoint
// @route   GET /api/health
// @access  Public
exports.healthCheck = (req, res) => {
  res.status(200).json({
    status: 'ok',
    service: 'Durga Earthmovers API',
    timestamp: new Date().toISOString(),
  });
};