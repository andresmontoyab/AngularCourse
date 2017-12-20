export  class likeComponent {
    constructor(private _numberLike?: number, private _selected?: boolean) {
    }

    pressButton() {
        this._numberLike += (this._selected) ? -1 : 1;
        this._selected = !this._selected;
    }

    get numberLike() {
        return this._numberLike;
    }

    get selected() {
        return this._selected;
    }
    }
