
const ftId = 'formTimestamps';

/**
 * Retrieves form timestamps from local storage that are within the last 24 hours.
 * Filters the stored timestamps to return only those which are less than 24 hours old.
 *
 * @returns {number[]} An array of timestamps from the last 24 hours.
 */
export const getFormTimestamps = () => {
  const currentTime: number = Date.now();
  const storedData = localStorage.getItem(ftId);
  const timestamps: number[] = storedData ? JSON.parse(storedData) : [];

  return timestamps.filter((ts: number) => currentTime - ts < 24 * 60 * 60 * 1000);
};

/**
 * Updates the stored form timestamps by adding a new one and saving it to local storage.
 */
export const updateFormTimestamps = () => {
  const currentTimestamps = getFormTimestamps();
  currentTimestamps.push(Date.now());
  localStorage.setItem(ftId, JSON.stringify(currentTimestamps));
};
