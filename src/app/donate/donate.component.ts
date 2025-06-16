import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DoacaoService } from './service/doacao.service';
import { DoacaoDTO } from './model/doacao.model';
import { OnInit } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-donate',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './donate.component.html',
  styleUrl: './donate.component.css'
})
export class DonateComponent implements OnInit {

  donation: DoacaoDTO = new DoacaoDTO();

  constructor(private doacaoService: DoacaoService) { }

  parceiros: any[] = [];

  ngOnInit(): void {
    this.doacaoService.getParceiro().subscribe({
      next: (res: any[]) => {
        this.parceiros = res;
      },
      error: (err: any) => {
        console.error('Erro ao buscar parceiros', err);
      }
    });
  }

  createDoacao() {

    this.donation.data_doacao = new Date();
    this.donation.status = 'APROVADA';

    this.donation.qrcodepix = 'https://meu.qrcode.fake/123';

    console.log('Enviando doação:', this.donation);

    this.doacaoService.createDonation(this.donation).subscribe({
      next: (res: any) => {
        Swal.fire({
          icon: 'success',
          title: 'Doação realizada!',
          text: 'Sua doação foi registrada com sucesso. Obrigado por contribuir!',
          confirmButtonText: 'OK'
        });
        console.log('Doação enviada com sucesso!', res);
      },
      error: (err: any) => {
        Swal.fire({
          icon: 'error',
          title: 'Erro!',
          text: 'Houve um problema ao registrar sua doação. Tente novamente.',
          confirmButtonText: 'OK'
        });
        console.error('Erro ao enviar doação', err);
      }
    });
  }
}
