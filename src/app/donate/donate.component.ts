import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DoacaoService } from './service/doacao.service';
import { DoacaoDTO } from './model/doacao.model';

@Component({
  selector: 'app-donate',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './donate.component.html',
  styleUrl: './donate.component.css'
})
export class DonateComponent {

  donation: DoacaoDTO = new DoacaoDTO();

  constructor(private doacaoService: DoacaoService) { }

  createDoacao() {
    this.donation.id_parceiro = 1;
    this.donation.data_doacao = new Date();
    this.donation.status = 'APROVADA';

    // ver se faz sentido ter um campo qrcodepix
    this.donation.qrcodepix = 'https://meu.qrcode.fake/123';

    console.log('Enviando doação:', this.donation);

    this.doacaoService.createDonation(this.donation).subscribe({
      next: (res: any) => {
        console.log('Doação enviada com sucesso!', res);
      },
      error: (err: any) => {
        console.error('Erro ao enviar doação', err);
      }
    });
  }
}
