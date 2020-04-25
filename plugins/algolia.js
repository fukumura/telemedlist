import * as algoliasearch from 'algoliasearch'

const searchClient = algoliasearch(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_SEARCH_ONLY_API_KEY
)

export default searchClient
