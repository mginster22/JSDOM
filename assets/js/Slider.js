class Slider {
  constructor(collection = [], currentIndex = 0) {
    this._collection = collection;
    this.currentIndex = currentIndex;
  }
  set currentIndex(value) {
    if (typeof value !== "number" || value < 0 || !Number.isInteger(value)) {
      throw new Error("Invalid data value");
    }
    this._currentIndex = value;
  }
  get currentIndex() {
    return this._currentIndex;
  }
  get collection() {
    return this._collection;
  }
  get currentSlide() {
    return this._collection[this._currentIndex];
  }
  get next() {
    return (this._currentIndex + 1) % this._collection.length;
  }
  get prev() {
    return (
      (this._currentIndex - 1 + this._collection.length) %
      this._collection.length
    );
  }
}
