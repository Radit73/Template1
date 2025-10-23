import { Icon } from './Icon'
import { sectionDescriptions } from '../data/mockData'
import type { NotificationItem } from '../data/mockData'
import type { SectionKey } from '../types'

type TopbarProps = {
  onToggleSidebar: () => void
  activeSection: SectionKey
  notifications: NotificationItem[]
}

export function Topbar({ onToggleSidebar, activeSection, notifications }: TopbarProps) {
  return (
    <header className="topbar">
      <div className="topbar__left">
        <button className="topbar__toggle" onClick={onToggleSidebar} aria-label="Buka atau tutup menu navigasi">
          <span />
          <span />
          <span />
        </button>
        <div>
          <p className="topbar__section">{sectionLabel(activeSection)}</p>
          <p className="topbar__description">{sectionDescriptions[activeSection]}</p>
        </div>
      </div>

      <div className="topbar__right">
        <div className="topbar__search">
          <Icon name="search" className="topbar__search-icon" />
          <input type="search" placeholder="Cari kreator, unggahan, atau tagar..." aria-label="Cari di FotoBlog Admin" />
        </div>
        <div className="topbar__actions">
          <button className="topbar__button" type="button" aria-label="Lihat aktivitas terbaru">
            <Icon name="lightning" />
          </button>
          <div className="topbar__notifications">
            <button className="topbar__button topbar__button--pill" type="button" aria-label="Lihat notifikasi">
              <Icon name="bell" />
              <span className="topbar__badge">{notifications.length}</span>
            </button>
            <div className="topbar__dropdown">
              <p className="topbar__dropdown-title">Notifikasi terbaru</p>
              <ul>
                {notifications.map((item) => (
                  <li key={item.id}>
                    <p className="topbar__dropdown-text">{item.title}</p>
                    <span className="topbar__dropdown-time">{item.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <button className="topbar__button" type="button" aria-label="Pengaturan akun">
            <Icon name="settings" />
          </button>
          <div className="topbar__profile">
            <div className="topbar__profile-avatar">AP</div>
            <div>
              <p className="topbar__profile-name">Anindya Putri</p>
              <p className="topbar__profile-role">Lead Community</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

function sectionLabel(section: SectionKey) {
  switch (section) {
    case 'dashboard':
      return 'Dasbor Komunitas'
    case 'beranda':
      return 'Beranda Foto'
    case 'profile':
      return 'Profil Kreator'
    case 'template':
      return 'Template & Design System'
    default:
      return 'FotoBlog'
  }
}
