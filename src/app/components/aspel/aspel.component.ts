import { Component,ViewChild,ElementRef,HostListener   } from '@angular/core';
import * as ScrollReveal from 'ngx-scrollreveal';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-aspel',
  templateUrl: './aspel.component.html',
  styleUrls: ['./aspel.component.css']
})
export class AspelComponent {
  crolled: boolean = false;
  sr: any
  archivoPdfS!: string;
  

   
   ////////////variables y todo lo necesario para que funcionen los productos Nube
   tarjetasMostradasAdministracion = 3;
  tarjetasMostradasAdministracionResponsive = 1;
  inicioAdministracionResponsive=0;
  inicioAdministracion=0
  tarjetasAdministracion = [
   
    { 
      src: '../../../assets/imagenes/aspelSae.PNG', 
      titulo: 'aspel SAE', 
      desc: `Software administrativo que controla el ciclo de todas las operaciones de compra-venta
      de la empresa como: inventarios, clientes, facturación, cuentas por cobrar, vendedores,
      compras, proveedores y cuentas por pagar.`, 
      back: '#d62828',
      ficha:'../../../assets/pdf/ficha-tecnica-sae-9.pdf' 
    },
    { 
      src: '../../../assets/imagenes/ADM.PNG', 
      titulo: 'aspel ADM', 
      desc: `Aplicación en la nube que gestiona eficientemente clientes, productos o servicios.
      Controla las principales operaciones de tu negocio como son: cotizaciones, pedidos,
      facturas, inventarios, servicios, órdenes de compra, compras y costos.`, 
      back: '#0077b6',
      ficha:'../../../assets/pdf/ficha-tecnica-adm.pdf' 
    },
   ];

   tarjetasMostradasAdministracion2 = 3;
   tarjetasMostradasAdministracionResponsive2 = 1;
   inicioAdministracionResponsive2=0;
   inicioAdministracion2=0
   tarjetasAdministracion2 = [
    
     { 
       src: '../../../assets/imagenes/CAJA.PNG', 
       titulo: 'aspel CAJA', 
       desc: `Controla, administra y agiliza las operaciones de ventas, facturación e inventarios
       de uno o varios comercios, tiendas, cajas y cajeros. Convierte tu equipo de cómputo
       en un punto de venta.`, 
       back: '#ffd60a',
       ficha:'../../../assets/pdf//ficha-tecnica-caja.pdf' 
     },
     { 
       src: '../../../assets/imagenes/ADM.PNG', 
       titulo: 'aspel ADM', 
       desc: `Aplicación en la nube que gestiona eficientemente clientes, productos o servicios.
       Controla las principales operaciones de tu negocio como son: cotizaciones, pedidos,
       facturas, inventarios, servicios, órdenes de compra, compras y costos.`, 
       back: '#0077b6',
       ficha:'../../../assets/pdf/ficha-tecnica-adm.pdf' 
     },
    ];

   tarjetasMostradasConta = 3;
   tarjetasMostradasContaResponsive = 1;
   inicioContaResponsive=0;
   inicioConta=0
   tarjetasConta = [
    
     { 
       src: '../../../assets/imagenes/COI.PNG', 
       titulo: 'aspel COI', 
       desc: `Procesa, integra y mantiene actualizada la información contable y fiscal atendiendo
       todos los requisitos de la Contabilidad Electrónica.
        Valida en automático los RFC de terceros directamente desde la lista negra del
       SAT (EFOS).`, 
       back: '#00b4d8',
       ficha:'../../../assets/pdf/ficha-tecnica-coi.pdf' 
     },
    
    ];

    tarjetasMostradasNoi = 3;
   tarjetasMostradasNoiResponsive = 1;
   inicioNoiResponsive=0;
   inicioNoi=0
   tarjetasNoi = [
    
     { 
       src: '../../../assets/imagenes/NOI.PNG', 
       titulo: 'aspel NOI', 
       desc: `Automatiza el control de la nómina; ofrece un cálculo exacto de las percepciones
       y deducciones de los trabajadores de acuerdo a las disposiciones fiscales y laborales vigentes.`, 
       back: '#fb5607',
       ficha:'../../../assets/pdf/ficha-tecnica-noi.pdf' 
     },
    
    ];

   
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  expandedIndex = 0;
  shouldHideDiv = false;
  constructor(private elementRef: ElementRef, private modal: NgbModal,private httClient: HttpClientModule ) {}
  menu_icon_variable: boolean = false;
  menuVariable: boolean = false;
  
  
  ngOnInit() {
 
    
  }

  onSubmit(form: NgForm) {
    console.log(form.value);

 

  

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
  //////////productos contables inicion
  
//////////productos contables inicion
verMasAdministracion() {
  this.tarjetasMostradasAdministracion += 3;
  this.inicioAdministracion +=3
}
verMenosNube(){
  this.tarjetasMostradasAdministracion -= 3;
  this.inicioAdministracion-=3
}
verMasAdministracionResponsive() {
  this.tarjetasMostradasAdministracionResponsive += 1;
  this.inicioAdministracionResponsive +=1
}
verMenosAdministracionResponsive(){

  this.tarjetasMostradasAdministracionResponsive -= 1;
  this.inicioAdministracionResponsive -=1;
}

verMasAdministracion2() {
  this.tarjetasMostradasAdministracion2 += 3;
  this.inicioAdministracion2 +=3
}
verMenosNube2(){
  this.tarjetasMostradasAdministracion2 -= 3;
  this.inicioAdministracion2-=3
}
verMasAdministracionResponsive2() {
  this.tarjetasMostradasAdministracionResponsive2 += 1;
  this.inicioAdministracionResponsive2 +=1
}
verMenosAdministracionResponsive2(){

  this.tarjetasMostradasAdministracionResponsive2 -= 1;
  this.inicioAdministracionResponsive2 -=1;
}



verMasConta() {
  this.tarjetasMostradasConta += 3;
  this.inicioConta +=3
}
verMenosConta(){
  this.tarjetasMostradasConta -= 3;
  this.inicioConta-=3
}
verMasContaResponsive() {
  this.tarjetasMostradasContaResponsive += 1;
  this.inicioContaResponsive +=1
}
verMenosContaResponsive(){

  this.tarjetasMostradasContaResponsive -= 1;
  this.inicioContaResponsive -=1;
}


verMasNoi() {
  this.tarjetasMostradasNoi += 3;
  this.inicioNoi +=3
}
verMenosNoi(){
  this.tarjetasMostradasNoi -= 3;
  this.inicioNoi-=3
}
verMasNoiResponsive() {
  this.tarjetasMostradasNoiResponsive += 1;
  this.inicioNoiResponsive +=1
}
verMenosNoiResponsive(){

  this.tarjetasMostradasNoiResponsive -= 1;
  this.inicioNoiResponsive -=1;
}
  
  archivoPdf(contenidoPdfSeleccionado: any,arc:any){
    this.archivoPdfS=arc;
   
    this.modal.open(contenidoPdfSeleccionado, { centered: true, size: 'xl', animation: true, backdrop: true })
  }

  }
