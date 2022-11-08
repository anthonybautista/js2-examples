function Book(title, genres, image){
    this.title = title ?? '';
    this.genres = genres ?? 0;
    this.image = image ?? '';
}
Book.type = 'Book';

export default Book;