export const getStations = async () => {
  const url = `${process.env.API_BASE_URL}/cdn-web.tunein.com/stations.json`
  const response = await fetch(url)
    .then(res => res.json())
    .then(
      (result) => {
        return result
      },
      (error) => {
        throw error;
      }
    )
  return response && response.data;
}