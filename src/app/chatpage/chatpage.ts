import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-chatpage',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './chatpage.html',
  styleUrl: './chatpage.css',
})
export class Chatpage {

  constructor(
    private http: HttpClient,
    private cdr: ChangeDetectorRef
  ) { }

  @Output() goHome = new EventEmitter<void>();

  message: string = '';
  isLoading: boolean = false;

  messages: { text: string, sender: 'user' | 'bot' }[] = [
    {
      text: 'สวัสดีครับ! ผมคือ AI Assistant ของ HelpCenter ยินดีที่ได้พบครับ วันนี้มีอะไรให้ผมช่วยดูแลไหมครับ?',
      sender: 'bot'
    }
  ];

  back() {
    this.goHome.emit();
  }

  send() {
    if (!this.message.trim()) return;

    const userMessage = this.message;

    // push user message
    this.messages.push({
      text: userMessage,
      sender: 'user'
    });

    this.message = '';
    this.isLoading = true; // 👈 เริ่มโหลด

    this.http.post<any>('http://127.0.0.1:8000/api/v1/chat', {
      message: userMessage
    }).subscribe({
      next: (res) => {
        this.isLoading = false; // 👈 หยุดโหลด

        this.messages.push({
          text: res.reply,
          sender: 'bot'
        });

        this.cdr.detectChanges();
      },
      error: (err) => {
        this.isLoading = false; // 👈 หยุดโหลด

        this.messages.push({
          text: 'เกิดข้อผิดพลาดในการเชื่อมต่อเซิร์ฟเวอร์',
          sender: 'bot'
        });
        console.error(err);
      }
    });
  }


  setMessage(text: string) {
    this.message = text;
  }
}
