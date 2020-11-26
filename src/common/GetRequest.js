export const getRequest = async (url) => {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await fetch(url,
            {
                method: 'GET',
                headers: {
                    'X-CoinAPI-Key': '3A8427E2-8130-450C-99A5-4007E22DDD9A'
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
