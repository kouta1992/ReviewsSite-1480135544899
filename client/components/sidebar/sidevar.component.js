/**
 * Created by kotato on 2017/03/21.
 */
import angular from 'angular';
import accordion from 'angular-ui-bootstrap/src/accordion';

export class SidebarComponent {
  oneAtATime = true;
  groups = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
  ];
  items = ['Item 1', 'Item 2', 'Item 3'];


  isLoggedIn: Function;
  isAdmin: Function;
  getCurrentUser: Function;
  isCollapsed = true;

  status = {
    isCustomHeaderOpen: false,
    isFirstOpen: true,
    isFirstDisabled: false
  };

  constructor(Auth) {
    'ngInject';

    this.isLoggedIn = Auth.isLoggedInSync;
    this.isAdmin = Auth.isAdminSync;
    this.getCurrentUser = Auth.getCurrentUserSync;
    this.addItem = () => {
      var newItemNo = this.items.length + 1;
      this.items.push('Item ' + newItemNo);
    };

  }

}



export default angular.module('directives.sidebar', [accordion])
  .component('sidebar', {
    template: require('./sidebar.html'),
    controller: SidebarComponent
  })
  .name;