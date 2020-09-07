module.exports = {
  babel: {
    plugins: [
      [
        "react-intl",
        {
          idInterpolationPattern: "[sha512:contenthash:base64:6]",
          extractFromFormatMessageCall: true,
          ast: true,
        },
      ],
    ],
  },
};
