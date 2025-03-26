import { ref, get, set } from 'firebase/database';
import { Database } from 'firebase/database';
import { Artist } from '../objects/artist'; // Adjust the import path

async function cloneArtistData(
  database: Database,
  sourceUid: string,
  destinationUid: string
): Promise<void> {
  try {
    const sourceArtistRef = ref(database, `profiles/${sourceUid}`);
    const sourceSnapshot = await get(sourceArtistRef);

    if (sourceSnapshot.exists()) {
      const sourceArtistData = sourceSnapshot.val() as Artist;

      const destinationArtistRef = ref(database, `profiles/${destinationUid}`);
      await set(destinationArtistRef, sourceArtistData);

      console.log(`Successfully cloned artist data from ${sourceUid} to ${destinationUid}`);
    } else {
      console.error(`Source artist with UID ${sourceUid} does not exist.`);
      throw new Error(`Source artist with UID ${sourceUid} does not exist.`);
    }
  } catch (error) {
    console.error('Error cloning artist data:', error);
    throw error; // Re-throw the error for handling in the calling function
  }
}

export default cloneArtistData;