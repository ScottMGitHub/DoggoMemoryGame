const mapDoggoResponse = response => {
    const dogs = response.map((dogImageUrl, index) => {
        return card = {
            id: index + 1,
            image: dogImageUrl,
            breed: getBreedNameFromUrl(dogImageUrl)
        }
    });
    return dogs;
}

const getBreedNameFromUrl = url => {
    const splitByBreed = url.split('breeds')[1];
    const splitBySlash = splitByBreed.split('/')[1];
    return capitalize(splitBySlash.split('-').join(' '));
    
}
const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

module.exports = mapDoggoResponse;
// [
//   'https://images.dog.ceo/breeds/waterdog-spanish/20190208_063211.jpg',  
//   'https://images.dog.ceo/breeds/germanshepherd/n02106662_3781.jpg',   
//   'https://images.dog.ceo/breeds/frise-bichon/7.jpg',
//   'https://images.dog.ceo/breeds/coonhound/n02089078_901.jpg',
//   'https://images.dog.ceo/breeds/ridgeback-rhodesian/n02087394_9462.jpg',
//   'https://images.dog.ceo/breeds/groenendael/n02105056_6127.jpg',      
//   'https://images.dog.ceo/breeds/dingo/n02115641_6844.jpg',
//   'https://images.dog.ceo/breeds/schnauzer-miniature/n02097047_255.jpg',
//   'https://images.dog.ceo/breeds/sheepdog-shetland/n02105855_18782.jpg',
//   'https://images.dog.ceo/breeds/bulldog-boston/n02096585_12880.jpg',  
//   'https://images.dog.ceo/breeds/lhasa/n02098413_20830.jpg',
//   'https://images.dog.ceo/breeds/hound-blood/n02088466_2862.jpg'       
// ]


