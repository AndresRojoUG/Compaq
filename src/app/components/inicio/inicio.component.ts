import { Component,ViewChild,ElementRef,HostListener   } from '@angular/core';
import * as ScrollReveal from 'ngx-scrollreveal';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  scrolled: boolean = false;
  sr: any
  archivoPdfS!: string;
  tarjetasMostradasComercial = 3;
  tarjetasMostradasComercialResponsive = 1;
  inicioComercialResponsive=0;
  inicioComercial=0
  user: any = {};
  tarjetasComercial = [
    {
      src: '../../../assets/imagenes/CONTPAQi-Comercial -1-.svg', titulo: 'CONTPAQi Comercial', desc: `Con este software administrativo 
    impulsarás el crecimiento de tu pequeña empresa al optimizar su administración de forma integral.
    Incluye facturación electrónica ilimitada.`, back: 'rgba(0, 141, 141, 0.75)', ficha: '../../../assets/pdf/Ficha_Producto_CONTPAQi_Comercial_Premium_2019.pdf'
    },
    {
      src: '../../../assets/imagenes/CONTPAQi_submarca_Factura electronica_RGB_A.webp', titulo: 'CONTPAQi Factura electrónica', desc: `Emitir facturas electrónicas y CFDIs (comprobante fiscal) 
    nunca ha sido tan fácil. Con nuestro sistema de facturación podrás cumplir en tiempo y forma con 
    tus obligaciones fiscales.`, back: 'rgba(0, 141, 141, 0.75)', ficha: '../../../assets/pdf/Ficha_Producto_CONTPAQi_Factura_electronica_2019.pdf'
    },
    ];

   ////////////variables y todo lo necesario para que funcionen los productos contables
   tarjetasMostradasContable = 3;
  tarjetasMostradasContableResponsive = 1;
  inicioContableResponsive=0;
  inicioContable=0
  tarjetasContable = [
    {
      src: '../../../assets/imagenes/CONTPAQi_submarca_contabilidad_RGB_A.webp', titulo: 'CONTPAQi Contabilidad', desc: `Olvídate de la captura manual y los procesos difíciles, con el sistema contable más completo y versátil para cualquier contador: CONTPAQi Contabilidad.

      `, back: '#003a71', ficha: '../../../assets/pdf/Ficha_Producto_CONTPAQi_Comercial_Premium_2019.pdf'
    },
    {
      src: '../../../assets/imagenes/CONTPAQi_submarca_Nominas_RGB_A.webp', titulo: 'CONTPAQi Nóminas', desc: `Gestiona y contabiliza los sueldos de tus empleados 
      desde nuestro sistema de nóminas para agilizar la administración de tu negocio, 
      cumplir con tus obligaciones legales y las necesidades de tu empresa.`, back: '#003a71', ficha: '../../../assets/imagenes/Ficha_Producto_CONTPAQi_Nominas_2019.pdf'
    },
    { 
      src: '../../../assets/imagenes/CONTPAQi_submarca_XML en linea+_RGB_A.webp', 
      titulo: 'CONTPAQi XML en línea+', 
      desc: `Con nuestro software especializado en la descarga de XML desde el SAT 
      y de forma masiva, podrás mejorar tu control administrativo y agilizar el 
      registrocontable de tus operaciones.`, 
      back: '#003a71',
      ficha:'../../../assets/pdf/Ficha_Producto_CONTPAQi_XML_2019.pdf' 
    },
    { 
      src: '../../../assets/imagenes/Bancos.png', 
      titulo: 'CONTPAQi Bancos', 
      desc: `Con un software de flujo de efectivo 
      podrás gestionar desde un solo lugar y sin 
      complicaciones tus gastos, ingresos y liquidez.`, 
      back: '#003a71',
      ficha:'../../../assets/pdf/Ficha_Producto_CONTPAQi_Bancos_2019.pdf' 
    },
   ];

   
   ////////////variables y todo lo necesario para que funcionen los productos Nube
   tarjetasMostradasNube = 3;
  tarjetasMostradasNubeResponsive = 1;
  inicioNubeResponsive=0;
  inicioNube=0
  tarjetasNube = [
   
    { 
      src: '../../../assets/imagenes/virt.PNG', 
      titulo: 'CONTPAQi Escritorio virtual', 
      desc: `Convierte cualquier espacio en tu oficina gracias a nuestra herramienta
       de Escritorio Virtual, en la cual podrás acceder a sistemas CONTPAQi y continuar c
       on tus operaciones sin importar en donde se encuentren.`, 
      back: 'rgba(0, 154, 201,1)',
      ficha:'../../../assets/pdf/ESCRITORIO_VIRTUAL_FICHA_PRODUCTO_OFICIAL.pdf' 
    },
    { 
      src: '../../../assets/imagenes/Logo_CONTPAQi_Personia.svg', 
      titulo: 'CONTPAQi Personia', 
      desc: `Nuestro sistema en la nube que tomando como 
      base el cálculo y timbrado de la nómina te ayuda a controlar, 
      automatizar y administrar de una manera sencilla tus operaciones 
      desde cualquier lugar y en todo momento.`, 
      back: 'rgba(0, 154, 201,1)',
      ficha:'../../../assets/pdf/Ficha_CONTPAQi_PERSONIA.pdf' 
    },
   ];

   
   ////////////variables y todo lo necesario para que funcionen los productos Wopen
   tarjetasMostradasWopen = 3;
  tarjetasMostradasWopenResponsive = 1;
  inicioWopenResponsive=0;
  inicioWopen=0
  tarjetasWopen = [
   
    { 
      src: '../../../assets/imagenes/WOPENS POS estandar.svg', 
      titulo: 'Wopen pos', 
      desc: `Wopen POS® te presenta su sistema Punto 
      de Venta en la nube con el cuál podrás registrar 
      todos tus movimientos de venta de tu negocio y 
      convertirlos a facturas en cualquier momento y desde cualquier lugar.`, 
      back: '#432ACA',
      ficha:'../../../assets/pdf/Ficha_Producto_Wopen_POS.pdf' 
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
  verMasContable() {
    this.tarjetasMostradasContable += 3;
    this.inicioContable +=3
  }
  verMenosContable(){
    this.tarjetasMostradasContable -= 3;
    this.inicioContable -=3
  }
  verMasContableResponsive() {
    this.tarjetasMostradasContableResponsive += 1;
    this.inicioContableResponsive +=1
  }
  verMenosContableResponsive(){
  
    this.tarjetasMostradasContableResponsive -= 1;
    this.inicioContableResponsive -=1;
  }
////////productos contables fin


//////////productos Wopen inicion

verMasWopenResponsive() {
  this.tarjetasMostradasWopenResponsive += 1;
  this.inicioWopenResponsive +=1
}
verMenosWopenResponsive(){

  this.tarjetasMostradasWopenResponsive -= 1;
  this.inicioWopenResponsive -=1;
}
////////productos contables fin

//////////productos contables inicion
verMasNube() {
  this.tarjetasMostradasNube += 3;
  this.inicioNube +=3
}
verMenosNube(){
  this.tarjetasMostradasNube -= 3;
  this.inicioNube-=3
}
verMasNubeResponsive() {
  this.tarjetasMostradasNubeResponsive += 1;
  this.inicioNubeResponsive +=1
}
verMenosNubeResponsive(){

  this.tarjetasMostradasNubeResponsive -= 1;
  this.inicioNubeResponsive -=1;
}
////////productos Nube fin
  
  verMasComercial() {
    this.tarjetasMostradasComercial += 3;
    this.inicioComercial +=3
  }
  verMenosComercial(){
    this.tarjetasMostradasComercial -= 3;
    this.inicioComercial -=3
  }
  verMasComercialResponsive() {
    this.tarjetasMostradasComercialResponsive += 1;
    this.inicioComercialResponsive +=1
  }
  verMenosComercialResponsive(){
  
    this.tarjetasMostradasComercialResponsive -= 1;
    this.inicioComercialResponsive -=1;
  }
  

  archivoPdf(contenidoPdfSeleccionado: any,arc:any){
    this.archivoPdfS=arc;
   
    this.modal.open(contenidoPdfSeleccionado, { centered: true, size: 'xl', animation: true, backdrop: true })
  }

  }



