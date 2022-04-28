const ZodiacArray = () =>
  function zodiacArrays() {
    const zodiacs = [
      "aries",
      "taurus",
      "gemini",
      "cancer",
      "leo",
      "virgo",
      "libra",
      "scorpio",
      "sagittarius",
      "capricorn",
      "aquarius",
      "pisces",
    ];

    return zodiacs.map((zodiac) => <li>{zodiac}</li>);
  };

export default ZodiacArray;
