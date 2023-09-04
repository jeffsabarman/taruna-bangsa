import moment from 'moment'

export const getShortenText = (
  text: string,
  maxCharNum: number,
  cutOffCharNum: number
) => {
  return text?.length > maxCharNum
    ? `${text?.substring(0, cutOffCharNum)}...`
    : text
}

export const getFormatDate = (date: string | Date) => {
  return moment(new Date(date)).format('DD MMM, YYYY')
}

export const getEmbedYoutubeLink = (youtubeLink: string) => {
  return youtubeLink?.includes('embed')
    ? youtubeLink
    : youtubeLink.replace('watch?v=', 'embed/')
}
