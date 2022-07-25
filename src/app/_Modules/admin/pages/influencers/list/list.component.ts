import { Component, OnInit } from '@angular/core';
// service
import { InfluencerService } from 'src/app/_Core/Services/influencer.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  // varibales
  influencerList = [];
  constructor(
    private influencerService: InfluencerService
  ) { }

  ngOnInit(): void {
    this.getInfluencerList()
  }

  // get influencer list
  getInfluencerList() {
    this.influencerService.getUsers().subscribe(res => {
      if(res.status) {
        this.influencerList = res.data
      }
    });
  }

  // change status
  changeStatus(influencer: any) {
    console.log(influencer);
    let body = {
      isActive: !influencer.isActive,
    };
    if (confirm('Are you sure want to change the status?')) {
      this.influencerService.markStatusAdmin(influencer._id, body).subscribe((res) => {
        if (res.status) {
          this.getInfluencerList();
        }
      });
    }
  }

  deleteAdmin(influencer: any) {
    if (confirm('Are you sure want to delete?')) {
      this.influencerService.deleteAdmin(influencer._id).subscribe((res) => {
        if (res.status) {
          this.getInfluencerList();
        }
      });
    }
  }

}
