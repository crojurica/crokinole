// Osnovni podaci o udruzi. Kad udruga bude upisana u registar, ovdje dopuniti OIB, adresu i IBAN.
export const site = {
  naziv: 'Crokinole Hrvatska',
  opis: 'Udruga za crokinole u Hrvatskoj: liga, turniri, pravila igre i zajednica igrača.',
  email: 'info@crokinole.hr', // TODO: potvrditi adresu kad bude postavljena pošta na domeni
  oib: '', // TODO: nakon upisa u Registar udruga
  adresa: '', // TODO: sjedište udruge
};

export const navigacija = [
  { href: '/', naziv: 'Naslovnica' },
  { href: '/o-nama/', naziv: 'O nama' },
  { href: '/pravila/', naziv: 'Pravila igre' },
  { href: '/liga/', naziv: 'Liga 2027' },
  { href: '/kalendar/', naziv: 'Kalendar' },
  { href: '/vijesti/', naziv: 'Vijesti' },
  { href: '/kontakt/', naziv: 'Kontakt' },
];
