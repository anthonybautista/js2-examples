class Podcast{
    runtime = 0;
    title = '';
    image = '';
    constructor(title, runtime, image) {
        this.title = title ?? '';
        this.runtime = runtime ?? 0;
        this.image = image ?? '';
    }
}
Podcast.type = 'Podcast';

export default Podcast;