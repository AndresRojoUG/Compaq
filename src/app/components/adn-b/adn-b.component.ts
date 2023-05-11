import { Component,ViewChild,ElementRef,HostListener   } from '@angular/core';
import * as ScrollReveal from 'ngx-scrollreveal';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-adn-b',
  templateUrl: './adn-b.component.html',
  styleUrls: ['./adn-b.component.css']
})
export class AdnBComponent {
  scrolled: boolean = false;
  sr: any
  archivoPdfS!: string;
  tarjetasMostradasComercial = 3;
  tarjetasMostradasComercialResponsive = 1;
  inicioComercialResponsive=0;
  inicioComercial=0
  user: any = {};
  menu_icon_variable: boolean = false;
  menuVariable: boolean = false;
  expandedIndex = 0;
  shouldHideDiv = false;
  mostrar = false;

  tarjetasMostradasAdministracion = 3;
  tarjetasMostradasAdministracionResponsive = 1;
  inicioAdministracionResponsive=0;
  inicioAdministracion=0
  informacion = {
    titulo: 'Venta de software CONTPAQi y Aspel',
    descripcion: 'Somos una empresa especializada en la venta y distribución de software CONTPAQi y Aspel para empresas de todos los tamaños. Ofrecemos una amplia variedad de paquetes de software que pueden adaptarse a las necesidades específicas de cada cliente.',
    servicios: [
      {
        titulo: 'Venta de software',
        descripcion: 'Ofrecemos una amplia variedad de paquetes de software CONTPAQi y Aspel para la gestión de diferentes áreas de tu empresa, desde contabilidad y nóminas hasta inventarios y facturación electrónica.',
        imagen: '../../../assets/imagenes/venta.webp',
      },
      {
        titulo: 'Asesoría y soporte',
        descripcion: 'Además de la venta de software, ofrecemos asesoría y soporte técnico para la instalación, configuración y uso de los diferentes paquetes de software que distribuimos. Nuestro equipo de expertos está siempre dispuesto a ayudarte.',
        imagen: '../../../assets/imagenes/soporte.jpg',
      },
    ],
  };



  constructor(private elementRef: ElementRef, private modal: NgbModal,private httClient: HttpClientModule ) {}


 
  ngOnInit() {
 const video=this.elementRef.nativeElement.querySelector('#video-background');
video.muted=true;

const video2=this.elementRef.nativeElement.querySelector('#video-background2');
video2.muted=true


 
    
  }
  archivoPdf(contenidoPdfSeleccionado: any,arc:any){
    this.archivoPdfS=arc;
   
    this.modal.open(contenidoPdfSeleccionado, { centered: true, size: 'xl', animation: true, backdrop: true })
  }

  scrollToElement(elementId: string): void {
    console.log(this.elementRef.nativeElement.querySelector('#' +elementId))
        const element = this.elementRef.nativeElement.querySelector('#' +elementId);
        console.log(element)
        if (element) {
          console.log('entro')
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
     
      openMenu() {
        this.menuVariable =! this.menuVariable;
        this.menu_icon_variable =! this.menu_icon_variable;
      }
      onScroll() {
        const element = this.elementRef.nativeElement.querySelector('.content');
        const position = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight) {
          element.classList.add('show');
        }
      }
      mostrarDiv() {
        this.mostrar = true;
      }
    
      ocultarDiv() {
        this.mostrar = false;
      }
}
