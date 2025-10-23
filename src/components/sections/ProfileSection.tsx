import { useMemo, useState } from 'react'
import { Icon } from '../Icon'
import { profileActivities, profileChart, profileStats } from '../../data/mockData'
import type { ProfileActivity } from '../../data/mockData'

const authTabs: { id: AuthMode; label: string }[] = [
  { id: 'login', label: 'Masuk' },
  { id: 'register', label: 'Daftar' },
  { id: 'logout', label: 'Keluar' },
]

type AuthMode = 'login' | 'register' | 'logout'

export function ProfileSection() {
  const [activeAuth, setActiveAuth] = useState<AuthMode>('login')
  const linePoints = useMemo(() => buildPolyline(profileChart.map((point) => point.posts), 0), [])
  const likePoints = useMemo(() => buildPolyline(profileChart.map((point) => point.likes), 12), [])

  return (
    <div className="section-stack">
      <section className="section-card">
        <div className="section-card__header section-card__header--split">
          <div>
            <h2>Kelola Akun Kreator</h2>
            <p>Autentikasi, posting baru, dan insight performa kreator dalam satu tempat.</p>
          </div>
          <div className="chip-group">
            {authTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`chip ${activeAuth === tab.id ? 'is-active' : ''}`}
                onClick={() => setActiveAuth(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="profile-grid">
          <div className="profile-card profile-card--auth">{renderAuthForm(activeAuth)}</div>

          <div className="profile-card profile-card--composer">
            <h3>Buat Postingan</h3>
            <form>
              <label>
                Judul unggahan
                <input type="text" placeholder="Sunset trip di Kota Tua" />
              </label>
              <label>
                Deskripsi
                <textarea rows={3} placeholder="Ceritakan vibe, lokasi, atau tips editing yang digunakan..." />
              </label>
              <div className="profile-card__row">
                <label>
                  Tagar
                  <input type="text" placeholder="#GoldenHour #Street" />
                </label>
                <label>
                  Jadwal tayang
                  <input type="datetime-local" />
                </label>
              </div>
              <button type="submit" className="btn-variant btn-variant--outline">
                <Icon name="upload" /> Simpan draft
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="section-card">
        <div className="section-card__header">
          <div>
            <h2>Statistik Kreator</h2>
            <p>Lihat ringkasan performa kreator untuk satu minggu terakhir.</p>
          </div>
          <button type="button" className="button button--ghost">
            <Icon name="download" /> Unduh laporan
          </button>
        </div>

        <div className="profile-stats-grid">
          {profileStats.map((stat) => (
            <article key={stat.id} className="profile-stat">
              <p>{stat.label}</p>
              <strong>{stat.value}</strong>
              <span>{stat.delta}</span>
            </article>
          ))}
        </div>

        <div className="profile-chart">
          <div className="profile-chart__meta">
            <h3>Grafik Aktivitas</h3>
            <p>Jumlah posting dan total suka per hari.</p>
          </div>
          <svg viewBox="0 0 100 60" preserveAspectRatio="none">
            <polyline className="profile-chart__line profile-chart__line--posts" points={linePoints} />
            <polyline className="profile-chart__line profile-chart__line--likes" points={likePoints} />
            {profileChart.map((point, index) => {
              const x = (index / (profileChart.length - 1 || 1)) * 100
              return (
                <text key={point.label} x={`${x}%`} y="58" className="profile-chart__label">
                  {point.label}
                </text>
              )
            })}
          </svg>
          <div className="profile-chart__legend">
            <span>
              <i className="legend-dot legend-dot--posts" /> Postingan
            </span>
            <span>
              <i className="legend-dot legend-dot--likes" /> Suka
            </span>
          </div>
        </div>
      </section>

      <section className="section-card">
        <div className="section-card__header">
          <div>
            <h2>Aktivitas Terbaru</h2>
            <p>Monitor interaksi terakhir kreator untuk menjaga kualitas komunitas.</p>
          </div>
        </div>
        <ul className="activity-list">
          {profileActivities.map((activity) => (
            <li key={activity.id} className={`activity-item activity-item--${activity.type}`}>
              <div className="activity-icon">
                <Icon name={activityIcon(activity.type)} />
              </div>
              <div>
                <p className="activity-title">{activity.title}</p>
                <p className="activity-detail">{activity.detail}</p>
              </div>
              <span className="activity-time">{activity.time}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

function activityIcon(type: ProfileActivity['type']) {
  if (type === 'upload') return 'upload'
  if (type === 'comment') return 'comment'
  return 'users'
}

function buildPolyline(values: number[], offset = 0) {
  const max = Math.max(...values, 1)
  const min = Math.min(...values)
  const range = Math.max(max - min, 1)

  return values
    .map((value, index) => {
      const x = (index / (values.length - 1 || 1)) * 100
      const normalized = (value - min) / range
      const y = 50 - normalized * 35 - offset * 0.05
      return `${x.toFixed(2)},${y.toFixed(2)}`
    })
    .join(' ')
}

function renderAuthForm(mode: AuthMode) {
  if (mode === 'login') {
    return (
      <>
        <h3>Masuk ke FotoBlog</h3>
        <form>
          <label>
            Email
            <input type="email" placeholder="kamu@fotoblog.id" />
          </label>
          <label>
            Kata sandi
            <input type="password" placeholder="••••••••" />
          </label>
          <div className="profile-card__row">
            <label className="profile-checkbox">
              <input type="checkbox" defaultChecked /> Ingat saya
            </label>
            <button type="button" className="link-button">
              Lupa sandi?
            </button>
          </div>
          <button type="submit" className="btn-variant btn-variant--primary">
            <Icon name="login" /> Masuk
          </button>
        </form>
      </>
    )
  }

  if (mode === 'register') {
    return (
      <>
        <h3>Daftar Kreator Baru</h3>
        <form>
          <label>
            Nama lengkap
            <input type="text" placeholder="Nama lengkap kamu" />
          </label>
          <label>
            Email
            <input type="email" placeholder="kamu@fotoblog.id" />
          </label>
          <div className="profile-card__row">
            <label>
              Kata sandi
              <input type="password" placeholder="Minimal 8 karakter" />
            </label>
            <label>
              Konfirmasi
              <input type="password" placeholder="Ulangi kata sandi" />
            </label>
          </div>
          <button type="submit" className="btn-variant btn-variant--outline">
            <Icon name="user" /> Buat akun
          </button>
        </form>
      </>
    )
  }

  return (
    <>
      <h3>Sesi Aktif</h3>
      <div className="profile-logout-card">
        <div className="profile-logout-user">
          <div className="profile-card__avatar">AP</div>
          <div>
            <p>Anindya Putri</p>
            <span>@anindya.photo</span>
          </div>
        </div>
        <p>Kamu sedang masuk sebagai Admin komunitas. Gunakan tombol di bawah apabila ingin mengakhiri sesi.</p>
        <button type="button" className="btn-variant btn-variant--warning">
          <Icon name="logout" /> Keluar dari akun
        </button>
      </div>
    </>
  )
}
