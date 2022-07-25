import { Component, OnInit } from '@angular/core';
// service
import { CollabService } from 'src/app/_Core/Services/collab.service';
import { AuthService } from 'src/app/_Core/Services/auth.service'

@Component({
  selector: 'app-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.scss']
})
export class ConnectionsComponent implements OnInit {

  // variables
  collabList: any[] = [];

  constructor(private collabService: CollabService,
    private authService: AuthService) {}

  ngOnInit(): void {
    this.getCollabList();
  }

  getCollabList(filter = 'Accepted') {
    this.collabService.getCollabById(this.authService.getId(),filter).subscribe((res) => {
      if (res.status) {
        this.collabList = res.data
      }
    });
  }

}
