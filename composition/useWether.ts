export function useWether() {

  const getWether = async (url: string, city: string) => {

      try {
        const { data, error } = await useFetch(`${url}?key=d041fe948fcc4e73a2b134159252605&q=${city}`, {
          method: 'GET',
        })

        // console.log('resp.data.value', data.value);


        return data.value;

      } catch (error) {
        console.error(error)
      }
  }

  return {
    getWether
  }
}