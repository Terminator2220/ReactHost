import MarvelService from '../../services/MarvelService';
    
MarvelService = new MarvelService();
updateChar = () => {
    const id = 1011005;
    this.marvelService.getCharacter(id).then(res => {
        this.setState({
            name: res.data.results[0].name,
            description: res.data.results[0].description,
            thumbnail: res.data.results[0].thumbnail.path + '.' + res.data.results[0].thumbnail.extension,
            homepage: res.data.results[0].urls[0].url,
            wiki: res.data.results[0].urls[1].url
        })
    })
}
this.marvelService.getAllCharacters().then(res => console.log(res));