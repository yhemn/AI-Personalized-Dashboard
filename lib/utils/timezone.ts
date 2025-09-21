export function detectTimezone(): string {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
    return 'UTC';
  }
}

export const timezoneOptions = [
  { label: 'Pacific/Auckland (GMT+13)', value: 'Pacific/Auckland' },
  { label: 'Asia/Tokyo (GMT+9)', value: 'Asia/Tokyo' },
  { label: 'Asia/Shanghai (GMT+8)', value: 'Asia/Shanghai' },
  { label: 'Asia/Dubai (GMT+4)', value: 'Asia/Dubai' },
  { label: 'Europe/London (GMT+0)', value: 'Europe/London' },
  { label: 'Europe/Paris (GMT+1)', value: 'Europe/Paris' },
  { label: 'Europe/Moscow (GMT+3)', value: 'Europe/Moscow' },
  { label: 'America/New_York (GMT-5)', value: 'America/New_York' },
  { label: 'America/Chicago (GMT-6)', value: 'America/Chicago' },
  { label: 'America/Denver (GMT-7)', value: 'America/Denver' },
  { label: 'America/Los_Angeles (GMT-8)', value: 'America/Los_Angeles' },
  { label: 'Pacific/Honolulu (GMT-10)', value: 'Pacific/Honolulu' },
  { label: 'UTC', value: 'UTC' },
];

export const interestOptions = [
  'AI & Machine Learning',
  'React & Frontend',
  'Node.js & Backend',
  'Mobile Development',
  'Design & UX/UI',
  'Data Science',
  'DevOps & Cloud',
  'Blockchain & Web3',
  'E-commerce',
  'Business & Marketing',
  'Education & Teaching',
  'Gaming',
  'Health & Fitness',
  'Finance & Fintech',
  'Travel & Lifestyle',
  'Photography',
  'Music & Audio',
  'Writing & Content',
  'Productivity',
  'Sustainability',
];
