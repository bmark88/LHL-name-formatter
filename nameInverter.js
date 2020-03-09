const nameInverter = function(name) {
  if (name === undefined) {
    throw new Error('Error');
  }

  if (name === "") {
    return "";
  }

  if (name.split(' ')[0] === '' && name.split(' ')[2] === '') {
    return name.split(' ').sort().pop();
  }

  if (name.split(' ').length > 2 && name.includes('.' === false)) { // stretch test
    const removeExtraSpaces = name.split(' ');
    const nameWithNoSpaces = removeExtraSpaces.filter(item => item.length > 1);
    const firstName = nameWithNoSpaces[0];
    const lastName = nameWithNoSpaces[1];

    return `${lastName}, ${firstName}`;
  }

  if (name.split(' ').length > 2 && name.includes('.') === false) {
    const removeExtraSpaces = name.split(' ');
    const nameWithNoSpaces = removeExtraSpaces.filter(item => item.length > 1);
    const firstName = nameWithNoSpaces[0];
    const lastName = nameWithNoSpaces[1];

    return `${lastName}, ${firstName}`;
  }

  if (name.split(' ').length === 2 && name.includes('.') === false) {
    const firstName = name.split(' ')[0];
    const lastName = name.split(' ')[1];

    return `${lastName}, ${firstName}`;
  }

  if (name.split('.').length === 2 && name.length <= 4) {
    return "";
  }

  if (name.split('. ').length === 2 && name.split('. ').includes('') === false && name.split('. ').join('').split(' ').length === 1) {
    return name.split('. ').join('. ');
  }

  if (name.split('. ').length === 2 && name.split('. ').includes('') === false && name.split('. ').join('').split(' ').length === 2) {
    const honorific = name.split(' ')[0];
    const firstName = name.split(' ')[1];
    const lastName = name.split(' ')[2];

    return `${honorific} ${lastName}, ${firstName}`;
  }

  if (name.split('. ').length === 2 && name.split('. ').includes('') === false && name.split('. ').join('').split(' ').length > 2) {
    const removeExtraSpaces = name.split(' ');
    const nameWithNoSpaces = removeExtraSpaces.filter(item => item.length > 1);
    const honorific = nameWithNoSpaces[0];
    const firstName = nameWithNoSpaces[1];
    const lastName = nameWithNoSpaces[2];

    return `${honorific} ${lastName}, ${firstName}`;
  }

  return name;
};



module.exports = nameInverter;