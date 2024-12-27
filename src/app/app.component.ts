import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Panterest';
  zaman : number = 0;
  dakika : number = 0;
  blur: number = 0;
  zero : string = "";

  height : string = "";
  weight : string = "";

  link : string ="";
  id : number = 1084;

  olusturmatexti : string = "";

  isChecked: boolean = false;
  dark: boolean = false;

  DcheckBoxChanged(): void {
    if (this.isChecked) {
      this.dark = true;
    } else {
      this.dark = false;
    }
  }

  
  private intervalId: any; // setInterval ID'si (durdurmak için)


  ngOnInit(): void {
    // setInterval ile kronometre başlat
    this.intervalId = setInterval(() => {
      this.zaman++;
    }, 1000); // Her 1 saniyede bir çalışır
    this.height = "";
    this.weight = "";
    
  }

  ngDoCheck(): void {
    // Eğer 'zaman' değişkeni 60'tan büyükse, dakika ekleyin
    if(this.zaman >= 60 ){
      this.dakika += 1;
      this.zaman = 0;
    }
    if(this.zaman < 10){
      this.zero ="0";
    }
    else{
      this.zero = "";
    }
    }
  
  ngOnDestroy(): void {
    // Bileşen yok edilirken interval'i temizle
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  resetTimer(): void {
    this.zaman = 0; 
    this.dakika = 0;
  }

  generate(): void {
    this.id = Math.floor(Math.random() * (1084 - 0 + 1)) + 0;
    if(this.dark == true && this.blur < 1){
      this.link = `https://picsum.photos/id/${this.id}/${this.weight}/${this.height}?grayscale`;
      this.olusturmatexti = `Siyah - Beyaz, ${this.weight} - ${this.height} boyutlarında görsel oluşturuluyor...` ;
    }
    if(this.dark == false && this.blur < 1){
      this.link = `https://picsum.photos/id/${this.id}/${this.weight}/${this.height}`;
      this.olusturmatexti = `${this.weight} - ${this.height} boyutlarında görsel oluşturuluyor...` ;
    }
    if(this.dark == false && this.blur > 0){
      this.link = `https://picsum.photos/id/${this.id}/${this.weight}/${this.height}?blur=${this.blur}`;
      this.olusturmatexti = `${this.blur} seviyesinde bulanık, ${this.weight} - ${this.height} boyutlarında görsel oluşturuluyor...` ;
    }
    if(this.dark == true && this.blur > 0){
      this.link = `https://picsum.photos/id/${this.id}/${this.weight}/${this.height}?grayscale&blur=${this.blur}`;
      this.olusturmatexti = `Siyah - Beyaz, ${this.blur} seviyesinde bulanık, ${this.weight} - ${this.height} boyutlarında görsel oluşturuluyor...` ;
    }
    
  }

}
