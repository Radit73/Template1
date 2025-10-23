import { Icon } from '../Icon'
import { templateButtons, templateCards, templateCharts, templateColors, templateGridOptions } from '../../data/mockData'
import type { TemplateCard } from '../../data/mockData'

export function TemplateSection() {
  return (
    <div className="section-stack">
      <section className="section-card">
        <div className="section-card__header section-card__header--split">
          <div>
            <h2>Grid Layout</h2>
            <p>Gunakan grid ini sebagai dasar tata letak di setiap halaman FotoBlog.</p>
          </div>
          <button type="button" className="button button--ghost">
            <Icon name="layout" /> Lihat panduan
          </button>
        </div>
        <div className="template-grid-options">
          {templateGridOptions.map((option, index) => (
            <article key={option.id} className={`template-grid-card ${index !== 1 ? 'animate-fade-up' : ''}`}>
              <header>
                <h3>{option.title}</h3>
                <span>{option.columns} kolom</span>
              </header>
              <p>{option.description}</p>
              <div className={`template-grid-frame template-grid-frame--${option.columns}`}>
                {Array.from({ length: option.columns }).map((_, index) => (
                  <span key={index} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-card">
        <div className="section-card__header section-card__header--split">
          <div>
            <h2>Palet Warna</h2>
            <p>Palet utama FotoBlog untuk menjaga konsistensi visual.</p>
          </div>
          <button type="button" className="button button--ghost">
            <Icon name="download" /> Unduh token warna
          </button>
        </div>
        <div className="template-color-grid">
          {templateColors.map((color, index) => (
            <article key={color.id} className={`template-color-card ${index % 2 === 0 ? 'animate-float' : ''}`}>
              <span className="template-color-swatch" style={{ backgroundColor: color.value }} />
              <div>
                <p>{color.name}</p>
                <strong>{color.value}</strong>
                <small>{color.usage}</small>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-card section-card--split">
        <div>
          <div className="section-card__header">
            <div>
              <h2>Variasi Tombol</h2>
              <p>Aksi yang konsisten untuk setiap interaksi pengguna.</p>
            </div>
          </div>
          <div className="template-button-grid">
            {templateButtons.map((button, index) => (
              <article
                key={button.id}
                className={`template-button-card template-button-card--${button.tone} ${
                  index === 0 ? 'animate-slide' : index === 2 ? 'animate-flash' : ''
                }`}
              >
                <button type="button" className={buttonClass(button.tone)}>
                  {button.label}
                </button>
                <p>{button.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div>
          <div className="section-card__header">
            <div>
              <h2>Komponen Kartu</h2>
              <p>Gunakan variasi kartu ini untuk panel informasi dan galeri.</p>
            </div>
          </div>
          <div className="template-card-grid">
            {templateCards.map((card, index) => (
              <article
                key={card.id}
                className={`template-card template-card--${card.layout} ${index === 2 ? 'animate-tilt' : ''}`}
              >
                {renderTemplateCard(card)}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-card">
        <div className="section-card__header section-card__header--split">
          <div>
            <h2>Chart Preview</h2>
            <p>Ragam visualisasi untuk statistik FotoBlog. Kombinasikan sesuai kebutuhan.</p>
          </div>
          <button type="button" className="button button--ghost">
            <Icon name="chart" /> Lihat dokumentasi
          </button>
        </div>
        <div className="template-chart-grid">
          {templateCharts.map((chart, index) => (
            <article key={chart.id} className={`template-chart template-chart--${chart.variant} ${index === 1 ? 'animate-wave' : ''}`}>
              <header>
                <h3>{chart.title}</h3>
                <p>{chart.description}</p>
              </header>
              <ChartPreview variant={chart.variant} primary={chart.primary} secondary={chart.secondary} />
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

function renderTemplateCard(card: TemplateCard) {
  if (card.layout === 'panel') {
    return (
      <>
        <header className="template-card__heading">
          <span className="template-card__badge">Highlight</span>
          <h3>{card.title}</h3>
        </header>
        <p>{card.description}</p>
        <ul className="template-card__list">
          <li>
            <Icon name="spark" /> Notifikasi event mingguan
          </li>
          <li>
            <Icon name="calendar" /> Jadwal sesi komunitas
          </li>
          <li>
            <Icon name="bell" /> Pengingat moderasi
          </li>
        </ul>
      </>
    )
  }

  if (card.layout === 'media') {
    return (
      <>
        <div className="template-card__media">
          <div className="template-card__media-preview" />
          <div className="template-card__media-overlay">
            <span className="media-chip">#GoldenHour</span>
            <p>Eksplorasi foto senja dengan tone dramatis.</p>
          </div>
        </div>
        <footer className="template-card__footer">
          <span>
            <Icon name="heart" /> 1.2K
          </span>
          <span>
            <Icon name="comment" /> 128
          </span>
          <span>
            <Icon name="share" /> 32
          </span>
        </footer>
      </>
    )
  }

  return (
    <>
      <div className="template-card__stat">
        <strong>82%</strong>
        <span>Retention kreator aktif</span>
      </div>
      <p>{card.description}</p>
      <div className="template-card__preview template-card__preview--stat">
        <span />
        <span />
        <span />
      </div>
    </>
  )
}

function buttonClass(tone: string) {
  if (tone === 'primary') return 'btn-variant btn-variant--primary'
  if (tone === 'neutral') return 'btn-variant btn-variant--ghost'
  if (tone === 'outline') return 'btn-variant btn-variant--outline'
  return 'btn-variant btn-variant--warning'
}

type ChartPreviewProps = {
  variant: 'line' | 'bar' | 'donut'
  primary: string
  secondary: string
}

function ChartPreview({ variant, primary, secondary }: ChartPreviewProps) {
  if (variant === 'line') {
    return (
      <svg viewBox="0 0 160 90" className="template-chart__viz" preserveAspectRatio="none">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={primary} stopOpacity="0.4" />
            <stop offset="100%" stopColor={primary} stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0 60 L30 35 L60 45 L90 25 L120 40 L150 18" stroke={primary} fill="none" strokeWidth="3" />
        <polygon points="0,90 0,60 30,35 60,45 90,25 120,40 150,18 150,90" fill="url(#lineGradient)" />
        <path d="M0 55 L30 50 L60 32 L90 40 L120 28 L150 35" stroke={secondary} strokeWidth="2" fill="none" strokeDasharray="6 6" />
      </svg>
    )
  }

  if (variant === 'bar') {
    return (
      <div className="template-chart__bars">
        {[42, 68, 54, 80, 66].map((value, index) => (
          <span
            key={index}
            style={{
              height: `${value}%`,
              background: index % 2 === 0 ? primary : secondary,
            }}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="template-chart__donut">
      <svg viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="32" stroke={secondary} strokeWidth="18" fill="none" opacity={0.3} />
        <circle
          className="template-chart__donut-ring"
          cx="50"
          cy="50"
          r="32"
          stroke={primary}
          strokeWidth="18"
          fill="none"
          strokeDasharray="150 120"
          strokeDashoffset="25"
        />
      </svg>
      <div className="template-chart__donut-label">
        <strong>68%</strong>
        <span>Mobile users</span>
      </div>
    </div>
  )
}
