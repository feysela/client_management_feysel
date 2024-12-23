import { Component } from '@angular/core';

@Component({
  standalone:false,
  selector: 'app-create-meeting',
  templateUrl: './create-meeting.component.html',
  styleUrls: ['./create-meeting.component.css']
})
export class CreateMeetingComponent {
  meetingTopic = '';
  numberOfPeople = 0;
  startTime: Date | null = null;

  onSubmit() {
    console.log('Meeting Topic:', this.meetingTopic);
    console.log('Number of People:', this.numberOfPeople);
    console.log('Start Time:', this.startTime?.toLocaleString()); 
  }
}