import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
        <h1>{{pageTitle}}, Welcome</h1>
        <div>This is a div in a Component</div>
        <pm-products></pm-products>
    `
})
export class AppComponent { 
    pageTitle: string = 'Acme Product Management';
}
