import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Funcionario } from 'src/app/models/funcionarios';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})
export class EditarComponent implements OnInit {
  constructor(
    private funcionarioService: FuncionarioService,
    private route: ActivatedRoute
  ) {}
  btnAcao: string = 'Editar';
  btnTitulo: string = 'Editar Funcionário';
  funcionario!: Funcionario;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.funcionarioService.GetFuncionario(id).subscribe((data) => {
      this.funcionario = data.dados;
      console.log(this.funcionario)
    });
  }
}
