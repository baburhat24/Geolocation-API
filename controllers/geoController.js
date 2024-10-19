import fetch from 'node-fetch';

export const getGeolocation = async (req, res) => {
  try {
    const response = await fetch('http://ip-api.com/json');
    const geoData = await response.json();

    res.json(geoData);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching geolocation data' });
  }
};
