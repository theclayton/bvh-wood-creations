declare global {
  interface Window {
    __NUXT__: { state: RootState };
  }
}

interface Page {
  title: string;
  subtitle?: string;
  slug?: string;
  content: string;
  featuredImage?: string;
  seoDescription?: string;
  seoMetaImage?: string;
}
