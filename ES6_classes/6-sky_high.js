import Building from "./5-building";

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    this._sqft = sqft;
    this._floors = floors;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(newSqft) {
	this._sqft = newSqft;
  }

  get floors() {
    return this._floors;
  }

  set floors(newFloors) {
	this._floors = newFloors;
  }

  evacuationWarningMessage() {
    throw new TypeError(`Evacuate slowly the ${this._floors} floors`)
  }
}
