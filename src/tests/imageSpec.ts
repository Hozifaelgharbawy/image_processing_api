import { saveImages } from '../utils/utils';

describe('testing image', () => {
  it('Error if wrong image name is provided', async () => {
    await expectAsync(saveImages('sdaas', 200, 200)).toBeRejectedWithError(
      Error,
      'Input file is missing'
    );
  });

  it('Success when providing the correct image name, height, and width', async () => {
    await expectAsync(saveImages('icelandwaterfall', 200, 200)).toBeResolved();
  });
});