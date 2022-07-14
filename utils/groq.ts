import groq from 'groq';

export const MAIN_CAROUSEL_IMAGES = groq`
*[_type == "mainCarouselImages" && !(_id in path('drafts.**'))] {
		_id,
    "alt": imageTitle,
    "url": imageFile.asset->url,
		"link": clickLinkDestination
  }
`;

export const NEWS_AND_EVENTS = groq`
*[_type == "newsEvents" && !(_id in path('drafts.**'))] {
  _id,
  "caption": title,
  "imageUrl": mainImage.asset->url,
}
`;

export const EDUCATIONS_KB_TK = groq`
*[_type == "educations" && educationLevel == "KB/TK" && !(_id in path('drafts.**'))][0] {
  _id,
  educationLevel,
  scheduleKBM,
  typeOfAcitvity,
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
`;

export const EDUCATIONS_SD = groq`
*[_type == "educations" && educationLevel == "SD" && !(_id in path('drafts.**'))][0] {
  _id,
  educationLevel,
  scheduleKBM,
  typeOfAcitvity,
  extracurricular,
  extracurricularImages[] {
    imageTitle,
    "imageUrl": imageFile.asset->url
  },
  teachers[] {
    name,
    jobTitle,
    "image": imageFile.asset->url
  }
}
`;

export const EDUCATIONS_SMP = groq`
*[_type == "educations" && educationLevel == "SMP" && !(_id in path('drafts.**'))][0] {
  _id,
  educationLevel,
  scheduleKBM,
  typeOfAcitvity,
  extracurricular,
  extracurricularImages[] {
    imageTitle,
    "imageUrl": imageFile.asset->url
  },
  teachers[] {
    name,
    jobTitle,
    "image": imageFile.asset->url
  }
}
`;

export const EDUCATIONS_SMA = groq`
*[_type == "educations" && educationLevel == "SMA" && !(_id in path('drafts.**'))][0] {
  _id,
  educationLevel,
  scheduleKBM,
  typeOfAcitvity,
  extracurricular,
  extracurricularImages[] {
    imageTitle,
    "imageUrl": imageFile.asset->url
  },
  teachers[] {
    name,
    jobTitle,
    "image": imageFile.asset->url
  }
}
`;

export const INSTITUTIONAL_ADMINSTRATOR = groq`
*[_type == "institutionalAdministrator" && !(_id in path('drafts.**'))] {
  _id,
  name,
  jobTitle,
  "imageUrl": image.asset->url
}
`;

export const FACIILITIES_IMAGES = groq`
*[_type == "facilitiesImages" && !(_id in path('drafts.**'))] {
  _id,
  imageTitle,
  "imageUrl": imageFile.asset->url
}
`;

export const YOUTUBE_EMBED = groq`
*[_type == "socialMedia" && platformTitle == "Youtube Embed" && !(_id in path('drafts.**'))][0] {
  _id,
  platformTitle,
  "iconUrl": iconFile.asset->url,
  link
}
`;
