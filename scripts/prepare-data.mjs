import { loadSiteData, writeSiteData } from "./blog-data.mjs"

const siteData = await loadSiteData()
await writeSiteData(siteData)
console.log(`Prepared ${siteData.posts.length} blog posts.`)
