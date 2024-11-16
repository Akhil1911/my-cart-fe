import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  navbarCloseState: boolean = true;
  isMobile: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((result) => {
        console.log(result);
        this.isMobile = result.matches;
        if (this.isMobile) {
          this.navbarCloseState = true;
        }
      });
  }

  toggleNavbar() {
    this.navbarCloseState = !this.navbarCloseState;
  }
}
