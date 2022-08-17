import sanityClient from '@sanity/client';
import moment from 'moment';

export default sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: moment(new Date()).format('YYYY-MM-DD'),
  token: process.env.SANITY_TOKEN,
  useCdn: true,
});
