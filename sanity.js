import sanityClient from '@sanity/client';

export default sanityClient({
  projectId : 'bjhivepu',
  dataset: 'production',
  useCdn: true,
})