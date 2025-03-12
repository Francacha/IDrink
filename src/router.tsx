import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './layouts/Layout'
const IndexPage = lazy(() => import('./pages/IndexPage'))
const FavoritesPage = lazy(() => import('./pages/FavoritesPage'))
const AppPage = lazy(() => import('./pages/AppPage'));
const HowUse = lazy(() => import('./pages/HowUse'));
const WelcomePage = lazy(() => import('./pages/WelcomePage'));

export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path='/welcome' element={
          <Suspense fallback="Cargando...">
            <WelcomePage />
          </Suspense>
        } />
        <Route path='/' element={<Navigate to="/welcome" />} /> {/* 👈 Redirige al inicio siempre */}
           <Route element={<Layout />}>
              <Route path='/' element={
                  <Suspense fallback="Cargando...">
                      <IndexPage />
                  </Suspense>
              } index />
              <Route path='/favoritos' element={
                <Suspense fallback="Cargando...">
                    <FavoritesPage />
                </Suspense>
              } />
              <Route path='/app' element={
                <Suspense fallback="Cargando...">
                    <AppPage />
                </Suspense>
              } />
              <Route path='/use' element={
                <Suspense fallback="Cargando...">
                    <HowUse />
                </Suspense>
} />
           </Route>
        </Routes>
    </BrowserRouter>
  )
}
