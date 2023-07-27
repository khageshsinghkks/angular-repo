import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {

  @Output() serverCreated = new EventEmitter<{serverName:string, serverContent:string}>();
  @Output('bpCreated') bluePrintCreate = new EventEmitter<{serverName:string, serverContent:string}>();
  newServerName = '';
  newServerContent = '';

  onAddServer(serverNameInput) {
    this.serverCreated.emit({serverName: serverNameInput.value, serverContent: this.newServerContent});
  }

  onAddBlueprint(serverNameInput) {
    this.bluePrintCreate.emit({serverName: serverNameInput.value, serverContent: this.newServerContent});
  }

}
