export type SectionKey = 'dashboard' | 'beranda' | 'profile' | 'template'

export type IconName =
  | 'grid'
  | 'camera'
  | 'upload'
  | 'chart'
  | 'users'
  | 'lightning'
  | 'calendar'
  | 'shield'
  | 'bell'
  | 'settings'
  | 'spark'
  | 'trend-up'
  | 'image'
  | 'heart'
  | 'comment'
  | 'bookmark'
  | 'share'
  | 'globe'
  | 'inbox'
  | 'play'
  | 'check'
  | 'search'
  | 'login'
  | 'download'
  | 'palette'
  | 'layers'
  | 'layout'
  | 'sliders'
  | 'home'
  | 'user'
  | 'tag'
  | 'question'
  | 'logout'

export interface MenuItem {
  id: SectionKey
  label: string
  caption: string
  icon: IconName
  badge?: string
}
