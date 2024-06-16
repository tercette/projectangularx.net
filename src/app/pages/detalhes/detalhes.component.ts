import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from 'src/app/models/funcionarios';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css'],
})
export class DetalhesComponent implements OnInit {

funcionario?: Funcionario;
id!: number ;

  constructor(
    private funcionarioService: FuncionarioService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.funcionarioService.GetFuncionario(this.id).subscribe((data) => {
      this.funcionario = data.dados;
      data.dados.dataDeCriacao = new Date(data.dados.dataDeCriacao!).toLocaleDateString('pt-BR');
        data.dados.dataDeAlteracao = new Date(data.dados.dataDeAlteracao!).toLocaleDateString('pt-BR');
    })
  }

  salvarFuncionario(){
    this.funcionarioService.InativaFuncionario(this.id).subscribe(data => {
      console.log(data);
    });
  }

  inativarFuncionario(){
    this.salvarFuncionario()
    this.router.navigate(['/'])
  }

}
