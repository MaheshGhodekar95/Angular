import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Mahesh';
  
  GetName(name:string,SirName:string)
  {
    alert(name+' '+SirName);
  }
  GetData(Value:string)
  {
    console.warn(Value);
  }
  GetDown(Value:string)
  {
   console.warn(Value);
  }
  GetMouseOver()
  {
   console.warn('Mouse is overed Mahesh');
  }
  GetMouseLeave()
  {
   console.warn('Mouse is Leave Mahesh');
  }
}
