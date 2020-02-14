export const propDataFilter = (searchFilter, searchTerm, prop) => {
  switch (searchFilter) {
    case 'id': {
      return prop.id.toLowerCase().includes(searchTerm.toLowerCase())
    }

    case 'name': {
      return prop.name.toLowerCase().includes(searchTerm.toLowerCase())
    }

    case 'type': {
      return prop.type.name.toLowerCase().includes(searchTerm.toLowerCase())
    }

    case 'required': {
      return prop.required.toString().includes(searchTerm.toLowerCase())
    }

    case 'defaultValue': {
      return (
        prop.defaultValue &&
        prop.defaultValue.value.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
    case 'description': {
      return prop.description.text
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    }
  }
}
