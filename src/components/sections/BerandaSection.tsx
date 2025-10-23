import { Icon } from '../Icon'
import { feedCollections, feedPosts, trendingTags } from '../../data/mockData'

const activeFilters = ['Semua', 'Kreator Favorit', 'Sedang Trending']

export function BerandaSection() {
  return (
    <div className="section-stack">
      <section className="section-card">
        <div className="section-card__header section-card__header--split">
          <div>
            <h2>Beranda Foto</h2>
            <p>Kurasi unggahan terbaru komunitas, lengkap dengan statistik suka dan komentar.</p>
          </div>
          <div className="chip-group">
            {activeFilters.map((filter, index) => (
              <button key={filter} type="button" className={`chip ${index === 0 ? 'is-active' : ''}`}>
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="feed-grid">
          {feedPosts.map((post) => (
            <article key={post.id} className="feed-card">
              <div
                className="feed-card__media"
                style={{ backgroundImage: `url(https://picsum.photos/seed/${post.imageSeed}/500/300)` }}
              />
              <div className="feed-card__body">
                <div className="feed-card__author">
                  <div className="feed-card__avatar">{initials(post.author)}</div>
                  <div>
                    <p>{post.author}</p>
                    <span>{post.handle}</span>
                  </div>
                  <span className="feed-card__time">{post.uploaded}</span>
                </div>
                <p className="feed-card__caption">{post.caption}</p>
                <div className="feed-card__tags">
                  {post.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="feed-card__stats">
                  <span>
                    <Icon name="heart" /> {formatNumber(post.likes)} suka
                  </span>
                  <span>
                    <Icon name="comment" /> {post.comments} komentar
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-card section-card--split">
        <div>
          <div className="section-card__header">
            <div>
              <h2>Tagar Populer</h2>
              <p>Pakailah tagar berikut agar unggahan kreator cepat ditemukan.</p>
            </div>
            <button type="button" className="button button--ghost">
              <Icon name="tag" /> Kelola Tagar
            </button>
          </div>
          <div className="tag-cloud">
            {trendingTags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <div className="tag-info">
            <Icon name="spark" />
            <p>Tagar dengan warna lebih pekat menunjukkan lonjakan penggunaan dalam 24 jam terakhir.</p>
          </div>
        </div>

        <div>
          <div className="section-card__header">
            <div>
              <h2>Koleksi Pilihan</h2>
              <p>Galeri hasil kurasi tim komunitas, siap ditampilkan di beranda utama.</p>
            </div>
          </div>
          <div className="collection-grid">
            {feedCollections.map((collection) => (
              <article key={collection.id} className="collection-card" style={{ backgroundImage: collection.palette }}>
                <h3>{collection.title}</h3>
                <p>{collection.description}</p>
                <span>{collection.count} foto</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function formatNumber(value: number) {
  if (value < 1000) return value.toString()
  if (value < 10000) return `${(value / 1000).toFixed(1)}K`
  return `${Math.round(value / 1000)}K`
}
