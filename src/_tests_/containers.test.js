const Team = require('../containers');

describe('Team', () => {
  test('add should add a character to the team', () => {
    const team = new Team();
    team.add('Character 1');
    expect(team.toArray()).toEqual(['Character 1']);
  });

  test('add should throw an error if a character is already in the team', () => {
    const team = new Team();
    team.add('Character 1');
    expect(() => {
      team.add('Character 1');
    }).toThrow('Character is already in the team.');
  });

  test('addAll should add multiple characters to the team', () => {
    const team = new Team();
    team.addAll('Character 2', 'Character 3');
    expect(team.toArray()).toEqual(['Character 2', 'Character 3']);
  });
});