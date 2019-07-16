const pluralize = (count, singular, plural) => {
  return count === 1 ? singular : plural
}

export const pluralizeWithValue = (count, singular, plural) => {
  return `${count} ${pluralize(count, singular, plural)}`
}

export default pluralize
