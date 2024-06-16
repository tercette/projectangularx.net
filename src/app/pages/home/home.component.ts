import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/models/funcionarios';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private funcionarioService: FuncionarioService) {}
  funcionario: Funcionario[] = [];
  funcionariosGeral: Funcionario[] = [];
  colunas = ['Situacao', 'Nome', 'Sobrenome', 'Departamento', 'Acoes', 'Excluir'];
  ngOnInit(): void {
    this.funcionarioService.GetFuncionarios().subscribe((res) => {
      const dados = res.dados;
      dados.map((item) => {
        item.dataDeCriacao = new Date(item.dataDeCriacao!).toLocaleDateString();
        item.dataDeAlteracao = new Date(
          item.dataDeAlteracao!
        ).toLocaleDateString();
        this.funcionario = res.dados;
        this.funcionariosGeral = res.dados;
      });
    });
  }

  filtrarFuncionarios(evento: any) {
    const target = evento.target.value.toLowerCase();
    this.funcionario = this.funcionariosGeral.filter((funcionario) => {
      return funcionario.nome.toLowerCase().includes(target);
    });
  }
}
