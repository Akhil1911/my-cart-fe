import { Injectable, signal, WritableSignal } from '@angular/core';

export type User = 'user' | 'admin' | 'guest';

@Injectable({
  providedIn: 'root',
})
export class Store {
  activeUser: WritableSignal<User> = signal<User>('guest');

  setActiveUser(role: User) {
    this.activeUser.set(role);
  }
}
