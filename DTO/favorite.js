class FavoriteAllDTO {
    constructor ( data ) {
        this.id = data.id;
        this.favoriteId = data.favoriteId;
        this.type = data.type;
        this.urlImage = data.urlImage;
    }
}

module.exports = FavoriteAllDTO