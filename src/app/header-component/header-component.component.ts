import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-component',
  template: `<table>
              <tr>
                <td>Task Id</td>
                <td>Task</td>
              </tr>
            </table>`,
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
