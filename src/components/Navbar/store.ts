import { makeAutoObservable } from "mobx";

export class NavbarStore {
  fullNavbar: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }
}
