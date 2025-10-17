# Core Module - Future Implementation Guide

**Current State**: Clean core module with no services, guards, or interceptors.
**Purpose**: This module is ready for future implementation of authentication, services, and HTTP interceptors.

## Guards (Authentication & Authorization)

When you need to implement authentication guards, create the following files:

### Auth Guard (`guards/auth.guard.ts`)
```typescript
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  
  if (authService.isAuthenticated()) {
    return true;
  }
  
  router.navigate(['/login']);
  return false;
};
```

### Guest Guard (`guards/guest.guard.ts`)
```typescript
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const guestGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  
  if (!authService.isAuthenticated()) {
    return true;
  }
  
  router.navigate(['/dashboard']);
  return false;
};
```

## HTTP Interceptors

When you need to implement HTTP interceptors, create the following files:

### Auth Interceptor (`interceptors/auth.interceptor.ts`)
```typescript
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.getToken();
  
  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  
  return next(req);
};
```

### Error Interceptor (`interceptors/error.interceptor.ts`)
```typescript
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { NotificationService } from '../services/notification.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const notificationService = inject(NotificationService);
  
  return next(req).pipe(
    catchError(error => {
      notificationService.showError('حدث خطأ في الطلب');
      return throwError(() => error);
    })
  );
};
```

### Loading Interceptor (`interceptors/loading.interceptor.ts`)
```typescript
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';
import { LoadingService } from '../services/loading.service';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);
  
  loadingService.setLoading(true);
  
  return next(req).pipe(
    finalize(() => loadingService.setLoading(false))
  );
};
```

## App Configuration

To use these interceptors and guards, update `app.config.ts`:

```typescript
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { routes } from './app.routes';
import { authInterceptor, errorInterceptor, loadingInterceptor } from './core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([
      authInterceptor,
      errorInterceptor,
      loadingInterceptor
    ])),
  ],
};
```

## Route Configuration

To use guards in routes, update your route configuration:

```typescript
import { Routes } from '@angular/router';
import { authGuard, guestGuard } from './core';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./features/dashboard/pages/dashboard/dashboard.page'),
    canActivate: [authGuard]
  },
  {
    path: 'login',
    loadComponent: () => import('./features/auth/pages/login/login.page'),
    canActivate: [guestGuard]
  }
];
```
