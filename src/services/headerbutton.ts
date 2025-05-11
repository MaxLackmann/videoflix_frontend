// @Injectable({ providedIn: 'root' })
// export class AuthService {
//   private loggedIn = new BehaviorSubject<boolean>(false);
//   isLoggedIn$ = this.loggedIn.asObservable();

//   login() {
//     this.loggedIn.next(true);
//   }

//   logout() {
//     this.loggedIn.next(false);
//   }

//   get isLoggedIn(): boolean {
//     return this.loggedIn.value;
//   }
// }


// export class HeaderComponent {
//     isLoggedIn$ = this.authService.isLoggedIn$;
//     currentRoute = '';
  
//     constructor(
//       private authService: AuthService,
//       private router: Router
//     ) {
//       this.router.events.subscribe(event => {
//         if (event instanceof NavigationEnd) {
//           this.currentRoute = event.urlAfterRedirects;
//         }
//       });
//     }
  
//     logout() {
//       this.authService.logout();
//       this.router.navigate(['/']);
//     }
//   }
  

//   <!-- nur anzeigen, wenn NICHT auf /login UND NICHT eingeloggt -->
// <button
//   *ngIf="(isLoggedIn$ | async) === false && currentRoute !== '/login'"
//   routerLink="/login"
//   class="btn">
//   Log in
// </button>

// <!-- nur anzeigen, wenn eingeloggt -->
// <button
//   *ngIf="(isLoggedIn$ | async) === true"
//   (click)="logout()"
//   class="btn">
//   Log out
// </button>




