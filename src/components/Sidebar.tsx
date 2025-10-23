import { Icon } from './Icon'
import type { MenuItem, SectionKey } from '../types'

type Shortcut = {
  label: string
  icon: Parameters<typeof Icon>[0]['name']
  description: string
}

type SidebarProps = {
  items: MenuItem[]
  trending: string[]
  shortcuts: Shortcut[]
  storage: {
    percentage: number
    used: string
    total: string
    updated: string
  }
  activeSection: SectionKey
  onSelect: (section: SectionKey) => void
  isOpen: boolean
  onClose: () => void
}

export function Sidebar({
  items,
  trending,
  shortcuts,
  storage,
  activeSection,
  onSelect,
  isOpen,
  onClose,
}: SidebarProps) {
  return (
    <aside className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}>
      <div className="sidebar__brand">
        <button className="sidebar__close" onClick={onClose} aria-label="Tutup menu navigasi">
          <span aria-hidden="true">&times;</span>
        </button>
        <div className="sidebar__avatar">FB</div>
        <div>
          <p className="sidebar__title">FotoBlog</p>
          <p className="sidebar__subtitle">Admin Experience</p>
        </div>
      </div>

      <nav className="sidebar__menu">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`sidebar__link ${activeSection === item.id ? 'is-active' : ''}`}
            onClick={() => onSelect(item.id)}
          >
            <Icon name={item.icon} className="sidebar__icon" />
            <div className="sidebar__meta">
              <span className="sidebar__label">{item.label}</span>
              <span className="sidebar__caption">{item.caption}</span>
            </div>
            {item.badge && <span className="sidebar__badge">{item.badge}</span>}
          </button>
        ))}
      </nav>

      <div className="sidebar__section">
        <p className="sidebar__section-title">Trending tags</p>
        <div className="sidebar__tags">
          {trending.map((tag) => (
            <span key={tag} className="sidebar__tag">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="sidebar__section">
        <p className="sidebar__section-title">Shortcut kreator</p>
        <ul className="sidebar__shortcut-list">
          {shortcuts.map((shortcut) => (
            <li key={shortcut.label}>
              <div className="sidebar__shortcut">
                <div className="sidebar__shortcut-avatar">
                  <Icon name={shortcut.icon} />
                </div>
                <div>
                  <p className="sidebar__shortcut-label">{shortcut.label}</p>
                  <p className="sidebar__shortcut-caption">{shortcut.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar__storage">
        <div className="sidebar__storage-header">
          <Icon name="spark" className="sidebar__storage-icon" />
          <span>Media Storage</span>
        </div>
        <p className="sidebar__storage-usage">
          {storage.used} / {storage.total}
        </p>
        <div className="sidebar__progress">
          <div className="sidebar__progress-bar" style={{ width: `${storage.percentage}%` }} />
        </div>
        <p className="sidebar__storage-caption">Pembaruan {storage.updated}</p>
      </div>
    </aside>
  )
}
