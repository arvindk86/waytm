import { Component } from '@angular/core';

import { FaqPage } from '../faq/faq';
import { MallPage } from '../mall/mall';
import { BankPage } from '../bank/bank';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MallPage;
  tab3Root = BankPage;
  tab4Root = FaqPage;

  constructor() {

  }
}
