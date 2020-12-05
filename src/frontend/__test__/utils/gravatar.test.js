import gravatar from '../../utils/gravatar';

test('Gravatar Function test', () => {
  const email = 'luisfernando.mendez5@gmail.com';
  const gravatarUrl = 'https://gravatar.com/avatar/2ca228dfd1fa28dcac30e4b95fd8a5c7';
  expect(gravatarUrl).toEqual(gravatar(email));
});

