import { Injectable } from '@angular/core';

interface Scripts {
  name: string;
  src: string;
}

export const ScriptStore: Scripts[] = [
  //client
  { name: 'sbadmin', src: '../../../assets/assets/js/sb-admin-2.min.js' },
  { name: 'areaChart', src: '../../../assets/assets/js/demo/chart-area-demo.js' },
  { name: 'barChart', src: '../../../assets/assets/js/demo/chart-bar-demo.js' },
  { name: 'pieChart', src: '../../../assets/assets/js/demo/chart-pie-demo.js' },
  { name: 'datatables', src: '../../../assets/assets/js/demo/datatables-demo.js' },
  { name: 'jquery', src: '../../../assets/assets/vendor/jquery/jquery.min.js' },
  { name: 'bootstrap', src: '../../../assets/assets/vendor/bootstrap/js/bootstrap.bundle.min.js' },
  { name: 'jqueryEasing', src: '../../../assets/assets/vendor/jquery-easing/jquery.easing.min.js' },
  { name: 'chart', src: '../../../assets/assets/vendor/chart.js/Chart.min.js' },
];

declare var document: any;

@Injectable({
  providedIn: 'root'
})
export class DynamicScriptLoaderServiceService {

  private scripts: any = {};

  constructor() {
    ScriptStore.forEach((script: any) => {
      this.scripts[script.name] = {
        loaded: false,
        src: script.src
      };
    });
  }

  load(scripts: string[]) {
    const promises: any[] = [];
    scripts.forEach((script) => promises.push(this.loadScript(script)));
    return Promise.all(promises);
  }

  loadScript(name: string) {
    return new Promise((resolve, reject) => {
      if (!this.scripts[name].loaded) {
        //load script
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = this.scripts[name].src;
        if (script.readyState) {  //IE
          script.onreadystatechange = () => {
            if (script.readyState === "loaded" || script.readyState === "complete") {
              script.onreadystatechange = null;
              this.scripts[name].loaded = true;
              resolve({ script: name, loaded: true, status: 'Loaded' });
            }
          };
        } else {  //Others
          script.onload = () => {
            this.scripts[name].loaded = true;
            resolve({ script: name, loaded: true, status: 'Loaded' });
          };
        }
        script.onerror = (error: any) => resolve({ script: name, loaded: false, status: 'Loaded' });
        document.getElementsByTagName('head')[0].appendChild(script);
      } else {
        resolve({ script: name, loaded: true, status: 'Already Loaded' });
      }
    });
  }

  //Load template specific stylesheets
  loadExternalStyles(styleUrl: string) { //pass the url path of the css file
    return new Promise((resolve, reject) => {
      const styleElement = document.createElement('link');
      styleElement.href = styleUrl;
      styleElement.rel = 'stylesheet';
      styleElement.type = 'text/css';
      styleElement.onload = resolve;
      document.head.appendChild(styleElement);
    });
  }

  //Load template specific javascripts
  loadScripts(scripts:string[]) {
    this.load(scripts).then(data => {
      // Script Loaded Successfully
    }).catch(error => console.log(error));
  }
}
