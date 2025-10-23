import { useState } from 'react'
import { Sidebar } from './components/Sidebar'
import { Topbar } from './components/Topbar'
import { DashboardSection } from './components/sections/DashboardSection'
import { BerandaSection } from './components/sections/BerandaSection'
import { ProfileSection } from './components/sections/ProfileSection'
import { TemplateSection } from './components/sections/TemplateSection'
import {
  menuItems,
  notifications,
  sectionDescriptions,
  sidebarShortcuts,
  storageSummary,
  trendingTags,
} from './data/mockData'
import type { SectionKey } from './types'

function renderSection(section: SectionKey) {
  switch (section) {
    case 'dashboard':
      return <DashboardSection />
    case 'beranda':
      return <BerandaSection />
    case 'profile':
      return <ProfileSection />
    case 'template':
      return <TemplateSection />
    default:
      return <DashboardSection />
  }
}

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionKey>('dashboard')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleSelect = (section: SectionKey) => {
    setActiveSection(section)
    setSidebarOpen(false)
  }

  return (
    <div className={`app-shell ${sidebarOpen ? 'is-sidebar-open' : ''}`}>
      <Sidebar
        items={menuItems}
        trending={trendingTags}
        shortcuts={sidebarShortcuts}
        storage={storageSummary}
        activeSection={activeSection}
        onSelect={handleSelect}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <div className="app-shell__body">
        <Topbar onToggleSidebar={() => setSidebarOpen((prev) => !prev)} activeSection={activeSection} notifications={notifications} />
        <main className="app-shell__main" aria-live="polite" aria-label={sectionDescriptions[activeSection]}>
          {renderSection(activeSection)}
        </main>
      </div>
      {sidebarOpen && (
        <button
          type="button"
          className="app-shell__backdrop"
          aria-label="Tutup menu navigasi"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}
