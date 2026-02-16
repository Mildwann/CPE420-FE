import { CommonModule } from '@angular/common';
import { Component ,Output, EventEmitter} from '@angular/core';
import { FormsModule} from '@angular/forms';
@Component({
  selector: 'app-chatpage',
  imports: [FormsModule,CommonModule],
  templateUrl: './chatpage.html',
  styleUrl: './chatpage.css',
})
export class Chatpage {
 @Output() goHome = new EventEmitter<void>();
 message: string = '';
  back() {
    this.goHome.emit();
  }
messages: { text: string, sender: 'user' | 'bot' }[] = [
  {
    text: 'สวัสดีครับ! ผมคือ AI Assistant ของ HelpCenter ยินดีที่ได้พบครับ วันนี้มีอะไรให้ผมช่วยดูแลไหมครับ?',
    sender: 'bot'
  }
];

send() {
  if (!this.message.trim()) return;

  // เพิ่มข้อความของผู้ใช้
  this.messages.push({
    text: this.message,
    sender: 'user'
  });

  this.message = ''; // ล้าง input
}
setMessage(text: string) {
  this.message = text;
}

}
