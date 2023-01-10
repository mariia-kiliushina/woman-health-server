export const pickFields = {
  user: "id, password, username",
  boardSubject: "id, name",
  board: `
    admins { id, password, username },
    id,
    members { id, password, username },
    name,
    subject { id, name }
  `,
  budgetCategoryType: "id, name",
  budgetCategory: `
    board { id, name },
    id,
    name,
    type { id, name }
  `,
  budgetRecord: `
    amount,
    category {
      board { id, name },
      id,
      name,
      type { id, name }
    },
    date,
    id,
    isTrashed
  `,
  activityCategoryMeasurementType: "id, name",
  activityCategory: `
    board { id, name },
    id,
    name,
    measurementType { id, name },
    owner { id, password, username },
    unit
  `,
  activityRecord: `
    booleanValue,
    category {
      board { id, name },
      id,
      measurementType { id, name },
      name,
      owner { id, password, username },
      unit
    },
    comment,
    date,
    id,
    quantitativeValue
  `,
  symptom: `
    id
    name
  `,
  periodIntensity: `
    slug
  `,
  periodRecord: `
    date
    id
    intensity
    mood
    symptoms { id, name }
    user { id, password, username }
  `,
}
