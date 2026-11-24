// Kalendar događanja. Novi događaj = novi redak u popisu.
// Datumi su u formatu GGGG-MM-DD.

export type Dogadaj = {
  datum: string;
  doDatuma?: string;
  naziv: string;
  vrsta: 'liga' | 'turnir' | 'parovi' | 'stanka' | 'udruga';
  mjesto?: string;
  opis?: string;
};

export const kalendar: Dogadaj[] = [
  {
    datum: '2027-01-11',
    naziv: 'Početak Lige 2027',
    vrsta: 'liga',
    opis: 'Prva liga večer sezone. Liga se igra jednom tjedno; dan u tjednu i mjesto još se dogovaraju.',
  },
  {
    datum: '2027-07-19',
    doDatuma: '2027-08-22',
    naziv: 'Ljetna stanka lige',
    vrsta: 'stanka',
  },
  {
    datum: '2027-11-21',
    naziv: 'Kraj regularnog dijela lige',
    vrsta: 'liga',
  },
  {
    datum: '2027-12-04',
    naziv: 'Masters 2027',
    vrsta: 'turnir',
    opis: 'Završni turnir sezone za 12 najbolje plasiranih igrača lige.',
  },
];

export const vrsteDogadaja: Record<Dogadaj['vrsta'], string> = {
  liga: 'Liga',
  turnir: 'Turnir',
  parovi: 'Parovi',
  stanka: 'Stanka',
  udruga: 'Udruga',
};

const mjeseci = [
  'siječnja', 'veljače', 'ožujka', 'travnja', 'svibnja', 'lipnja',
  'srpnja', 'kolovoza', 'rujna', 'listopada', 'studenoga', 'prosinca',
];

export function formatDatum(iso: string | Date, sGodinom = true): string {
  const d = typeof iso === 'string' ? new Date(iso + 'T12:00:00') : iso;
  const base = `${d.getDate()}. ${mjeseci[d.getMonth()]}`;
  return sGodinom ? `${base} ${d.getFullYear()}.` : base;
}
