import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// service
import { InfluencerService } from 'src/app/_Core/Services/influencer.service'

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  // variables
  inlfuencerDetails:any;
  influencerId = this.route.snapshot.params['id'];

  constructor(
    private influencerService: InfluencerService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getInfluencerDetails()
  }

  //get admin details
  getInfluencerDetails() {
    this.influencerService.getAdminById(this.influencerId).subscribe(res => {
      if(res.status) {
        this.inlfuencerDetails = res.data[0];
      }
    });
  }

  // change status
  changeStatus() {
    let body = {
      isActive: !this.inlfuencerDetails.isActive,
    };
    if (confirm('Are you sure want to change the status?')) {
      this.influencerService.markStatusAdmin(this.inlfuencerDetails['_id'], body).subscribe((res) => {
        if (res.status) {
          this.ngOnInit();
        }
      });
    }
  }

}
