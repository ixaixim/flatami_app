const lucideReact = require('lucide-react');

const iconNames = [
  'DollarSign',
  'ShieldCheck', 
  'Sun',
  'Brush',
  'Cigarette',
  'PawPrint',
  'PartyPopper',
  'Users',
  'MapPin',
  'Calendar',
  'Briefcase'
];

console.log('Testing icon availability:');
iconNames.forEach(name => {
  const icon = lucideReact[name];
  if (icon) {
    console.log(`✓ ${name} - Available`);
  } else {
    console.log(`✗ ${name} - NOT FOUND`);
  }
});

console.log('\nAll icons should be available now!');
