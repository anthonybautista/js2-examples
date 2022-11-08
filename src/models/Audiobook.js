function Audiobook(title, genre, image){
    this.title = title ?? '';
    this.genre = genre ?? '';
    this.image = image ?? '';
}
Audiobook.type = 'Audiobook';

export default Audiobook;