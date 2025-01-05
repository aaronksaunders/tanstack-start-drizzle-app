/**
 * Generates SEO-related meta tags for a page.
 * @param options - An object containing SEO-related information.
 * @param options.title - The title of the page.
 * @param options.description - A brief description of the page content.
 * @param options.keywords - Comma-separated keywords relevant to the page.
 * @param options.image - URL of an image to be used in social media shares.
 * @returns An array of meta tag objects to be used in the page head.
 */
export const seo = ({
  title,
  description,
  keywords,
  image,
}: {
  title: string;
  description?: string;
  image?: string;
  keywords?: string;
}) => {
  const tags = [
    { title },
    { name: 'description', content: description },
    { name: 'keywords', content: keywords },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:creator', content: '@tannerlinsley' },
    { name: 'twitter:site', content: '@tannerlinsley' },
    { name: 'og:type', content: 'website' },
    { name: 'og:title', content: title },
    { name: 'og:description', content: description },
    ...(image
      ? [
          { name: 'twitter:image', content: image },
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'og:image', content: image },
        ]
      : []),
  ];

  return tags;
};
