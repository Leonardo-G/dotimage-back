class SavedAllDTO {
    constructor ( data ) {
        this.id = data.id;
        this.favoriteId = data.savedId;
        this.type = data.type;
        this.urlImage = data.urlImage;
    }
}

module.exports = SavedAllDTO