import { Component, OnInit } from '@angular/core';

// services
import { DynamicScriptLoaderServiceService } from 'src/app/_Core/Services/dynamic-script-loader-service.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private dynamicScriptLoader: DynamicScriptLoaderServiceService,
  ) {
  }

  ngOnInit(): void {

  }


}
