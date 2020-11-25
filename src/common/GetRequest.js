export const getRequest = async (url) => {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await fetch(url,
            {
                method: 'GET',
                headers: {
                    'X-CoinAPI-Key': '2576FCFF-6ED8-4B79-B1E2-2336534D5088'
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
