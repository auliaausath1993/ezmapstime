import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { Ionic4DatepickerModule } from
  '@logisticinfotech/ionic4-datepicker';
import { Ionic4DatepickerModalComponent } from '@logisticinfotech/ionic4-datepicker';
import * as moment_ from 'moment';
import { MapPage } from '../map/map.page';
import { ModalCatatanPage } from '../modal-catatan/modal-catatan.page';
import { SelectPackagePage } from '../select-package/select-package.page';
const moment = moment_;

@Component({
  selector: 'app-bookservice',
  templateUrl: './bookservice.page.html',
  styleUrls: ['./bookservice.page.scss'],
})
export class BookservicePage implements OnInit {
  public name: string;
  public email: string;
  public date: string;
  catatan : any
  package_price : any = 0.00
  package_durasi :  any = 0
  package_luas : any = '0 - 0'
  input : any = {}

  constructor(
    public modalCtrl: ModalController,
    private navCtrl : NavController
    ) { }

  submit(){
    console.log('DATE', this.mydate);
    this.navCtrl.navigateRoot('order-success')
  }

  mydate = '11-12-2018';

  datePickerObj: any = {};
  datePickerObjPtBr: any = {};
  mydatePtBr = '06 Fev 2019';

  isDisableDatePicker: false;
  monthsList = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  weeksList = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  selectedDate;

  

  ngOnInit() {
    const disabledDates: Date[] = [
      new Date(1545911005644),
      new Date(),
      new Date(2018, 12, 12), // Months are 0-based, this is August, 10th.
      new Date('Wednesday, December 26, 2018'), // Works with any valid Date formats like long format
      new Date('12-14-2018') // Short format
    ];

    // EXAMPLE OBJECT
    this.datePickerObj = {
      dateFormat: 'DD-MM-YYYY',
      fromDate: new Date('2010-01-01'), // default null
      yearInAscending: true
    };

    this.datePickerObjPtBr = {
      dateFormat: 'DD MMM YYYY',
      closeOnSelect: true,
      setLabel: 'OK',
      todayLabel: 'Hoje',
      closeLabel: 'Fechar',
      titleLabel: 'Selecione uma data',
      monthsList: [
        'Jan',
        'Fev',
        'Mar',
        'Abr',
        'Mai',
        'Jun',
        'Jul',
        'Ago',
        'Set',
        'Out',
        'Nov',
        'Dez'
      ],
      weeksList: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
      clearButton: false
      // momentLocale: 'pt-BR'
    };
  }

  onChangeDate() {
    console.log('onChangeDate date ', this.mydate);
  }

  onClickSubmit() {
    // console.log('onClickSubmit', this.dataForm.value);
  }

  async openDatePicker() {
    const datePickerObj = {
      inputdate: moment(new Date('2020-12-01')),
      closeOnSelect: true,
      titleLabel: 'Pilih tanggal',
      closeLabel: 'Batal',
      monthsList: [
        'Jan',
        'Feb',
        'March',
        'April',
        'May',
        'June',
        'July',
        'Aug',
        'Sept',
        'Oct',
        'Nov',
        'Dec'
      ],
      showTodayButton: false,
      weeksList: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      dateFormat: 'DD-MMM-YYYY',
      clearButton: true
    };

    const datePickerModal = await this.modalCtrl.create({
      component: Ionic4DatepickerModalComponent,
      cssClass: 'li-ionic4-datePicker',
      componentProps: { objConfig: datePickerObj }
    });
    await datePickerModal.present();

    datePickerModal.onDidDismiss().then(data => {
      // this.isModalOpen = false;
      console.log(data);
      this.selectedDate = data.data.date;
    });
  }

 async modalNote(){
   const modal =  await this.modalCtrl.create({
      component : ModalCatatanPage,
     cssClass: 'modal-catatan'
    })
   modal.onDidDismiss()
     .then((data) => {
      console.log('data modal',data);
      this.catatan = data.data
     })
   return await modal.present();
   
  }

  async modalMap(){
    const modal = await this.modalCtrl.create({
      component: MapPage,
      cssClass: 'modal-map'
    })
    modal.onDidDismiss()
      .then((data) => {
        console.log('data modal', data);
        this.catatan = data.data
      })
    return await modal.present();
  }

  async changePackage(){
    const modal = await this.modalCtrl.create({
      component: SelectPackagePage,
      cssClass: 'modal-select-package'
    })
    modal.onDidDismiss()
      .then((data) => {
        console.log('data modal', data.data);
        this.package_price = data.data.price
        this.package_luas = data.data.luas
        this.package_durasi = data.data.durasi
      })
    return await modal.present();
  }

}
