export const getRequest = async (url) => {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await fetch(url,
            {
                method: 'GET',
                headers: {
                    'X-CoinAPI-Key': 'CB0C80E3-953E-4906-B25B-F582F084DAF6'
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
