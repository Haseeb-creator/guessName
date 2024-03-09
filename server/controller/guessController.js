const axios = require("axios");

const guessController = async (req, res) => {
  const { name } = req.body;
  // api limit acceded used this data
  /*  const guessData = {
    name: name,
    id: 1,
    age: 27,
    gender: "male",
    country: "Not available",
  }; 

  res.status(200).json({ data: guessData });*/

  if (name === "" || name === undefined || name === null) {
    res.status(401).json({ status: "failed", error: "name can not be Empty" });
  } else {
    try {
      const [ageResponse, genderResponse, countryResponse] = await Promise.all([
        axios.get(`https://api.agify.io?name=${name}`),
        axios.get(`https://api.genderize.io?name=${name}`),
        axios.get(`https://api.nationalize.io?name=${name}`),
      ]);

      const guessData = {
        name: name,
        id: ageResponse.data?.count || 1,
        age: ageResponse.data?.age || 27,
        gender: genderResponse.data?.gender || "male",
        country: countryResponse.data?.country[0]?.country_id || "Not available",
      };
      res.status(201).json({ status: "success", data: guessData });
    } catch (error) {
      console.error("Error fetching data:", error.message);
      res.status(500).json({ status: "failed", error: "Internal Server Error" });
    }
  }
};

module.exports = guessController;
