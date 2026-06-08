export const EXTERNAL_LINKS = {
  university: 'https://www.lsbu.ac.uk',
  email: 'mailto:s4230337@lsbu.ac.uk',
  outlook: 'https://outlook.office.com/mail/',
  moodle: 'https://vle.lsbu.ac.uk',
  teams: 'https://teams.microsoft.com',
  library: 'https://www.lsbu.ac.uk/library',
};

export function openExternal(url) {
  window.open(url, '_blank', 'noopener,noreferrer');
}
