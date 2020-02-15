import { ID, NAME, TYPE, REQUIRED, DEFAULT_VALUE, DESCRIPTION } from '../const'

export const propDataFilter = (searchFilter, searchTerm, prop) => {
  switch (searchFilter) {
    case ID: {
      return prop.id.toLowerCase().includes(searchTerm.toLowerCase())
    }

    case NAME: {
      return prop.name.toLowerCase().includes(searchTerm.toLowerCase())
    }

    case TYPE: {
      return prop.type.name.toLowerCase().includes(searchTerm.toLowerCase())
    }

    case REQUIRED: {
      return prop.required.toString().includes(searchTerm.toLowerCase())
    }

    case DEFAULT_VALUE: {
      return (
        prop.defaultValue &&
        prop.defaultValue.value.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
    case DESCRIPTION: {
      return prop.description.text
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    }
  }
}
