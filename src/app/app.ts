import { Component, signal } from '@angular/core';
import { Homepage } from './homepage/homepage';
import { Chatpage } from './chatpage/chatpage';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Homepage,Chatpage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  currentPage = signal<'home' | 'chat'>('home');

  goToChat() {
    this.currentPage.set('chat');
  }

  goToHome() {
    this.currentPage.set('home');
  }
}
