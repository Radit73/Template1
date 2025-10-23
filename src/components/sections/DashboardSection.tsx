import { Icon } from '../Icon'
import { dashboardFaq, dashboardStats, dashboardUpdates } from '../../data/mockData'
import type { IconName } from '../../types'

export function DashboardSection() {
  return (
    <div className="section-stack">
      <section className="section-card section-card--hero">
        <div className="dashboard-hero">
          <div>
            <p className="eyebrow">FotoBlog Admin</p>
            <h2>Selamat datang!</h2>
            <p>
              Pantau perkembangan komunitasmu setiap hari. Kami rangkum total unggahan, interaksi, dan update penting agar kamu bisa fokus
              memberi spotlight terbaik untuk kreator.
            </p>
            <div className="hero-actions">
              <button type="button" className="btn-variant btn-variant--primary">
                <Icon name="upload" /> Unggah Foto Baru
              </button>
              <button type="button" className="btn-variant btn-variant--outline">
                <Icon name="calendar" /> Jadwalkan Rilis
              </button>
            </div>
          </div>
          <div className="hero-statistics">
            {dashboardStats.slice(0, 2).map((stat) => (
              <article key={stat.id}>
                <p>{stat.label}</p>
                <strong>{stat.value}</strong>
                <span className={stat.trend === 'up' ? 'is-positive' : 'is-negative'}>{stat.delta}</span>
                <small>{stat.note}</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-card">
        <div className="section-card__header">
          <div>
            <h2>Statistik Komunitas</h2>
            <p>Ikhtisar real-time aktivitas utama komunitas FotoBlog hari ini.</p>
          </div>
          <button type="button" className="button button--ghost">
            <Icon name="calendar" /> 7 Hari Terakhir
          </button>
        </div>
        <div className="stats-grid">
          {dashboardStats.map((stat) => (
            <article key={stat.id} className="metric-card">
              <div className="metric-card__header">
                <Icon name={statIcon(stat.id)} className="metric-card__icon" />
                <span className={`metric-card__trend metric-card__trend--${stat.trend}`}>{stat.delta}</span>
              </div>
              <p className="metric-card__label">{stat.label}</p>
              <p className="metric-card__value">{stat.value}</p>
              <p className="metric-card__hint">{stat.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-card section-card--split">
        <div>
          <div className="section-card__header">
            <div>
              <h2>Aktivitas Terbaru</h2>
              <p>Update penting dari komunitas, event, dan automasi sistem.</p>
            </div>
            <button type="button" className="button button--ghost">
              <Icon name="spark" /> Lihat semua
            </button>
          </div>
          <ul className="timeline-list">
            {dashboardUpdates.map((item) => (
              <li key={item.id} className="timeline-item">
                <div className="timeline-icon">
                  <Icon name={item.icon} />
                </div>
                <div className="timeline-content">
                  <p className="timeline-title">{item.title}</p>
                  <p className="timeline-detail">{item.detail}</p>
                  <span className="timeline-time">{item.time}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="faq-panel">
          <div className="section-card__header">
            <div>
              <h2>FAQ</h2>
              <p>Pertanyaan yang sering admin ajukan saat mengelola FotoBlog.</p>
            </div>
          </div>
          <div className="faq-list">
            {dashboardFaq.map((faq) => (
              <details key={faq.id}>
                <summary>
                  <Icon name="question" />
                  {faq.question}
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function statIcon(id: string): IconName {
  if (id === 'uploads') return 'upload'
  if (id === 'likes') return 'heart'
  if (id === 'comments') return 'comment'
  return 'spark'
}
