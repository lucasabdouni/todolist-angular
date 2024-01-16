import { Component } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  public taskList: Array<TaskList> = [
    {
      task: "Minha nova Task",
      checked: true
    },
    {
      task: "Minha nova Task 2",
      checked: false
    }
  ];

  constructor() {}

  public deleteItemTaskList(event: number){
    this.taskList.splice(event, 1)
  }

  public deleteAllTaskList(){
    const confirm = window.confirm("Você deseja realmente Deletar tudo?")

    if (confirm) {
      this.taskList = []
    }
  }
}
