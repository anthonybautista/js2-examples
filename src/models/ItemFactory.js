import Audiobook from "@/models/Audiobook";
import Movie from "@/models/Movie";
import Song from "@/models/Song";
import Podcast from "@/models/Podcast";
import Tv from "@/models/Tv";
import Book from "@/models/Book";
import MusicVideo from "@/models/MusicVideo";

function ItemFactory(item) {
    if (item.wrapperType === "audiobook") {
        return new Audiobook(item.collectionName ?? '', item.primaryGenreName ?? '', item.artworkUrl100 ?? '');
    } else {
        switch (item.kind) {
            case 'song':
                return new Song(item.collectionName ?? '', Math.floor(item.trackTimeMillis/60000) ?? '', item.artworkUrl100 ?? '')
            case 'music-video':
                return new MusicVideo(item.collectionName ?? '', Math.floor(item.trackTimeMillis/60000) ?? '', item.artworkUrl100 ?? '')
            case 'feature-movie':
                return new Movie(item.collectionName ?? '', Math.floor(item.trackTimeMillis/60000) ?? '', item.artworkUrl100 ?? '')
            case 'podcast':
                return new Podcast(item.collectionName ?? '', Math.floor(item.trackTimeMillis/60000) ?? '', item.artworkUrl100 ?? '')
            case 'tv-episode':
                return new Tv(item.collectionName ?? '', Math.floor(item.trackTimeMillis/60000) ?? '', item.artworkUrl100 ?? '')
            case 'ebook':
                return new Book(item.collectionName ?? '', item.genres ?? '', item.artworkUrl100 ?? '')
            default:
                console.log(item)
        }
    }

}

export default ItemFactory;