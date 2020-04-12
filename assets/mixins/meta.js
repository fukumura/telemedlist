export default {
  asyncData (context) {
    return {
      baseName: context.env.baseName,
      baseDesc: context.env.baseDesc,
      baseUrl: context.env.baseUrl,
      baseOgp: context.env.baseOgp
    }
  },
  head () {
    const head = { meta: [] }

    // タイトル
    if (this.meta.title) {
      const title = `${this.meta.title} - ${this.baseName}`
      head.title = title
      head.meta.push({ hid: 'og:title', property: 'og:title', content: title })
    }

    // ディスクリプション
    if (this.meta.description) {
      head.meta.push({ hid: 'description', name: 'description', content: this.meta.description })
      head.meta.push({ hid: 'og:description', property: 'og:description', content: this.meta.description })
    } else if (!this.meta.description && this.meta.title) {
      const disc = `${this.baseName}サイトの${this.meta.title}ページです。${this.baseDesc}`
      head.meta.push({ hid: 'description', name: 'description', content: disc })
      head.meta.push({ hid: 'og:description', property: 'og:description', content: disc })
    }

    // ページタイプ
    if (this.meta.type) {
      head.meta.push({ hid: 'og:type', property: 'og:type', content: this.meta.type })
    } else if (this.$route.path === '/') {
      head.meta.push({ hid: 'og:type', property: 'og:type', content: 'website' })
    }

    // ページURL
    const url = `${this.baseUrl}${this.$router.history.base}${this.$route.path}`
    head.meta.push({ hid: 'og:url', property: 'og:url', content: url })

    // OGP画像URL
    if (this.meta.image) {
      const imageUrl = `${this.baseUrl}${this.$router.history.base}${this.baseOgp}${this.meta.image}`
      head.meta.push({ hid: 'og:image', property: 'og:image', content: imageUrl })
    }

    return head
  }
}
