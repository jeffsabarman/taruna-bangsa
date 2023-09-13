import { groq } from 'next-sanity'

export const MAIN_CAROUSEL_IMAGES = groq`
*[_type == "mainCarouselImages" && !(_id in path('drafts.**'))] {
		_id,
    "alt": imageTitle,
    // "url": imageFile.asset->url,
    "urlSmall": imageFileSmall.asset->url,
    "url": imageFileLarge.asset->url,
		"link": clickLinkDestination
  }
`

export const NEWS_AND_EVENTS_HOME = groq`
*[_type == "newsEvents" && !(_id in path('drafts.**'))] | order(publishedAt desc) [0...4] {
  _id,
  "caption": title,
  "imageUrl": mainImage.asset->url,
}
`

export const ACADEMIC_KB_TK = groq`
// *[_type == "educations" && educationLevel == "KB/TK" && !(_id in path('drafts.**'))][0] {
*[_type == "academics" && educationLevel == "KB/TK" && !(_id in path('drafts.**'))][0] {
  _id,
  educationLevel,
  scheduleKBM,
  activities,
  extracurricular,
  extracurricularImages[] {
    "alt": imageTitle,
    "url": imageFile.asset->url
  },
  teachers[] {
    name,
    "role": jobTitle,
    "image": imageFile.asset->url
  }
}
`

export const ACADEMIC_SD = groq`
*[_type == "academics" && educationLevel == "SD" && !(_id in path('drafts.**'))][0] {
  _id,
  educationLevel,
  scheduleKBM,
  // typeOfAcitvity,
  activities,
  extracurricular,
  extracurricularImages[] {
    "alt": imageTitle,
    "url": imageFile.asset->url
  },
  teachers[] {
    name,
    "role": jobTitle,
    "image": imageFile.asset->url
  }
}
`

export const ACADEMIC_SMP = groq`
*[_type == "academics" && educationLevel == "SMP" && !(_id in path('drafts.**'))][0] {
  _id,
  educationLevel,
  scheduleKBM,
  // typeOfAcitvity,
  activities,
  extracurricular,
  extracurricularImages[] {
    imageTitle,
    "imageUrl": imageFile.asset->url
  },
  teachers[] {
    name,
    "role": jobTitle,
    "image": imageFile.asset->url
  }
}
`

export const ACADEMIC_SMA = groq`
*[_type == "academics" && educationLevel == "SMA" && !(_id in path('drafts.**'))][0] {
  _id,
  educationLevel,
  scheduleKBM,
  // typeOfAcitvity,
  activities,
  extracurricular,
  extracurricularImages[] {
    imageTitle,
    "imageUrl": imageFile.asset->url
  },
  teachers[] {
    name,
    "role": jobTitle,
    "image": imageFile.asset->url
  }
}
`

export const INSTITUTIONAL_ADMINSTRATOR = groq`
*[_type == "institutionalAdministrator" && !(_id in path('drafts.**'))] {
  _id,
  name,
  "role": jobTitle,
  "image": image.asset->url
}
`

export const FACIILITIES_IMAGES = groq`
*[_type == "facilitiesImages" && !(_id in path('drafts.**'))] {
  _id,
  imageTitle,
  "imageUrl": imageFile.asset->url
}
`

// export const YOUTUBE_EMBED = groq`
// *[_type == "socialMedia" && platformTitle == "Youtube Embed" && !(_id in path('drafts.**'))][0] {
//   _id,
//   platformTitle,
//   "iconUrl": iconFile.asset->url,
//   link
// }
// `;

export const YOUTUBE_EMBED = groq`
*[_type == "youtube" && !(_id in path('drafts.**'))][0] {
  _id,
  youtubeType,
  link
}
`

export const ALL_NEWS_AND_EVENTS = groq` // TODO: Add pagination
*[_type == "newsEvents" && !(_id in path('drafts.**'))  && isVisible == true && publishedAt < $today ] | order(publishedAt desc) [$start...$end] {
  _id,
  title,
  slug,
  description,
  "mainImageUrl": mainImage.asset->url,
  "mainImageCaption": mainImage.caption,
  publishedAt,
  // "bodySnippet": body[0]
}
`

export const NEWS_AND_EVENTS_COUNT = groq`
count(*[_type == "newsEvents" && !(_id in path('drafts.**')) && isVisible == true && publishedAt < $today] | order(publishedAt desc))
`

export const NEWS_AND_EVENTS_CONTENT = groq`
*[_type == "newsEvents" && slug.current == $slug][0]{
  _id,
  title,
  "mainImageUrl": mainImage.asset->url,
  "mainImageCaption": mainImage.caption,
  body,
  publishedAt,
}
`

export const INSTAGRAM_POSTS = groq`
*[_type == "instagram" && !(_id in path('drafts.**'))] | order(priority desc, _updatedAt desc) [0..2] {
  _id,
  postTitle,
  link,
  "image": imageFile.asset->url
}
`
