// Return the current year
function getFullYear() {
  return new Date().getFullYear();
}

// Get footer copy
function getFooterCopy(isIndex) {
  if (isIndex) {
    return 'Holberton School';
  }
  return 'Holberton School main dashboard';
}

export { getFullYear, getFooterCopy };