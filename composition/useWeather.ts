export function useWeather() {

  const getWeather = async (url: string) => {

      try {
        const { data, error } = await useFetch(`${url}?key=d041fe948fcc4e73a2b134159252605&q=KYIV`, {
          method: 'GET',
        })

        return data.value;

      } catch (error) {
        console.error(error)
      }
  }

  return {
    getWeather
  }
}