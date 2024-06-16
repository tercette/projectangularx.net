import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private route: ActivatedRoute,
    private router: Router
  ) {}
  btnAcao: string = 'Editar';
  btnTitulo: string = 'Editar Funcionário';
  funcionario!: Funcionario;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.funcionarioService.GetFuncionario(id).subscribe((data) => {
      this.funcionario = data.dados;
    });
  }

  editarFuncionario(funcionario: Funcionario) {
    this.funcionarioService
      .UpdateFuncionario(funcionario)
      .subscribe((data) => {
        this.router.navigate(['/']);
      });
  }
}
