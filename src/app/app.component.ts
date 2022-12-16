import { Component } from '@angular/core';
// import { CHFontString } from '../assets/FontString/CHFontString'
// import { CHFontBoldString } from '../assets/FontString/CHFontBoldString'
// import { ENFontString } from '../assets/FontString/ENFontString'

// import Swiper core and required modules
import SwiperCore, { Navigation, A11y, Autoplay, EffectCube } from 'swiper';
SwiperCore.use([Navigation, A11y, Autoplay, EffectCube ]);

import { jsPDF } from "jspdf";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'linex-business-card';

  employeeName = '';
  employeeTitleEn = '';
  employeeTitle = '';
  employeeMail = '';
  employeeTel = '';
  employeeMobile = '';

  onSwiper({swiper}: {swiper: Event}) {
    // console.log(swiper);
  }
  onSlideChange() {
    // console.log('slide change');
  }

  // downloadPDF(): void {
  //   const pages = document.querySelector('#card-front') as HTMLElement;
  //   this.exportAllToPDF(pages);
  // }

  // exportAllToPDF(pages: HTMLElement) {
  //   // Setting
  //   const doc = new jsPDF('p', 'px', [532, 319], false);

  //   doc.html(pages, {
  //     callback: (doc: jsPDF) => {

  //       // 測試
  //       doc.addFileToVFS('microsoft-jhenghei-normal.ttf', CHFontString);
  //       doc.addFont('microsoft-jhenghei-normal.ttf', 'microsoft-jhenghei', 'normal');
  //       doc.setFont('microsoft-jhenghei');
  //       doc.setFontSize(21);
  //       doc.text(this.employeeName, 28, 160)

  //       doc.setFontSize(15);
  //       doc.text(this.employeeName, 28, 190)
          
  //       // Delete blank page
  //       doc.deletePage(doc.getNumberOfPages());
  //       // Add new page & back image
  //       doc.addPage();
  //       doc.addImage('../assets/images/back.png', 'PNG', 0, 0, 319, 532);
  //       // Save
  //       doc.save('pdf-export');
  //     }
  //   });
  // }

  downloadPDFNew(): void {
    // PDF Setting
    const doc = new jsPDF('p', 'px', [532, 319]);

    // Front Image
    doc.addImage('../assets/images/front.png', 'PNG', 0, 0, 319, 532);

    // Set Text
    // doc.addFileToVFS('microsoft-jhenghei-normal.ttf', CHFontString);
    // doc.addFont('microsoft-jhenghei-normal.ttf', 'microsoft-jhenghei', 'normal');
    // doc.addFileToVFS('microsoft-jhenghei-bold.ttf', CHFontBoldString);
    // doc.addFont('microsoft-jhenghei-bold.ttf', 'microsoft-jhenghei-bold', 'bold');

    // doc.setFont('microsoft-jhenghei-bold', 'bold');
    doc.setFontSize(29);
    doc.text(this.employeeName, 30, 175);

    // doc.setFont('microsoft-jhenghei', 'normal');
    doc.setFontSize(22);
    doc.text(this.employeeTitleEn, 30, 198);
    doc.text(this.employeeTitle, 30, 217);
    doc.setFontSize(18);
    doc.text(this.employeeMail, 30, 272);
    doc.text(this.employeeTel, 57, 290);
    doc.text(this.employeeMobile, 57, 308);

    // Add new page & back image
    doc.addPage();
    doc.addImage('../assets/images/back.png', 'PNG', 0, 0, 319, 532);
    // Save
    doc.save('pdf-export');

  }

}
