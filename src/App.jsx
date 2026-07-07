import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectPage from './pages/ProjectPage'
import WorkshopLayout from './workshop/WorkshopLayout'
import WorkshopOverviewPage from './workshop/pages/WorkshopOverviewPage'
import WorkshopTokensPage from './workshop/pages/WorkshopTokensPage'
import WorkshopColorsPage from './workshop/pages/WorkshopColorsPage'
import WorkshopSpacingPage from './workshop/pages/WorkshopSpacingPage'
import WorkshopTypographyPage from './workshop/pages/WorkshopTypographyPage'
import WorkshopIconsPage from './workshop/pages/WorkshopIconsPage'
import WorkshopButtonsPage from './workshop/pages/WorkshopButtonsPage'
import WorkshopComponentsPage from './workshop/pages/WorkshopComponentsPage'
import WorkshopPatternsPage from './workshop/pages/WorkshopPatternsPage'

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="projects/:slug" element={<ProjectPage />} />
          </Route>

          <Route path="workshop" element={<WorkshopLayout />}>
            <Route index element={<WorkshopOverviewPage />} />
            <Route path="tokens" element={<WorkshopTokensPage />} />
            <Route path="colors" element={<WorkshopColorsPage />} />
            <Route path="spacing" element={<WorkshopSpacingPage />} />
            <Route path="typography" element={<WorkshopTypographyPage />} />
            <Route path="icons" element={<WorkshopIconsPage />} />
            <Route path="buttons" element={<WorkshopButtonsPage />} />
            <Route path="components" element={<WorkshopComponentsPage />} />
            <Route path="patterns" element={<WorkshopPatternsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
