class PrintEditionItem {
  constructor (name, releaseData, pagesCount) {
    this.name = name;
    this.releaseDate = releaseData;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }
    fix() {

    };
    set setState(state) {

    }
    get setState() {
      return this._setState;
    }


}