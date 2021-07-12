const mapGiphyResponse = response => {
    const randomNumber = Math.floor(Math.random() * (response.data.length));
    return {
        imageUrl: response.data[randomNumber].images.original.url
    };
}

module.exports = mapGiphyResponse;