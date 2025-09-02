export function getFormattedDate(date?: string): string {
  const now = new Date();
  const day = now.getDate();
  const month = now.toLocaleString('en-US', { month: 'long' });

  return `${day} ${month}`;
};