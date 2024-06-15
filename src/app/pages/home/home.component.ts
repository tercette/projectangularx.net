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
  funcionarios: Funcionario[] = [];
  funcionariosGeral: Funcionario[] = [];
  ngOnInit(): void {
    this.funcionarioService.GetFuncionarios().subscribe((res) => {
      console.table(res.dados);
      const dados = res.dados;
      dados.map((item) => {
        item.dataDeCriacao = new Date(item.dataDeCriacao!).toLocaleDateString();
        item.dataDeAlteracao = new Date(
          item.dataDeAlteracao!
        ).toLocaleDateString();
        this.funcionarios = res.dados;
        this.funcionariosGeral = res.dados;
      });
    });
  }

  filtrarFuncionarios(evento: any) {
    const target = evento.target.value.toLowerCase();
    this.funcionarios = this.funcionariosGeral.filter((funcionario) => {
      return funcionario.nome.toLowerCase().includes(target);
    });
  }
}
