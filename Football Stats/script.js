const main = d3.select('main');
main.append('h1').text('Bonne chance');

const states = ["Final", "Semi-finals", "Quarter-finals", "Eights-finals", "Group stage or previous rounds"]

const data = {
  '1980': { stage: 'Quarter-finals', teams: ['AS Saint-Etienne'] },
  '1981': { stage: 'Semi-finals', teams: ['FC Sochaux'] },
  '1982': { stage: 'Eights-finals', teams: ['Girondins de Bordeaux'] },
  '1983': { stage: 'Eights-finals', teams: ['Girondins de Bordeaux'] },
  '1984': { stage: 'Eights-finals', teams: ['RC Lens'] },
  '1985': {
    stage: 'Group stage or previous rounds',
    teams: ['Paris Saint Germain'],
  },
  '1986': { stage: 'Quarter-finals', teams: ['FC Nantes'] },
  '1987': { stage: 'Group stage or previous rounds', teams: ['FC Toulouse'] },
  '1988': { stage: 'Group stage or previous rounds', teams: ['FC Toulouse'] },
  '1989': { stage: 'Eights-finals', teams: ['Girondins de Bordeaux'] },
  '1990': { stage: 'Quarter-finals', teams: ['AJ Auxerre'] },
  '1991': {
    stage: 'Eights-finals',
    teams: ['AS Monaco', 'Girondins de Bordeaux'],
  },
  '1992': {
    stage: 'Group stage or previous rounds',
    teams: ['AJ Auxerre', 'AS Cannes', 'Olympique Lyonnais'],
  },
  '1993': {
    stage: 'Semi-finals',
    teams: ['AJ Auxerre', 'Paris Saint Germain'],
  },
  '1994': { stage: 'Eights-finals', teams: ['Girondins de Bordeaux'] },
  '1995': { stage: 'Quarter-finals', teams: ['FC Nantes'] },
  '1996': { stage: 'Final', teams: ['Girondins de Bordeaux'] },
  '1997': { stage: 'Semi-finals', teams: ['AS Monaco'] },
  '1998': { stage: 'Quarter-finals', teams: ['AJ Auxerre'] },
  '1999': { stage: 'Final', teams: ['Olympique de Marseille'] },
  '2000': { stage: 'Semi-finals', teams: ['RC Lens'] },
  '2001': {
    stage: 'Eights-finals',
    teams: ['Girondins de Bordeaux', 'FC Nantes'],
  },
  '2002': { stage: 'Eights-finals', teams: ['Olympique Lyonnais', 'Lille OSC'] },
  '2003': { stage: 'Eights-finals', teams: ['AJ Auxerre'] },
  '2004': { stage: 'Final', teams: ['Olympique de Marseille'] },
  '2005': { stage: 'Quarter-finals', teams: ['AJ Auxerre'] },
  '2006': {
    stage: 'Eights-finals',
    teams: ['Lille OSC', 'AJ Auxerre', 'Olympique de Marseille'],
  },
  '2007': { stage: 'Eights-finals', teams: ['RC Lens', 'Paris Saint Germain'] },
  '2008': { stage: 'Eights-finals', teams: ['Olympique de Marseille'] },
  '2009': {
    stage: 'Quarter-finals',
    teams: ['Olympique de Marseille', 'Paris Saint Germain'],
  },
  '2010': {
    stage: 'Eights-finals',
    teams: ['Olympique de Marseille', 'Lille OSC'],
  },
  '2011': { stage: 'Eights-finals', teams: ['Paris Saint Germain'] },
  '2012': {
    stage: 'Group stage or previous rounds',
    teams: ['Paris Saint Germain', 'Stade Rennais'],
  },
  '2013': { stage: 'Eights-finals', teams: ['Girondins de Bordeaux'] },
  '2014': { stage: 'Quarter-finals', teams: ['Olympique Lyonnais'] },
  '2015': { stage: 'Group stage or previous rounds', teams: ['EA Guingamp'] },
  '2016': {
    stage: 'Group stage or previous rounds',
    teams: ['Olympique de Marseille', 'AS Saint-Etienne'],
  },
  '2017': { stage: 'Semi-finals', teams: ['Olympique Lyonnais'] },
  '2018': { stage: 'Final', teams: ['Olympique de Marseille'] },
  '2019': { stage: 'Group stage or previous rounds', teams: ['Stade Rennais'] },
  '2020': {
    stage: 'Group stage or previous rounds',
    teams: ['Stade Rennais', 'AS Saint-Etienne'],
  },
};
