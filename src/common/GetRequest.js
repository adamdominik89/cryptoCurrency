export const getRequest = async (url) => {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await fetch(url,
            {
                method: 'GET',
                headers: {
                    'X-CoinAPI-Key': 'BAB856CA-D533-49B5-B3DE-62F0A79EC242'
                }
            }
        )
        const responseData = await response.json();
        if (!response.ok) {
            throw new Error(responseData.message);
        }
        return responseData
    } catch (e) {
        throw e;
    }
}
