import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.page.html',
  styleUrls: ['./my-order.page.scss'],
})
export class MyOrderPage implements OnInit {
  pending : boolean = false
  ordered : boolean = false
  current : boolean = false
  done : boolean = false

  outlinePen : string = 'true'
  outlineOrd : string = 'true'
  outlineCur : string = 'true'
  outlineDon : string = 'true'
  
  
  constructor() { }

  ngOnInit() {
    this.pendingBtn()
  }

  pendingBtn(){
    this.pending = true
    this.ordered = false
    this.current = false
    this.done = false
    this.outlinePen = 'false'
    this.outlineOrd = 'true'
    this.outlineCur = 'true'
    this.outlineDon = 'true'
  }
  orderedBtn(){
    this.pending = false
    this.ordered = true
    this.current = false
    this.done = false
    this.outlinePen = 'true'
    this.outlineOrd = 'false'
    this.outlineCur = 'true'
    this.outlineDon = 'true'
  }
  currentBtn(){
    this.pending = false
    this.ordered = false
    this.current = true
    this.done = false
    this.outlinePen = 'true'
    this.outlineOrd = 'true'
    this.outlineCur = 'false'
    this.outlineDon = 'true'
  }
  doneBtn(){
    this.pending = false
    this.ordered = false
    this.current = false
    this.done = true
    this.outlinePen = 'true'
    this.outlineOrd = 'true'
    this.outlineCur = 'true'
    this.outlineDon = 'false'
  }

}
